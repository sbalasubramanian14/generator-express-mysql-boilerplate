"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the impeccable ${chalk.red(
          "generator-express-mysql-boilerplate"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "Please specify the project name :",
        default: "my-api-project"
      },
      {
        type: "input",
        name: "databaseName",
        message: "Please specify the mysql database name :",
        default: "mydatabase"
      },
      {
        type: "input",
        name: "databaseHost",
        message: "Please specify the mysql database host :",
        default: "127.0.0.1"
      },
      {
        type: "input",
        name: "databaseUsername",
        message: "Please specify the mysql database username :",
        default: "admin"
      },
      {
        type: "input",
        name: "databasePassword",
        message: "Please specify the mysql database password :",
        default: "admin@123"
      }
      // {
      //   type: 'confirm',
      //   name: 'someAnswer',
      //   message: 'Would you like to enable this option?',
      //   default: true
      // }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      //glob.sync(this.templatePath('**/*'), { dot: true }),
      `${this.templatePath()}/**/*`,
      this.destinationPath(),
      this.props
    );
  }

  install() {
    this.installDependencies();
  }
};
