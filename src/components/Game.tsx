import "@css/Game.css"
import Turns from "./Turns"
import Board from "./Board"
import ButtonResetGame from "./ButtonResetGame"
import WinningModal from "./WinningModal"
import React, { useEffect, useState } from "react"
import GameContext from "@contexts/GameContext.tsx"
import { randomTurns } from "@ts/funtions"
import useMemoBoard from "@hooks/useMemoBoard"

/**
 * The Game component is a React component that represents a game board with a specified size, tracks
 * the current turn and winner, and provides functionality to reset the game.
 * @param props.size - The `Game` component takes an optional `size` parameter, which determines the size of the
 * game board. If no `size` is provided, it defaults to 3.
 * @returns The `Game` component is returning a JSX element.
 */
export default function Game({ size = 3 }: { size?: number }) {
    const [turn, setTurn] = useState(randomTurns())
    const [winner, setWinner] = useState<string | null>(null)
    const {board, boardEmpty, setBoard} = useMemoBoard(size)

    const resetGame = () => {
        setWinner(null)
        setTurn(randomTurns())
        setBoard(boardEmpty)
    }

    const style = {
        "--size-board": String(size),
        "--color-turn-x": "#c25d4d",
        "--color-turn-o": "#4e4ea7"
    } as React.CSSProperties

    useEffect(() => {
        resetGame()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size])


    return (
        <GameContext.Provider value={{ resetGame, setTurn, setWinner, setBoard, turn, winner, board }}>
            <div className="game-container" style={style}>
                <WinningModal />
                <Board />
                <div className="extras-container">
                    <Turns />
                    <ButtonResetGame />
                </div>
            </div>
        </GameContext.Provider>
    )
}
