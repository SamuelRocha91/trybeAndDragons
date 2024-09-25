import chalk from 'chalk';

import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Samuel Rocha');
const player2 = new Character('Goku');
const player3 = new Character('Darth Vader');

console.log(chalk.blue.bold('=== Status Inicial do Heroi ==='));
console.log(player1.printCharacterInfo());

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

// console.log(player1);

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]): void {
  for (let i = 0; i < battles.length; i += 1) {
    battles[i].fight();
  }
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
