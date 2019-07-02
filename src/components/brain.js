import React, { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';
import Choices from './choices';
import Popup from '../popup';

    const Brain = (props) => {

        const { gameItems, setGameItems } = useContext(GameContext);
        
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
            const result = new Popup('Result', 'You win!');
            result.init();
            document.querySelector('.result').style.color = 'green';
             setGameItems({...gameItems, 
                 user:{...gameItems.user, score: gameItems.user.score + 1}
             })
        }
        
        const lose = () => {
            const result = new Popup('Result', 'You lose!');
            result.init();
            document.querySelector('.result').style.color = 'red';
            setGameItems({...gameItems, 
                cpu:{...gameItems.cpu, score: gameItems.cpu.score + 1}
            })
        }
        
        const tie = () => {
            const result = new Popup('Result', `It's a tie!`);
            result.init();
            document.querySelector('.result').style.color = 'yellow';
        }

        
        return <Choices getWinner={getWinner}/>
        
    }

    export default Brain