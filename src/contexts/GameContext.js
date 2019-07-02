import React, { createContext, useState } from 'react';

export const GameContext = createContext();

const GameContextProvider = props => {
    const [gameItems, setGameItems] = useState({
        user: {choice: null, score: 0},
        cpu: {choice: null, score: 0},
})
 
    return (
        <GameContext.Provider value={{gameItems, setGameItems}}>
            { props.children }
        </GameContext.Provider>
    )
}

export default GameContextProvider;