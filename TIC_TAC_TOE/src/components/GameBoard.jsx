


export default function GameBoard({onSelectSquare, boards}){

    //const [gameBoard, setgameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex,colIndex){
    //     setgameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])] ;
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     })
    //    onSelectSquare();
    
    return (
        <ol id='game-board'>
            {boards.map((row,rowIndex) => <li key={rowIndex}>
                <ol>
                   {row.map((playerSymbol,colIndex) => <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol != null}>{playerSymbol}</button>
                    </li>)}
                </ol>                                 
            </li>)}            
        </ol>
    ); 
}

