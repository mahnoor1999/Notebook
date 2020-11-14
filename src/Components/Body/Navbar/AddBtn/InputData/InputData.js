import React from 'react';

const InputData = ({setinputContent,inputContent}) => {
    return(
        <div>
            <textarea onChange={(e)=>{setinputContent(e.target.value)}} cols="20" rows="10">Add Content</textarea> 
            <p>{inputContent}</p>
        </div>
    )
}

export default InputData;