import React from 'react';
import firebase from '../../firebase';

const InputValue = ({setInputHead}) => {

    const changeHandle=()=>{
        const inputRef = firebase.database().ref("noteboik");
        const input = {
            setInputHead,
            complete: false,
        }
        inputRef.push(input);
        setInputHead(e.target.value)
    }    
    return(
        <div>
             <input type="text" placeholder="Add heading" onChange={changeHandle} />
        </div>
    )
}

export default InputValue;