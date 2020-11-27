import React from 'react';

const InputData = ({setInputContent}) => {
    return(
        <div>
            <textarea className="input-content" placeholder="Write your Content here" onChange={(e) => setInputContent(e.target.value)}></textarea>
        </div>
    )
}

export default InputData;