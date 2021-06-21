import './App.css';
import axios from 'axios'
import {useState} from 'react'

function App() {
  const [text, setText] = useState("iamyourlyftdriver")
  const [response, setResponse] = useState("")
  
  function handleChange(e){
    setText(e.target.value)

  }

  function submitText(e){
    e.preventDefault()
    axios.post("https://lyft-interview-test.glitch.me/test", {"string_to_cut": text})
      .then(res => {
        setResponse(res.data.return_string)
      })
      .catch(err => console.log({err}))
  }
  
  
  return (
    <div className="App">
      <h1><span>lyft</span> API Code Challenge</h1>

      <form onSubmit={submitText}>
        <label>Text:</label> &nbsp;
        <input
          type="text"
          value={text}
          onChange={handleChange}
        />

        <br />

        <input type="submit" className="submitBtn"/>
      </form>

      <div className="response">
        <h3>API Response:</h3>
        {response ? <p className="submitted">"{response}"</p> : <p className="notSubmitted">*Click "Submit" to view response*</p>}
      </div>
    </div>
  );
}

export default App;
