import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Choices = (props) => {
    
    const {  setChoices, cpuScore } = useContext(GameContext);
   
    const getCpuChoice = () => {
        const cpuChoices = ['r', 'p', 's'];
        const randomIndex = Math.floor((Math.random() * 3));
        const cpuDecision = cpuChoices[randomIndex];
        return cpuDecision
    }
   
    const playGame = (e) => {
        const userChoice = e.target.id;
        const cpuChoice = getCpuChoice();
        setChoices(userChoice, cpuChoice);

        props.getWinner(userChoice, cpuChoice);


    } 
    
    return (
        <div className="choices_container">
            <h1>Choose Your Destiny</h1>
            <div className="choices">
                <i className="choice fas fa-hand-paper fa-10x" id="p" onClick={playGame}></i>
                <i className="choice fas fa-hand-rock fa-10x" id="r" onClick={playGame}></i>
                <i className="choice fas fa-hand-scissors fa-10x" id='s' onClick={playGame}></i>
            </div>
        </div>
    )
}

export default Choices