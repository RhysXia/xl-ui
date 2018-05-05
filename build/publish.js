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
    }

    if (answers.docs) {
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
    }

    const comment = answers.message || `update version to ${version}`
    //编译
    const cmd = `npm run dist && git add . && git commit -m'${comment}' && git push origin master`

    if (exec(cmd).code) {
      console.log(chalk.red(`git提交失败`))
      exit(1)
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
