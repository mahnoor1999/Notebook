import React from 'react';

const InputData = ({setInputContent}) => {
    return(
        <div>
            <textarea onChange={(e) => setInputContent(e.target.value)} cols="20" rows="10"></textarea> 
        </div>
    )
}

export default InputData;