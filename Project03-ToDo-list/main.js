#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo ?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo?",
            default: "false"
        }
    ]);
    todos.push(answer.TODO);
    loop = answer.addmore;
    console.log(todos);
}
if (todos.length >= 0) {
    console.log("Your Todo List");
    todos.forEach((todo) => {
        console.log(todo);
    });
}
else {
    console.log("No todos found");
}
