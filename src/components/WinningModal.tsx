import "@css/WinningModal.css"
import ButtonResetGame from "./ButtonResetGame"
import { useGetGameContext } from "@hooks/useGetGameContext"
import Square from "./Square"

/**
 * The WinningModal component is responsible for displaying a modal when the game is won or tied. It
 * shows the winner and a reset game button in case of a win, and a tie message in case of a tie.
 * @returns The `WinningModal` component is being returned if there is a winner or the
 * game is tied; otherwise, it returns `null`.
 */
export default function WinningModal() {
    const { turn, winner } = useGetGameContext()

    return (
        <>
            {
                // evaluate if there is a winner
                winner !== null &&
                <div className="modal-background">
                    <div className="modal-content">
                        {
                            // evaluate if there is a tie
                            winner !== "" ?
                                <div className="winner-content">
                                    <h1>WINNER!</h1>
                                    <Square
                                        select={true}
                                        color={true}>
                                        {turn}
                                    </Square>
                                </div>
                                : <>
                                    <h1>TIE</h1>
                                </>

                        }
                        <ButtonResetGame />
                    </div>
                </div>
            }
        </>
    )
}
