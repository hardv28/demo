import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpCLick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoCLick = ()=>{
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlert("Converted to Lowercase", "success");
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const wordCount = text.split(" ");

    return (
        <>
        <div style={{color :(props.mode==='light'?'black':'white')}}>
            <h1 className={``}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className ={`form-control`} style={{backgroundColor: props.mode==='dark'?'grey':'white', color :(props.mode==='light'?'dark':'white')}} value={text} onChange={handleOnChange} id="myBox" placeholder='Enter text here' rows="5"></textarea>
            </div>
            <button className={`btn btn-dark mb-3`} style={{backgroundColor: props.mode==='dark'?'white':'grey', color :(props.mode==='dark'?'black':'white')}} onClick={handleUpCLick}>Convert to Uppercase</button>
            <button className='btn btn-dark mx-1 mb-3' style={{backgroundColor: props.mode==='dark'?'white':'grey', color :(props.mode==='dark'?'black':'white')}} onClick={handleLoCLick}>Convert to Lowercase</button>
        </div>
        <div style={{color :(props.mode==='light'?'black':'white')}}>
            <h2>Your text summary</h2>
            <p>{wordCount.filter(word => word !== "").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text above to preview it here."}</p>
        </div>
        </>
    )
}
