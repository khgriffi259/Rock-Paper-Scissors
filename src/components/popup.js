import React  from 'react';

const Popup = ({show, resetGame, result }) => {
        
    return show ? (
            <div>
                <div className="popup-wrapper">
                <div className="popup bg-white p-1">
                    <div className="popup-close" onClick={resetGame}>X</div>
                    <div className="popup-content ">
                        <h2 className="">Result</h2>
                        <p className="result" style={result==='You Win!' ? {color:'green'}: result==='You Lose!'? {color:'red'}: {color:'yellow'}}>{result}</p>
                        <div className="dialogue_buttons my-1">
                            <button className="btn popup-no" onClick={resetGame}>Play Again</button>
                        </div>
                    </div>
                </div>
            </div>  
            </div>
        ) : null
}

export default Popup