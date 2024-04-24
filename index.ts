#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log(Welcome to number guessing game);

const answers = await inquirer.prompt ([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 10: ",
},
]);

if(answers.userGuessedNumber === randomNumber ){
    console.log("congratulations! you guessed right number. ")
}else{
    console.log("you guessed wrong number")
}