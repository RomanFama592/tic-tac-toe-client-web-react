import { TURNS } from "./constant.ts"
import { boardType } from "./types.ts"

/**
 * The function constructs an empty board of a given size.
 * @param {number} sizeBoard - The `sizeBoard` parameter is the size of the board you want to create.
 * It represents the number of rows and columns in the board.
 * @returns an empty board of size `sizeBoard` as a 2D array. Each element in the array represents a
 * row, and each row is filled with `null` values.
 */
export const constructEmptyBoard = (sizeBoard: number): boardType => {
    return Array(sizeBoard).fill(Array(sizeBoard).fill(null))
}

/**
 * The function "randomTurns" returns either "TURNS.X" or "TURNS.O" randomly.
 * @returns either TURNS.X or TURNS.O, depending on the result of Math.random() < 0.5.
 */
export const randomTurns = () => {
    return Math.random() < 0.5 ? TURNS.X : TURNS.O
}

/**
 * The function creates a copy of a two-dimensional array.
 * @param {boardType} board - The `board` parameter is of type `boardType`.
 * @returns a copy of the input array `board`.
 */
export const createCopyArray = (board: boardType) => {
    return board.map((v) => { return [...v] })
}

/**
 * The function checks if all squares on the board are occupied, returning true if they are and false
 * if not.
 * @param {boardType} board - The parameter "board" is of type "boardType".
 * @returns a boolean value indicating whether the game is a tie or not.
 */
export const checkTie = (board: boardType) => {
    let tie = true

    //check if all the squares are occupied
    board.forEach((row) => {
        if (row.includes(null)) {
            tie = false
        }
    })

    return tie
}

/**
 * The `checkWinner` function checks if a player has won in a given tic-tac-toe board.
 * @param {boardType} board - The `board` parameter is of type `boardType`, which is not defined in the
 * code snippet you provided. It is likely a custom type or interface that represents the game board.
 * Please provide the definition of `boardType` for further assistance.
 * @param {string} piece - The `piece` parameter represents the symbol or piece that we are checking
 * for a win condition. It can be any string value, such as "X" or "O", depending on the game being
 * played.
 * @returns The function `checkWinner` returns a boolean value. It returns `true` if there is a winner
 * on the board for the given piece, and `false` otherwise.
 */
export const checkWinner = (board: boardType, piece: string): boolean => {
    const size = board.length;

    // Check rows
    for (let i = 0; i < size; i++) {
        if (board[i].every((val) => val === piece)) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < size; i++) {
        if (board.every((row) => row[i] === piece)) {
            return true;
        }
    }

    // Check diagonals
    if (board.every((row, i) => row[i] === piece)) {
        return true;
    }
    if (board.every((row, i) => row[size - i - 1] === piece)) {
        return true;
    }

    return false;
}