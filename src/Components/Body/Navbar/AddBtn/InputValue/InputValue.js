import React from 'react';

const InputValue = ({setinputHead,inputHead}) => {

    const handleChange = (e) => {
        setinputHead(e.target.value);
    }

    return(
        <div>
             <input type="text" placeholder="Add heading" onChange={(e)=>{setinputHead(e.target.value)}} />
             <br></br>
             <p>{inputHead}</p>
        </div>
    )
}

export default InputValue;