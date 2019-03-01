const board = require('./board')

const game = {
    board: [['x','o','o'],
           ['o','x','o'],
           ['o','o','x']],
    player1: {
        name: 'john',
        nickName: 'LJ',
       age: 25,
       result: 'win'
       },
    player2: {
        name: 'fred',
        nickName: 'LJ',
       age: 25,
       result: 'lose'
       }
    };

      for (row of game.board) {
              console.log(row[0] + '|' + row[1] + '|' + row[2]); 
              console.log('-----')
          }

console.log(game.player2.name + ' ' + game.player2.result)
console.log(game.player1.name + ' ' + game.player1.result)

board.printBoard(game.board);


//const grid = [[2,9],[9,3],[7,8]];
//console.log(grid[0]);
//console.log(grid[1][0]);




// const grid = [['0','0','0'],
//               ['0','0','0'],
//               ['0','0','0']];


// for (row of grid) {
//     console.log(row[0] + '|' + row[1] + '|' + row[2]); 
//     console.log('-----')
// }

// const me = {
//     name: "john",
//     nickName: "LJ",
//     age: 25
//    };
//    console.log(me.age);
