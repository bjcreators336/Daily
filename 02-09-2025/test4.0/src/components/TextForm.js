import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const HandleUpClick = () => {
    setText(text.toUpperCase());
  };
  const HandleClearClick = () => {
    setText("");
  };
  const HandleModifyClick = () => {
    setText(
      text.replace(/(^\s*\w|[.!? ]\s*\w)/g, (char) => char.toUpperCase())
    );
  };

  const HandleLoClick = () => {
    setText(text.toLowerCase());
  };

  const HandleOnChange = (event) => {
    setText(event.target.value);
  };
  const Analyze = () => {
    const Inns = document.querySelector(".Inns");
    Inns.style.visibility = "visible";
  };
  const Analyze2 = () => {
    const Inns = document.querySelector(".Inns");
    Inns.style.visibility = "hidden";
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3"></div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="20"
            placeholder="Enter your text here..."
            value={text}
            onChange={HandleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#495057' : '#f1f1f1',
              color: props.mode === 'dark' ? 'white' : 'black',
              borderColor: props.mode === 'dark' ? '#495057' : '#ced4da'
            }}
          ></textarea>
          <div className="buttons my-3">
            <button
            className="btn btn-primary"
            onClick={Analyze}
            onDoubleClick={Analyze2}
          >
            Analyze
          </button>
          <button className="btn btn-primary mx-3" onClick={HandleUpClick}>
            Convert To UpperCase
          </button>
          <button className="btn btn-primary " onClick={HandleLoClick}>
            Convert To LowerCase
          </button>
          <button className="btn btn-primary mx-3" onClick={HandleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary " onClick={HandleModifyClick}>
            Modify Text
          </button>
          </div>
        </div>
        <div className="Inns" style={{ visibility: "hidden" }}>
          <div className="container">
            <h2>Text Summary</h2>
            <p>
              Text contains <b>{text.split(" ").length-1}</b> Words and{" "}
              <b>{text.length} </b>
              Letters <br /> An average of{" "}
              <b>{0.008 * (text.split(" ").length-1)} </b>
              Minutes to read
            </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text in text box to preview it here...."}</p>
          </div>
        </div>
      </div>
    </>
  );
}
