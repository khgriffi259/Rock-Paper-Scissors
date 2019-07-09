import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const CpuIcon = () => {
    const { gameItems } = useContext(GameContext);
    
    const getUserIcon = () => {
        // return 'hello'
        // return  <i className="fas fa-hand-scissors fa-3x"></i>;
        // debugger;
        switch (gameItems.cpuChoice) {
            case 'r':
                console.log('rock');
                return <i className="fas fa-hand-rock fa-3x"></i>;
                break;
        
            case 'p':
                return <i className="fas fa-hand-paper fa-3x"></i>;
                break;
        
            case 's':
                return <i className="fas fa-hand-scissors fa-3x"></i>;
                break;
        
            default:
                break;
        }

    }

    let userIcon = getUserIcon();
    
    
    return (
        <div>
            <div className="cpuSelectedChoice">
                { userIcon  }
                <div class="cpu-losing-icon"></div>
            </div>
        </div>
    )
}

export default CpuIcon