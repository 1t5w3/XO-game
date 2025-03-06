let isExecuted = {cell1 : 'false', cell2 : 'false', cell3 : 'false', cell4 : 'false', cell5 : 'false', cell6 : 'false', cell7 : 'false', cell8 : 'false', cell9 : 'false'}
        let grid = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        let xGridWins = [
            [
            ["X", "X", "X"],
            [0, 0, 0],
            [0, 0, 0]
            ],
            [
            [0, 0, 0],
            ["X", "X", "X"],
            [0, 0, 0]
            ],
            [
            [0, 0, 0],
            [0, 0, 0],
            ["X", "X", "X"]
            ],
            [
            [0, 0, "X"],
            [0, 0, "X"],
            [0, 0, "X"]
            ],
            [
            [0, "X", 0],
            [0, "X", 0],
            [0, "X", 0]
            ],
            [
            ["X", 0, 0],
            ["X", 0, 0],
            ["X", 0, 0]
            ],
            [
            [0, 0, "X"],
            [0, "X", 0],
            ["X", 0, 0]
            ],
            [
            ["X", 0, 0],
            [0, "X", 0],
            [0, 0, "X"]
            ]
        ]
        let oGridWins = [
      [["O", "O", "O"], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], ["O", "O", "O"], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], ["O", "O", "O"]],
      [["O", 0, 0], ["O", 0, 0], ["O", 0, 0]],
      [[0, "O", 0], [0, "O", 0], [0, "O", 0]],
      [[0, 0, "O"], [0, 0, "O"], [0, 0, "O"]],
      [[0, 0, "O"], [0, "O", 0], ["O", 0, 0]],
      [["O", 0, 0], [0, "O", 0], [0, 0, "O"]]
    ];
        const cell1 = document.getElementById('cell1');
        const cell2 = document.getElementById('cell2');
        const cell3 = document.getElementById('cell3');
        const cell4 = document.getElementById('cell4');
        const cell5 = document.getElementById('cell5');
        const cell6 = document.getElementById('cell6');
        const cell7 = document.getElementById('cell7');
        const cell8 = document.getElementById('cell8');
        const cell9 = document.getElementById('cell9');
        const winner = document.getElementById('winner')

        let currentPlayer = 'X';

        function XO(cellNumber, isExecuted, cellKey, x, y){
            
            if(isExecuted[cellKey] == true){
                winner.textContent = 'This spot is already filled'
                return cellNumber.innerText
            }else if (isExecuted[cellKey] == 'o') {
                winner.textContent = 'O won, its over'
                return cellNumber.innerText
            }else if (isExecuted[cellKey] == 'x') {
                winner.textContent = 'X won, its over'
                return cellNumber.innerText
            }

            cellNumber.innerText = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            isExecuted[cellKey] = true;
            grid[x][y] = cellNumber.innerText
            console.log(grid)
            
            return cellNumber.innerText
        }

        function checkWinner(currentGrid) {
      console.log('Checking winner...');
      if (Object.values(isExecuted).every(value => value === true)) {
        winner.textContent = 'It\'s a draw';
        console.log('It\'s a draw');
        return;
    }
      for (let i = 0; i < xGridWins.length; i++) {
        if (matchPattern2D(currentGrid, xGridWins[i])) {
            console.log('X wins!');
            
            winner.textContent = 'X wins'
            isExecuted = {cell1 : 'x', cell2 : 'x', cell3 : 'x', cell4 : 'x', cell5 : 'x', cell6 : 'x', cell7 : 'x', cell8 : 'x', cell9 : 'x'}
            return;
        }
        
        
        }
      for (let i = 0; i < oGridWins.length; i++) {
        if (matchPattern2D(currentGrid, oGridWins[i])) {
            console.log('O wins')
            winner.textContent = 'O wins'
            isExecuted = {cell1 : 'o', cell2 : 'o', cell3 : 'o', cell4 : 'o', cell5 : 'o', cell6 : 'o', cell7 : 'o', cell8 : 'o', cell9 : 'o'}
            return;
        }
        }
    }

        function matchPattern2D(mainGrid, pattern, wildcard = 0) {
      for (let i = 0; i < mainGrid.length; i++) {
        for (let j = 0; j < mainGrid[i].length; j++) {

          if (pattern[i][j] === wildcard) continue;
          if (mainGrid[i][j] !== pattern[i][j]) {
            return false;
          }
        }
        
      }
      return true;
    }

        
        cell1.addEventListener('click', () =>{
            cell1.textContent = XO(cell1, isExecuted, 'cell1', 0, 0, grid)
            checkWinner(grid)
        });

        cell2.addEventListener('click', () => {
            cell2.textContent = XO(cell2, isExecuted, 'cell2', 0, 1, grid)
            checkWinner(grid)
        });
        cell3.addEventListener('click', () => {
            cell3.textContent = XO(cell3, isExecuted, 'cell3', 0, 2, grid)
            checkWinner(grid)
        });
        cell4.addEventListener('click', () => {
            cell4.textContent = XO(cell4, isExecuted, 'cell4', 1, 0, grid)
            checkWinner(grid)
        });
        cell5.addEventListener('click', () => {
            cell5.textContent = XO(cell5, isExecuted, 'cell5', 1, 1, grid)
            checkWinner(grid)
        });
        cell6.addEventListener('click', () => {
            cell6.textContent = XO(cell6, isExecuted, 'cell6', 1, 2, grid)
            checkWinner(grid)
        });
        cell7.addEventListener('click', () => {
            cell7.textContent = XO(cell7, isExecuted, 'cell7', 2, 0, grid)
            checkWinner(grid)
        });
        cell8.addEventListener('click', () => {
            cell8.textContent = XO(cell8, isExecuted, 'cell8', 2, 1, grid)
            checkWinner(grid)
        });
        cell9.addEventListener('click', () => {
            cell9.textContent = XO(cell9, isExecuted, 'cell9', 2, 2, grid)
            checkWinner(grid)
        });