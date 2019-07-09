import React  from 'react';

const Popup = ({show, resetGame, result }) => {
        
    return show ? (
            <div>
                <div class="popup-wrapper">
                <div class="popup bg-white p-1">
                    <div class="popup-close" onClick={resetGame}>X</div>
                    <div class="popup-content ">
                        <h2 class="">Result</h2>
                        <p class="result" style={result==='You Win!' ? {color:'green'}: result==='You Lose!'? {color:'red'}: {color:'yellow'}}>{result}</p>
                        <div class="dialogue_buttons my-1">
                            <button class="btn popup-no" onClick={resetGame}>Play Again</button>
                        </div>
                    </div>
                </div>
            </div>  
            </div>
        ) : null
}

export default Popup