import '@css/Board.css'
import Square from './Square'
import { checkTie, checkWinner, createCopyArray } from '@ts/funtions'
import { useGetGameContext } from '@hooks/useGetGameContext'
import { updateBoardType } from '@ts/types'
import { TURNS } from '@ts/constant'


/**
 * The `Board` component renders a tic-tac-toe game board and handles updating the board state based on
 * user interactions.
 * @returns The `Board` component is being returned.
 */
export default function Board() {
    const { turn, winner, board, setWinner, setBoard, setTurn } = useGetGameContext()

    /**
     * The function `updateBoard` updates the game board with the player's move, checks for a winner or
     * tie, and updates the turn.
     * @param indexs - The `indexs` parameter is an array that contains the row and column indices of
     * the cell that needs to be updated on the board. The first element of the array represents the
     * row index, and the second element represents the column index.
     * @returns The function does not explicitly return a value.
     */
    const updateBoard: updateBoardType = (indexs) => {

        // evaluate if there is a piece in the square or if there is a winner
        if (board[indexs[0]][indexs[1]] !== null || winner !== null) return;

        const newBoard = createCopyArray(board)

        newBoard[indexs[0]][indexs[1]] = turn

        setBoard(newBoard)

        if (checkWinner(newBoard, turn)) {
            setWinner(turn);
            return;
        }

        if (checkTie(newBoard)) {
            setWinner("");
            setTurn("");
            return;
        }

        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
    }

    return (
        <div className='board'>
            {
                board.map((row, x) =>
                    row.map((square, y) =>
                        <Square
                            key={`${x} ${y}`}
                            indexs={[x, y]}
                            blank={winner !== null && square === null}
                            updateBoard={updateBoard}>
                            {square}
                        </Square>
                    )
                )
            }
        </div>
    )
}
