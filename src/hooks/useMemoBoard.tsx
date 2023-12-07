import { useMemo, useState } from "react"
import { constructEmptyBoard } from "@ts/funtions"


export default function useMemoBoard(size: number) {
    const boardEmpty = useMemo(() => {
        return constructEmptyBoard(size)
    }, [size])

    const [board, setBoard] = useState(boardEmpty)

    return {board, setBoard, boardEmpty}
}
