

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const gameBoard = document.getElementById('gameBoard');
    const resetButton = document.getElementById('resetButton');
    
    let isXNext = true;
    
    let gameState = Array(9).fill(null);
    
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
    
    resetButton.addEventListener('click', resetGame);
    
    function handleCellClick(e) {
        
        if (gameState[index] || checkWin()) {
            return;
        }
        
        gameState[index] = isXNext ? 'X' : 'O';
        e.target.textContent = gameState[index];
        
        if (checkWin()) {
            alert(`${gameState[index]} a gagné!`);
        } else if (!gameState.includes(null)) {
            alert('Match nul!');
        }
        
        isXNext = !isXNext;
    }
    
    function checkWin() {
        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
        });
    }
    
    function resetGame() {
        gameState = Array(9).fill(null);
        
        cells.forEach(cell => {
            cell.textContent = '';
        });
        
        isXNext = true;
    }
});
