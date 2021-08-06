import React from 'react';
import './index.css';

//importando el componente tableo (board);
import Board from './board';
class Game extends React.Component { 
    render() { 
        return (
           <div className="game">
               <div className="game-board">
                   <Board />
               </div>
               <div className="game-info">
                   <div>{} </div>
                   <ol> {} </ol>
               </div> 
           </div> 
        );
     }  
 };

export default Game;  
