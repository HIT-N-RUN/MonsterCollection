import { useState } from "react";

function InputFile({ title="", style={}, callback=()=>{} }) {
  const [inputData, setInputData] = useState(null);

  function handleChange(e) {
    const inputFile = e.target.files[0];
    
    setInputData(inputFile);
    console.log(inputData);
    if (callback) {
      callback(inputFile);
    }
  }

  return (
    <div>
      { title ? <h1>{title}</h1> : null }
      <input type="file" name="파일 입력" onChange={handleChange}/>
    </div>
  )
}

export default InputFile;