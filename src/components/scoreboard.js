import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Scoreboard = () => {
    const { gameItems } = useContext(GameContext);

    return (
        <div className="scoreboard">
            <p>Player: {gameItems.userScore} </p>
            <p>Computer: {gameItems.cpuScore} </p>
        </div>
    )
}

export default Scoreboard