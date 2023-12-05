import { useContext } from "react";
import GameContext from "@contexts/GameContext";

export function useGetGameContext() { return useContext(GameContext) }