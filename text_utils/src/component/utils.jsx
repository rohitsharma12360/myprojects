import React ,{useState} from "react";

function Utils(){
    const [text ,setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value);
      };

    const lower = () => setText(text.toLowerCase());
    const upper = () => setText(text.toUpperCase());
    const remove = () => setText(text.replace(/\s+/g, ' '));
    const reverse = () => setText(text.split('').reverse().join(''));
    const clear = () => setText('');
    
return(
    <>
    <textarea name="textArea" id="textArea" className="textarea" placeholder="Text Here...." rows={15} cols={100} value={text}  onChange={handleChange}></textarea>
   <br/>
   <div className="buttons">
    <button id="lower" className="lower" onClick={lower}>Lower Case</button>
    <button id="upper" className="upper"onClick={upper}>Upper Case</button>
    <button id="remove" className="remove" onClick={remove}>Remove Space</button>
    <button id="reverse" className="reverse" onClick={reverse}>Reverse String</button>
    <button id="clear" className="clear" onClick={clear}>Clear</button>
    </div>
    
    </>
  

)
}
export default Utils;