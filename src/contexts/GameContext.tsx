import { TURNS } from "@ts/constant";
import { IGameContext } from "@ts/interfaces";
import { createContext } from "react";

/**
* The code is creating a context object called `GameContext` using the `createContext` function from
* React. The context object is initialized with a default value that conforms to the `IGameContext`
* interface.
*/
const GameContext = createContext<IGameContext>({
    turn: TURNS.X,
    winner: null,
    board: [[]],
    setTurn: () => { },
    setWinner: () => { },
    setBoard: () => { },
    resetGame: () => { }
})

export default GameContext