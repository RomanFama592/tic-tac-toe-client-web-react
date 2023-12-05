import "@css/Turns.css"
import Square from "./Square"
/* import { TURNS } from "@ts/constant.ts" */
import { useGetGameContext } from "@hooks/useGetGameContext"



/**
 * The `Turns` component renders a container with a `Square` component that displays the current turn.
 * @returns The `Turns` component is returning a JSX element, specifically a `<div>` element with the
 * className "turns-container". Inside the `<div>`, there is a `<Square>` component with the `select`
 * prop set to `true` and the `color` prop set to `true`. The content of the `<Square>` is the value of
 * the `turn` variable.
 */
export default function Turns() {
    const { turn, /* winner */ } = useGetGameContext()

    return (
        <div className="turns-container">
            <Square
                select={true}
                color={true}>
                {turn}
            </Square>
            {/* <Square
                select={true}
                color={turn === TURNS.X || winner === TURNS.X}
                blank={!(winner === TURNS.X || turn === TURNS.X)}>
                {TURNS.X}
            </Square>
            <Square
                select={true}
                color={turn === TURNS.O || winner === TURNS.O}
                blank={!(winner === TURNS.O || turn === TURNS.O)}>
                {TURNS.O}
            </Square> */}
        </div>
    )
}