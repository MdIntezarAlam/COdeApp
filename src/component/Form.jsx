import React from 'react'
import { useState } from 'react';
function Form(props){
    const [text, setText] = useState("");

    //This is UpperCase Fun
    const uppperHandler = (e) => {
        let newText = text.toUpperCase();
        setText(newText);
        //this is for Alert
        props.showAlert("Converted to UpperCase", "success")
    }
    //This is LowerHandlerCase Fun
    const lowerHandler = (e) => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")

    }
    //This is for delete Word
    const clear = (e) => {
        let newText = "";
        setText(newText);
        props.showAlert("text is Deleted", "danger")

    }
    //Copy
    const copy = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("text is Copied to lipboard", "primary")
    }
    //This is Change Word Fun
    const UpperChange = (e) => {
        setText(e.target.value)
    }
  //This is For Removing Extra Space
  const ExtraSpace =() =>{
      let  newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Space is removed", "success")

  }

    return (
        <>
            <div className="container" style={{color:props.mode === 'dark' ?'white':'black'}}>
                <h1>This is Word Count Project</h1>
                <div>
                    <textarea className="form-control my-1" id="myBox" value={text} rows="6" onChange={UpperChange} style={{backgroundColor:props.mode === 'dark' ?' grey':'white',
                color:props.mode === 'dark' ? 'white':'black'}}/>
                </div>
                <button className="btn btn-sm my-3 mx-3 btn-primary" onClick={uppperHandler}>Convert in to UpperCase</button>
                <button className="btn btn-sm my-3 mx-3 btn-primary" onClick={lowerHandler}>Convert in to LowerCase</button>
                <button className="btn btn-sm my-3 mx-3 btn-primary" onClick={clear}>Clear</button>
                <button className="btn btn-sm my-3 mx-3 btn-primary" onClick={copy}>Copy</button>
                <button className="btn btn-sm my-3 mx-3 btn-primary" onClick={ExtraSpace}>Extra Space</button>
            </div>
            <div className="container" style={{color:props.mode === 'light' ?' gray':'white'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Word and {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter Text Here"}</p>
            </div>
        </>
    )
}

export default Form