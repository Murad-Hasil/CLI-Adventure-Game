#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }

  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

let player = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: chalk.bold.yellow("What is your name?"),
  },
]);

let opponent = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: chalk.bold.yellow("Select The Opponent"),
    choices: ["Skeleton", "Alien", "Zombie"],
  },
]);

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do {
  // Skeleton
  if (opponent.select === "Skeleton") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: chalk.bold.yellow("Select the move"),
        choices: ["Attack", "Drink Portion", "Run For Life"],
      },
    ]);
    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name}fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red("You Lose, Better Luck Next Time!"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${o1.fuel}`);
        console.log(`${o1.name}fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.bold.green("You Win, Congratulations."));
          process.exit();
        }
      }
    }
    if (ask.opt === "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.bold.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
    }
    if (ask.opt === "Run For Life") {
      console.log(chalk.bold.red("You Lose, Better Luck Next Time!"));
      process.exit();
    }
  }

  // Alien
  if (opponent.select === "Alien") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: chalk.bold.yellow("Select the move"),
        choices: ["Attack", "Drink Portion", "Run For Life"],
      },
    ]);
    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name}fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red("You Lose, Better Luck Next Time!"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${o1.fuel}`);
        console.log(`${o1.name}fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.bold.green("You Win, Congratulations."));
          process.exit();
        }
      }
    }
    if (ask.opt === "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.bold.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
    }
    if (ask.opt === "Run For Life") {
      console.log(chalk.bold.red("You Lose, Better Luck Next Time!"));
      process.exit();
    }
  }

  // Zombie
  if (opponent.select === "Zombie") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: chalk.bold.yellow("Select the move"),
        choices: ["Attack", "Drink Portion", "Run For Life"],
      },
    ]);
    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name}fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red("You Lose, Better Luck Next Time!"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${o1.fuel}`);
        console.log(`${o1.name}fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.bold.green("You Win, Congratulations."));
          process.exit();
        }
      }
    }
    if (ask.opt === "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.bold.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
    }
    if (ask.opt === "Run For Life") {
      console.log(chalk.bold.red("You Lose, Better Luck Next Time!"));
      process.exit();
    }
  }
} while (true);