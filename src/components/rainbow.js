import React from 'react';

const Rainbow = WrappedComponent => {

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const randomColor = colors[Math.floor(Math.random() * 6)];
    
    return (props) =>{
        return (
            <div style={{background: randomColor}}>
                <WrappedComponent {...props} />
            </div>
        )   
}

}

export default Rainbow