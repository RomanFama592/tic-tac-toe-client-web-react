import '@css/Square.css'
import { TURNS } from '@ts/constant'
import { ISquareProps } from '@ts/interfaces.ts'
import { useGetGameContext } from '@hooks/useGetGameContext'
import { useEffect, useState } from 'react'

/**
 * The `Square` component represents a square in a tic-tac-toe game. It is used to display the state of
 * individual squares on the game board and handles user interactions to update the board state.
 * @param props.children - The content to be rendered inside the square.
 * @param props.color - A boolean indicating whether the square should have a colored background.
 * @param props.select - A boolean indicating whether the square is selected.
 * @param props.blank - A boolean indicating whether the square is blank.
 * @param props.indexs - An array containing the row and column indices of the square.
 * @param props.updateBoard - A function to update the game board state based on user interaction.
 * @returns The `Square` component is being returned.
 */
export default function Square({
    children,
    color = true,
    select = false,
    blank = false,
    indexs = [-1, -1],
    updateBoard = () => { }
}: ISquareProps) {
    const { winner } = useGetGameContext()
    const [selected, setSelected] = useState(select)

    const classNameSquare = `square ${children ? (color ? (children === TURNS.X ? "turn-x" : "turn-o") : "") : ""}`

    useEffect(() => {
        setSelected(select)
    }, [select, winner])

    const handlerClick = () => {
        if (children !== null || winner !== null) return;
        updateBoard(indexs)
        setSelected(true)
    }

    return (
        <div className={classNameSquare + (selected ? " selected" : "") + (blank ? " blank" : "")} onClick={handlerClick}>
            {children}
        </div>
    )
}