import React,{useState} from 'react';
import RadioBtn from './RadioButton/RadioButton';
import InputValue from './InputValue/InputValue';
import InputData  from './InputData/InputData';

const AddBtn = () => {
    const [inputHead,setinputHead] = useState("");
    const [inputContent,setinputContent] = useState("");
    const [addInput,setaddInput] = useState([]);

    return (
        <div>

            
            <RadioBtn />
            <br></br>
            <InputValue setinputHead={setinputHead} inputHead={inputHead}/>
            <InputData setinputContent={setinputContent} inputContent={inputContent}/>
            <button onClick={inputHead}>Add</button>
        </div>
    )
}
export default AddBtn