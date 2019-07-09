import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const PlayerIcon = () => {
    const { gameItems } = useContext(GameContext);
    
    const getUserIcon = () => {
     
        switch (gameItems.userChoice) {
            case 'r':
                console.log('rock');
                return <i className="fas fa-hand-rock fa-3x"></i>;
                
            case 'p':
                return <i className="fas fa-hand-paper fa-3x"></i>;
            case 's':
                return <i className="fas fa-hand-scissors fa-3x"></i>;
            default:
                break;
        }

    }

    let userIcon = getUserIcon();
    
    return (
        <div>
            <div className="userSelectedChoice">
                { userIcon  }
                <div class="user-losing-icon"></div>
            </div>
        </div>
    )
}

export default PlayerIcon