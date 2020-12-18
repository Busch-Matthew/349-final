

import './App.css';
import {useState} from 'react'


function App() {

  const [mathString, setMathString] = useState('');

 
  function calculate(){
        let tempval = eval(mathString);
        setMathString(tempval);
  }
  function reset(){
        setMathString('')
  }

  function handleNumClick(e){
        console.log(e.target.value)
      setMathString(mathString+e.target.value)
  }

  return (
    <div className="App">
      <div>
        <h1>Calculator</h1>
      </div>
      <div>
      <input type="text" value = {mathString} readOnly/>

      </div>
      <div>
            <button onClick={reset} value = 'AC'>AC</button>
            <button onClick={handleNumClick} value = '*'>*</button>
            <button onClick={handleNumClick} value = '/'>/</button>
            <button onClick={handleNumClick} value = '+'>+</button>
      </div>
      <div>
            <button onClick={handleNumClick} value = '7'>7</button>
            <button onClick={handleNumClick} value = '8'>8</button>
            <button onClick={handleNumClick} value = '9'>9</button>
            <button onClick={handleNumClick} value = '-'>-</button>
      </div>
      <div>
            <button onClick={handleNumClick} value = '4'>4</button>
            <button onClick={handleNumClick} value = '5'>5</button>
            <button onClick={handleNumClick} value = '6'>6</button>
            <button onClick={handleNumClick} value = '('>(</button>
            
      </div>
      <div>
            <button onClick={handleNumClick} value = '1'>1</button>
            <button onClick={handleNumClick} value = '2'>2</button>
            <button onClick={handleNumClick} value = '3'>3</button>
            <button onClick={handleNumClick} value = ')'>)</button>
            
      </div>
      <div>
            <button onClick={handleNumClick} value = '0'>0</button>
            <button onClick={handleNumClick} value = '.'>.</button>
            <button onClick={calculate} value = '='>=</button>
      </div>
    </div>
  );
}

export default App;
