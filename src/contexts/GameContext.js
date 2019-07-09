import React, { createContext, useState } from 'react';

export const GameContext = createContext();

const GameContextProvider = props => {
   
    const [gameItems, setGameItems] = useState(
        {userChoice: null, userScore: 0, cpuChoice: null, cpuScore: 0}
    );

    const setChoices = (userChoice, cpuChoice) => {
        setGameItems({...gameItems, userChoice: userChoice, cpuChoice: cpuChoice})
    }
    
    const resetChoices = (userChoice, cpuChoice) => {
        setGameItems(prevState => ({...prevState, userChoice: null, cpuChoice: null}))
    }
    
    const playerScore = () => {
        // setGameItems({...gameItems, userScore: gameItems.userScore + 1})       
        setGameItems(prevState => ({...prevState, userScore: prevState.userScore + 1}))
    }
    
    const cpuScore = () => {
        // setGameItems({...gameItems, cpuScore: gameItems.cpuScore + 1})
        setGameItems(prevState => ({...prevState, cpuScore: prevState.cpuScore + 1}))
    }
 
    return (
        <GameContext.Provider value={{gameItems, setChoices, resetChoices, playerScore, cpuScore}}>
            { props.children }
        </GameContext.Provider>
    )
}

export default GameContextProvider;