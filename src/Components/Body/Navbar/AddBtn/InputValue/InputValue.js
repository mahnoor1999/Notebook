import React from 'react';

const InputValue = ({setInputHead}) => {

    return(
        <div>
             <input type="text" placeholder="Add heading" onChange={(e) => setInputHead(e.target.value)} />
        </div>
    )
}

export default InputValue;