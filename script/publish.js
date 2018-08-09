'use strict'
const shell = require('shelljs')
const inquirer = require('inquirer')
const chalk = require('chalk')
const semver = require('semver')
const fs = require('fs')
const ghpages = require('gh-pages')
const config = require('./config')
const {
  resolvePath,
  getSubDirs,
  rmdirSync
} = require('./utils')

if (!shell.which('git')) {
  console.log(chalk.red('git不存在，请先安装git'))
  shell.exit(1);
}

const pkg = require(resolvePath('package.json'))

const oldVersion = pkg.version

const versionList = getVersionList(oldVersion)

inquirer.prompt([{
    name: 'version',
    message: `选择要升级的版本(当前版本${oldVersion})`,
    type: 'list',
    default: 0,
    choices: versionList
  },
  {
    name: 'message',
    message: '版本发布说明',
    type: 'input',
    default: ''
  },
  {
    name: 'style',
    message: '是否重新编译样式文件',
    type: 'confirm',
    default: true
  },
  {
    name: 'tag',
    message: '是否发布版本',
    type: 'confirm',
    default: false
  },
  {
    name: 'docs',
    message: '是否重新发布文档',
    type: 'confirm',
    default: true
  }
]).then(function (answers) {

  if (answers.style) {
    console.log(chalk.green('删除生成的样式文件'))

    getSubDirs(config.style.dir).forEach(dir => {
      rmdirSync(dir + '/lib')
    })

    console.log(chalk.green('编译样式文件'))

    if (shell.exec(`npm run style:prod`).code) {
      console.log(chalk.red(`编译样式文件失败`))
      shell.exit(1)
    }
  }

  console.log(chalk.green('删除生成的组件'))
  rmdirSync(config.src.dist)

  console.log(chalk.green('编译组件'))

  if (shell.exec(`npm run src:dist`).code) {
    console.log(chalk.red('编译组件失败'))
    shell.exit(1)
  }

  const version = `${answers.version}`
  pkg.version = version
  fs.writeFileSync(
    resolvePath('package.json'),
    JSON.stringify(pkg, null, '  ')
  )

  //提交代码
  const comment = answers.message || `:rocket:update version to ${version}`

  console.log(chalk.green('git提交代码'))

  let cmd = `git add . && git commit -m "${comment}" && git push origin master`
  if (shell.exec(cmd).code) {
    pkg.version = oldVersion
    fs.writeFileSync(
      resolvePath('package.json'),
      JSON.stringify(pkg, null, '  ')
    )
    console.log(chalk.red(`git提交失败`))
    shell.exit(1)
  }

  if (answers.tag) {
    console.log(chalk.green(`git发布版本${version}`))
    cmd = `git tag -a ${version} -m "${comment}" && git push origin ${version}`
    if (shell.exec(cmd).code) {
      console.log(chalk.red(`git发布版本${version}失败`))
      shell.exit(1)
    }
  }

  let promise = Promise.resolve()
  if (answers.docs) {
    console.log(chalk.green('删除生成的文档'))
    rmdirSync(config.docs.dist)
    console.log(chalk.green('编译文档'))
    if (shell.exec(`npm run docs:prod`).code) {
      console.log(chalk.red('编译组件失败'))
      shell.exit(1)
    }

    console.log(chalk.green('发布文档'))
    promise.then(() => {
      return ghpages.publish(config.docs.dist)
    })
  }

  promise.then(() => {
    console.log(chalk.green(`发布成功,当前版本(${version})`))
  }).catch(err => {
    console.log(chalk.red('发布文档失败'))
  })
})

function getVersionList(version) {
  var levels = [
    ['prerelease', 'beta'],
    ['patch', ''],
    ['minor', ''],
    ['major', '']
  ]
  var opts = []

  levels.forEach(function (item) {
    var val = semver.inc(version, item[0], item[1])
    opts.push({
      name: val,
      value: val
    })
  })

  return opts
}
