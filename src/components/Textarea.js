import React,{useState} from "react";
export default function Textarea(props){
    const convertUp = () => {
        console.log("I am converUp onclick function")
        let newText = text.toUpperCase(); 
        setText(newText);
    }

    const convertLower = () => {
        console.log("I am converUp onclick function")
        let newText = text.toLowerCase(); 
        setText(newText);
    }

    const convertChange = (event) => {
        console.log("I am onchange function")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return(
        <>
        <h1 className="absolute left-10 top-22 mx-2">{props.heading}</h1>
        <textarea placeholder="Enter Text" className="textarea textarea-success absolute left-10 top-30 mx-2 w-100 h-50" value={text} onChange={convertChange}></textarea>

        <button className="btn btn-soft btn-success absolute left-10 top-82 mx-2" onClick={convertUp}>Convert uppercase</button>

        <button className="btn btn-soft btn-success absolute left-70 top-82 mx-2" onClick={convertLower}>Convert Lowercase</button>

        <div className="container absolute left-10 top-95 mx-2">
            <h2><b>Your text summery</b></h2>
            <p>{text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>

            <h2><b>Preview</b></h2>
            <p>{text}</p>
        </div>

        </>
    );
} 