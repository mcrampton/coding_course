const printPlayers = (board) => {
    for (row of board) {
        console.log(row[0] + '|' + row[1] + '|' + row[2]); 
        console.log('-----')
    }
}
module.exports = {
    printBoard
}