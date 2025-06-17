import React from "react";
export default function Textarea(props){
    return(
        <>
        <h1 className="absolute left-10 top-22 mx-2">{props.heading}</h1>
        <textarea placeholder="Success" className="textarea textarea-success absolute left-10 top-30 mx-2"></textarea>

        </>
    );
}