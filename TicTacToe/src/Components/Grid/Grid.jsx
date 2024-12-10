import { useState } from "react";
import Card from "../Card/Card";
import isWinner from "../../helpers/checkWinner"
import "./Grid.css";

function Grid({numberOfCards}){
    const [board, setBoard] = useState(Array(numberOfCards).fill("")); 
    const [turn, setTurn]= useState(true);
    const [winner,setWinner] = useState(null);
    // const [value,setvalue]=useState("O");


    function Play(index){
        if(turn===true){
            board[index] ="O";
        }else{
            board[index] = "X";
        }
        const win = isWinner(board, turn?"O":"X");
        if(win){
            setWinner(win);
        }

        setBoard([...board]);
        setTurn(!turn);
        
    }
    function reset(){
        setTurn(true);
        setWinner(null)
        setBoard(Array(numberOfCards).fill(""));
    }
    return (
        <>

      
        <div className="grid-Wrapper">
        {
            winner&&(
                <>
                <h1 className="turn-highlight" >Winner is {winner}</h1>
                <button className="reset" onClick={reset}>Reset Game</button>
                </>
            )
        }
            <h1 className="turn-highlight"> Current Turn is : {turn?"O":"X"}</h1>
        </div>
        <div className="grid">
            {board.map((value,idx)=>
            <Card  key={idx} player={value} onPlay={Play} index={idx} gameEnd={winner?true:false}/>)
            }
        </div>
        </>
    )
}
export default Grid;
