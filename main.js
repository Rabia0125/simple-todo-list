#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright("Welcome to my todo list"));
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "What you want to add in your task?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task?",
            default: true
        }
    ]);
    todos.push(addtask.task);
    condition = addtask.addmore;
    console.log(todos);
}
