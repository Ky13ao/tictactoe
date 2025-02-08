import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Home() {
	return (<nav><NavLink to="/">Home</NavLink><Link to="..//tictactoe"><i>TicTacToe</i></Link></nav>);
}
