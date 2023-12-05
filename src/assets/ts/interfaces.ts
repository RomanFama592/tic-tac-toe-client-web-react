import { ReactNode } from "react"
import { boardType, updateBoardType } from "@ts/types.ts"

export interface ISquareProps {
    children: ReactNode
    indexs?: [number, number] 
    color?: boolean
    select?: boolean
    blank?: boolean
    updateBoard?: updateBoardType
}

export interface IGameContext {
    turn: string
    board: boardType
    winner: string | null
    setTurn: (value: string) => void
    setBoard: (value: boardType) => void
    setWinner: (value: string | null) => void
    resetGame: () => void
}