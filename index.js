
 import chalk from 'chalk';
 //import yargs from 'yargs';

import inquirer from 'inquirer';

const question = 
  [
    {
      type: 'list',
      name: 'numberOfPlayers',
      message: 'Enter the number of players:',
      choices : [2, 4, 6, 8, 12, 16, 20],
      default : 2
    },
    {
      type: 'input',
      name: 'numberOfGroups',
      message: 'Enter the number of groups:',
      choices : [4, 8, 12,15],
      default : 4,
     
    },

  ]
  

    function player(numberOfPlayers, numberOfGroups){
      // Generate an array of players
      const players = Array.from(Array(numberOfPlayers).keys()).map((n) => `Player ${n + 1}`);
      
      // Shuffle the players using Fisher-Yates shuffle algorithm
     for (let i = players.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [players[i], players[j]] = [players[j], players[i]];
      }

      // Divide the players into groups
      const groups = [];
     for (let i = 0; i < numberOfGroups; i++) {
      groups.push([]);
     }

     let groupIndex = 0;
     for (const player of players) {
       groups[groupIndex].push(player);
       groupIndex = (groupIndex + 1) % numberOfGroups;
     }
     
     // Generate the fixture for each group
     for (let i = 0; i < groups.length; i++) {
     console.log(chalk.greenBright(`\nGroup ${i + 1}:`));
     for (let j = 0; j < groups[i].length; j++) {
     for (let k = j + 1; k < groups[i].length; k++) {
      console.log(chalk.cyan(`${groups[i][j]} vs ${groups[i][k]}`));
    }
    }
    }

    }

   function ask(){
    inquirer.prompt(question).then(answer =>{
      console.log( chalk.blue(`\n ${answer.numberOfPlayers}`) )
      console.log(chalk.bgRed(`\n ${answer.numberOfGroups}`))
      console.log(chalk.magentaBright(`${player(answer.numberOfPlayers, answer.numberOfGroups)}`))
      console.dir( answer  , {colors : true});
    })
   }
   ask()




