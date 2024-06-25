#!/usr/bin/env node

import inquirer from "inquirer";

type answerType={
    userGuess:number,
}

const systemGeneratedNumber=Math.floor(Math.random() * 10);
const answers:answerType=await inquirer.prompt([
    {
        type:"number",
        name:"userGuess",
        message:"Write your guess b/w 1 to 10:"
    }
]);
const {userGuess}=answers;
console.log(userGuess,"userGuess",systemGeneratedNumber,'System Number');
if(userGuess===systemGeneratedNumber){
    console.log("Yaaaaaa Your answer is correct \n You Win!");
}else{
    console.log("Please try again Better luck next time!")
}