#! /usr/bin/env nodel

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { add, subtract , multiply, division } from "./operators.js";
import figlet from "figlet";

// welcome note
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000)
    })
}
 async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow (`Welcome to My Calculator`);
    await sleep();
    rainbowTitle.stop();
    console.log(`
    _____________________
    |  _________________  |
    | | Welcome      0. |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `);
    console.log(chalk.red(`Press any Arrow key to continue`));
}
welcome();

// menu
const input = await inquirer.prompt ([
{
    name : "num1",
    type : "number",
    message : "Enter the first number"
},
{
    name : "num2",
    type : "number",
    message : "Enter the second number"
},
{
    name : "operation",
    type : "list",
    message : "Select the operator you want to perform: ",
    choices : ["+", "-", "*", "/"]
}

]);

let result : number ;


if(input.operation == "+"){
    let result = add (input.num1 , input.num2);
    console.log (chalk.italic.blueBright.bold("The result is: ", result));
}
else if (input.operation =="-"){
    let result = subtract (input.num1 , input.num2);
    console.log (chalk.italic.cyan.bold("The result is: ", result));
}
else if (input.operation =="*"){
    let result = multiply (input.num1 , input.num2);
    console.log (chalk.italic.green.bold("The result is: ", result));
}
else if (input.operation =="/"){
    let result = division (input.num1 , input.num2);
    console.log (chalk.italic.bold.gray("The result is: ", result));
}
else{
    console.log (chalk.red.bold("You have entered wrong input"));
}

// again asking

