import React, { useContext, useState } from 'react';
import { GameContext } from '../contexts/GameContext';
import Choices from './choices';
import Scoreboard from './scoreboard';
import PlayerIcon from './playerIcon'
import CpuIcon from './cpuIcon'
import Popup from './popup';

    const Brain = (props) => {

        const { playerScore, cpuScore, resetChoices } = useContext(GameContext);
        
        const [state, setState] = useState(
            {show: false}
        );
        
        const [result, setResult] = useState('');
        
        const togglePopup = () => {
            setState({show: !state.show});
        }
        
        const resetGame = () => {
            resetChoices();
            togglePopup();
            removeLosingIcon();
        }
        
        const removeLosingIcon = () => {
            document.querySelector('.cpu-losing-icon').style.display='none';
            document.querySelector('.user-losing-icon').style.display='none';
        }

        const getWinner = (userChoice, cpuChoice) => {
            const matchup = `${userChoice}${cpuChoice}`;
            console.log(matchup);
            switch (matchup) {
                case 'pr':
                case 'rs':
                case 'sp':
                     win();
                    break;
                case 'rp':
                case 'sr':
                case 'ps':
                     lose();
                    break;
                case 'pp':
                case 'rr':
                case 'ss':
                    tie();
                    break;
                default:
                    break;
            }
        }
        
        const win = () => {
            playerScore();
            setResult('You Win!');
            document.querySelector('.cpu-losing-icon').style.display = 'block';
            togglePopup();
            // document.querySelector('.result').style.color='green';
        }
        
        const lose = () => {
            cpuScore();
            setResult('You Lose!');
            document.querySelector('.user-losing-icon').style.display = 'block';
            togglePopup();
        }
        
        const tie = () => {
            setResult(`It's a tie!`);
            togglePopup();            
        }

        return(
             <div>
                <div className="choices_And_scoreboard">
                    <PlayerIcon />
                    <Scoreboard />
                    <CpuIcon />
                </div>
                <Choices getWinner={getWinner}/>
                    {state.show ? 
                        <Popup show={state.show} resetGame={resetGame} result={result}/>
                    : null}
             </div>
        )           
    }

    export default Brain