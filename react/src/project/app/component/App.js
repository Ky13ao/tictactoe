import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TicTacToeGame from "../../minigame/tictactoe/component/Game";

import Home from "./Home";

export default function App() {
	return (<Router><Routes><Route index path="/" element={<Home />} /><Route path="tictactoe" element={<TicTacToeGame />} /></Routes></Router>);
}
