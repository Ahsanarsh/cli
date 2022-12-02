#!usr/bin/env node


import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";


const sleep = ()=>{
    return new Promise((res) => {
        setTimeout(res,2000);
        })
}
async function welcome() {
    let rainbowtitle=chalkAnimation.rainbow("let start calculation");
    await sleep();
     rainbowtitle.stop();
     console.log( `       _____________________
        |  _________________  |
        | | JO           0. | |
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
        |_____________________|`);
}
//welcome();

async function askquestion(){
     inquirer
    .prompt([
                { 
       type:"list",
       name:"operator",
        message:"Which operation you want to perform? \n",
        Choices:["additon","substraction","division","multiplication"]

 },
 {
     type:"number",
     name:"num1",
     message:"Enter number 1:"
 }, 
 {
     type:"number",
    name:"num2",
        message:"Enter number 2:"
 }
 ])
 .then((answers)=>{
 if (answers.operrator == "adittion"){
     console.log(`$(answers.num1) + $(answers.num2) = $(answer.num1 + answer.num2)`)
    }
 else if(answers.operrator == "substraction"){
        console.log(`$(answers.num1) - $(answers.num2) = $(answer.num1 - answer.num2)`)
 }
 else if(answers.operrator == "multiplication"){
     console.log(`$(answers.num1) * $(answers.num2) = $(answer.num1 * answer.num2)`)
 }
 else if(answers.operrator == "division"){
     console.log(`$(answers.num1) / $(answers.num2) = $(answer.num1 / answer.num2)`)
 }
 })
  }
 askquestion();
