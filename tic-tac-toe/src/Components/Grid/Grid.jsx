import { useState } from "react";
import Card from "../card/Card";
import isWinner from "../../Helpers/checkWinner";
import { ToastContainer, toast } from 'react-toastify';

import './Grid.css';
import 'react-toastify/dist/ReactToastify.css';

function Grid({ numberOfCards }) {
    const [turn, setTurn] = useState(true); // false -> X, true => O
    const [board, setBoard] = useState(Array(numberOfCards).fill("")); 
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (board[index] !== "" || winner) {
            toast.error("Invalid move! Cell already occupied or game over.");
            return;
        }

        const newBoard = [...board];
        newBoard[index] = turn ? "O" : "X";

        const win = isWinner(newBoard, turn ? "O" : "X");
        if (win) {
            setWinner(win);
            toast.success(`Congratulations! ${win} wins the game!`);
        }

        setBoard(newBoard);
        setTurn(!turn);
    }

    function reset() {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return (
        <div className="grid-wrapper">
            {winner && (
                <>
                    <h1 className="turn-highlight"> Winner is {winner} </h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                </>
            )}
            {!winner && <h1 className="turn-highlight">Current Turn: {turn ? "O" : "X"} </h1>}
            <div className="grid">
                {board.map((value, idx) => (
                    <Card 
                        gameEnd={!!winner} 
                        onPlay={play} 
                        player={value} 
                        key={idx} 
                        index={idx} 
                    />
                ))} 
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
}

export default Grid;
