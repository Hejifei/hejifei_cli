#!/usr/bin/env node
const {Command} = require('commander');
const minimist = require('minimist');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');
const ora = require("ora");

const {version} = require('../package.json');

const cliName = 'hejifei-cli'

const program = new Command();
// 定义一个loading
const spinner = ora("Loading unicorns");

// // 查看版本号
// program.name(name).version(version).option('-v,--version','查看版本号')
// program.parse(process.argv)

// 定义当前版本
program.version(
  `${cliName}: ${version}`,
  "-v, --version",
  "查看版本号"
);

// 定义create命令
program
  .command("create <app-name>")
  .description(`Create a new project.`)
  // .option("-f, --force", "Overwrite target directory if it exists")
  .option('-p, --preset <presetName>', 'Skip prompts and use saved or remote preset')
  .option('-d, --default', 'Skip prompts and use default preset')
  .alias("c")
  .action((name, cmd) => {
    console.log(
      "\r\n" +
        figlet.textSync("Goodwe", {
          // font: "Ghost",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 80,
          whitespaceBreak: true,
        })
    );
    console.log(chalk.green(`project name -> `, name));
    if (minimist(process.argv.slice(3))._.length > 1) {
      const info = `Info: You provided more than one argument. The first one will be used as the app's name, the rest are ignored. `;
      console.log(chalk.yellow(info));
      return;
    }
    const options = cleanArgs(cmd)
    require('../lib/create')(name, options)
    // inquirer.prompt([
    //   {
    //     name: "vue",
    //     // 多选交互功能
    //     // 单选将这里修改为 list 即可
    //     type: "checkbox",
    //     // type: "list",
    //     message: "Check the features needed for your project:",
    //     choices: [
    //       {
    //         name: "Babel",
    //         checked: true,
    //       },
    //       {
    //         name: "TypeScript",
    //       },
    //       {
    //         name: "Progressive Web App (PWA) Support",
    //       },
    //       {
    //         name: "Router",
    //       },
    //     ],
    //   },
    // ]).then((data) => {
    //   console.log(data);
    //   // 启动loading
    //   spinner.start();
    //   setTimeout(() => {
    //     spinner.color = "yellow";
    //     spinner.text = "Loading rainbows";
    //     // loading 成功
    //     // spinner.succeed();
    //     // loading 失败
    //     spinner.fail();
    //   }, 1000);

      
      
    // });
    


  });

// 解析运行参数(必须且要放在最后一行)
program.parse(process.argv);
