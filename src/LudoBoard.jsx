import { useState } from "react"

export default function LudoBoard(){
    // let[blueMove,setBlueMove]=useState(0);
    let[moves,setMoves]=useState({red:0,blue:0,yellow:0,green:0});

    let updateBlue = () => {
        setMoves((prevMove) => ({
            ...prevMove,
            blue: prevMove.blue + 1
        }));
    };
    
    let updateYellow = () => {
        setMoves((prevMove) => ({
            ...prevMove,
            yellow: prevMove.yellow + 1
        }));
    };
    
    let updateGreen = () => {
        setMoves((prevMove) => ({
            ...prevMove,
            green: prevMove.green + 1
        }));
    };
    
    let updateRed = () => {
        setMoves((prevMove) => ({
            ...prevMove,
            red: prevMove.red + 1
        }));
    };
    
    return(
        <>
            <h3>Game Begins:</h3>
            <div className="board">
            <p>Blue Move={moves.blue}</p>
            <button style={{backgroundColor:"blue",color:"white"}} onClick={updateBlue}>+1</button>
            <p>Yellow Move={moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
            <p>Green Move={moves.green}</p>
            <button style={{backgroundColor:"green",color:"white"}}onClick={updateGreen}>+1</button>
            <p>Red Move={moves.red}</p>
            <button style={{backgroundColor:"red",color:"white"}}onClick={updateRed}>+1</button>
            </div>
        </>
    )
}