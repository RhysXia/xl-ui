require('shelljs/global')
const inquirer = require('inquirer')
const chalk = require('chalk')
const package = require('../package.json')
const semver = require('semver')
const path = require('path')
const fs = require('fs')
const moment = require('moment')

const oldVersion = package.version

const versionList = getVersionList(oldVersion)

inquirer
  .prompt([
    {
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
      name: 'docs',
      message: '是否编译文档',
      type: 'confirm',
      default: true
    },
    {
      name: 'npm',
      message: '是否发布到npm中',
      type: 'confirm',
      defalut: false
    }
  ])
  .then(function(answers) {
    const version = `${answers.version}`
    package.version = version
    fs.writeFileSync(
      process.cwd() + '/package.json',
      JSON.stringify(package, null, '  ')
    )

    if (answers.style) {
      const stylePath = process.cwd() + '/styles/theme-default'
      rmdirSync(stylePath + '/lib')
      console.log(chalk.green('成功删除曾经生成的样式文件'))

      const stylePkg = require(stylePath + '/package.json')
      stylePkg.version = version
      fs.writeFileSync(
        stylePath + '/package.json',
        JSON.stringify(stylePkg, null, '  ')
      )
      const cmd = `cd ${stylePath} && npm run build`
      if (exec(cmd).code) {
        console.log(chalk.red(`编译样式文件失败`))
        exit(1)
      }
      console.log(chalk.green('成功生成样式文件'))
    }

    if (answers.docs) {
      rmdirSync(process.cwd() + '/docs')
      console.log(chalk.green('成功删除曾经生成的文档'))
      const docsPath = process.cwd() + '/docs-src'
      const docsPkg = require(docsPath + '/package.json')
      docsPkg.version = version
      fs.writeFileSync(
        docsPath + '/package.json',
        JSON.stringify(docsPkg, null, '  ')
      )
      const cmd = `cd ${docsPath} && npm run build`
      if (exec(cmd).code) {
        console.log(chalk.red(`编译文档失败`))
        exit(1)
      }
      console.log(chalk.green('成功生成文档'))
    }

    rmdirSync(process.cwd() + '/dist')
    console.log(chalk.green('成功删除曾经生成的组件'))

    const comment = answers.message || `update version to ${version}`
    //编译
    const cmd = `npm run dist && git add . && git commit -m'${comment}' && git push origin master`

    if (exec(cmd).code) {
      console.log(chalk.red(`git提交失败`))
      exit(1)
    }
    console.log(chalk.green('成功生成组件并上传github'))

    if (answers.npm) {
      if (exec('npm publish')) {
        console.log(chalk.red(`发布到npm库中失败`))
        exit(1)
      }
      console.log(chalk.green('成功发布到npm库中'))
    }

    console.log(chalk.green(`发布成功,当前版本(${version})`))
  })

function getVersionList(version) {
  var levels = [
    ['prerelease', 'beta'],
    ['patch', ''],
    ['minor', ''],
    ['major', '']
  ]
  var opts = []

  levels.forEach(function(item) {
    var val = semver.inc(version, item[0], item[1])
    opts.push({
      name: val,
      value: val
    })
  })

  return opts
}

function rmdirSync(path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path)
    files.forEach(function(file, index) {
      var curPath = path + '/' + file
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        rmdirSync(curPath)
      } else {
        // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}
