#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 87626;
console.log(myPin);
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number"
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin Code!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "PLease select option",
            type: "list",
            choices: ["withdraw", "fastCash", "Check balance"]
        }
    ]);
    if (operationAnswer.operation === "fastCash") {
        let fastcashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "please select amount",
                type: "list",
                choices: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
            }
        ]);
        myBalance -= fastcashAmount.fastCash;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "name"
            }
        ]);
        if (myBalance >= amountAnswer.amount) {
            let remaining = myBalance -= amountAnswer.amount;
            console.log(`Your remaining balance is: ${remaining}`);
        }
        else {
            console.log(`your current amount is: ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "Check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin Code!");
}
