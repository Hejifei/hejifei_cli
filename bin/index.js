#!/usr/bin/env node
// console.log('hello hejifei-cli');
const program = require('commander')
const {name, version} = require('../package.json')

// 查看版本号
program.name(name).version(version).option('-v,--version','查看版本号')
program.parse(process.argv)
