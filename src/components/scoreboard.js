import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Scoreboard = () => {
    const { gameItems, setGameItems } = useContext(GameContext);

    return (
        <div>
            <div className="scoreboard">
                <p>Player: {gameItems.user.score} </p>
                <p>Computer: {gameItems.cpu.score} </p>
            </div>
        </div>
    )
}

export default Scoreboard