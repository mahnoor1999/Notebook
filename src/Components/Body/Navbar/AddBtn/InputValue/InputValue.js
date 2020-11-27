import React from 'react';

const InputValue = ({setInputHead}) => {

    return(
        <div>
             <input type="text" className="input-value" placeholder="Add Heading" onChange={(e) => setInputHead(e.target.value)} />
        </div>
    )
}

export default InputValue;