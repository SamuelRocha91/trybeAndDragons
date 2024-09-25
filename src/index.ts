import chalk from 'chalk';

import Battle, { PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Samuel Rocha');
const player2 = new Character('Goku');
const player3 = new Character('A. Moraes Carecone');

console.log(chalk.blue.bold('===== Status Inicial do Heroi =========='));
console.log(player1.printCharacterInfo());
console.log(chalk.blue.bold('======================================='));
console.log(chalk.blue.bold('====== HORA DO TREINO 🏋️‍♀️ =============='));
console.log(chalk.blue.bold('===== Status Atual do Heroi ==========='));
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

console.log(player1.printCharacterInfo());
console.log(chalk.blue.bold('========================================'));
console.log(chalk.blue.bold('Nosso herói vai enfrentar dois oponentes:'));
console.log(chalk.yellow.bold('O Super Sayajin Goku!!!'));
console.log(chalk.red.bold('O A Moraes Carecone:'));

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player1, player2);

const pvpTwo = new PVP(player1, player3);

function runBattles(battles: Battle[]): void {
  console.log(chalk.yellow('🛡️ A batalha está começando...'));
  for (let i = 0; i < battles.length; i += 1) {
    console.log(chalk.magenta.bold(`=== Batalha ${i + 1} ===`));
    const result = battles[i].fight();
    if (result === 1) {
      console.log(chalk.green.bold('🎉 Vitória! UH É SAMUEL, UH É SAMUEL!!1'));
    } else {
      console.log(chalk.red.bold('💀 Derrota... Hoje quem perdeu não ganhou'));
    }
  }
}

runBattles([pvp, pvpTwo]);

export { player1, player2, player3, monster1, monster2, pvp, runBattles };
