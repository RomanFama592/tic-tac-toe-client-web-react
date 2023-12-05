import "@css/ButtonResetGame.css"
import { useGetGameContext } from "@hooks/useGetGameContext"

/**
 * This is a TypeScript React component that renders a button to reset the game and calls the
 * `resetGame` function from the `useGetGameContext` hook when clicked.
 * @returns a button element with the class name "button-reset-game" and an onClick event handler that
 * calls the resetGame function. The button text is "Reset Game".
 */
export default function ButtonResetGame({ disabled = false }: { disabled?: boolean }) {
    const { resetGame } = useGetGameContext()

    const classNameButton = `button-reset-game ${disabled ? "disable" : ""}`

    return (
        <button className={classNameButton} disabled={disabled} onClick={resetGame}>Reset Game</button>
    )
}