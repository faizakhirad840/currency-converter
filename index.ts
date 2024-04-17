#!/usr/bin/env node

import inquirer from "inquirer";

let currency: any = {
    USD: 1,
    PKR: 277.54,
    TRY: 32.03,
    BDT: 109.60,
    INR: 83.30,
    AUD: 1.52,
    EUR: 0.92
}

let userAnswer = await inquirer.prompt(
    [
        {
            name: "fromCurrency",
            message: "Enter from currency:",
            type: "list",
            choices: ["USD", "PKR", "TRY", "BDT", "INR", "AUD", "EUR"]
        },
        {
            name: "toCurrency",
            message: "Enter to currency:",
            type: "list",
            choices: ["USD", "PKR", "TRY", "BDT", "INR", "AUD", "EUR"]
        },
        {
            name: "amount",
            message: "Enter your Amount:",
            type: "number"
        }
    ]
);

let fromAmount = currency[userAnswer.fromCurrency];
let toAmount = currency[userAnswer.toCurrency];
let amount = userAnswer.amount;

let baseAmount = amount / fromAmount;
let convertedAmount = Math.floor(baseAmount * toAmount);

console.log("Converted Amount:", convertedAmount);
