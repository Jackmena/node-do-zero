const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "name",
      message: "Qual o seu nome?",
    },
    {
      name: "age",
      message: "Qual a sua idade?",
    },
  ])
  .then((question) => {
    if (!question.name || !question.age) {
      throw new Error('O nome e a idade são obrigatórios!')
    }
    console.log(
      chalk.bgYellow.black(
        `Seu nome é ${question.name} e você tem ${question.age} anos!`
      )
    );
  })
  .catch((err) => console.log(err));
