
import { React, useState } from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");


  const ops = ["/", "*", "+", "-", "."]
  const updateCalc = value => {
    if (ops.includes(value) && calc === "" 
    || 
     ops.includes(value) && ops.includes(calc.slice(-1))) /*|| calc.includes(".")*/

     {return;}
    setCalc(calc + value);
    if (!ops.includes(value)) {setResult(eval(calc + value).toString())};
  }

 const craetDigits = () => {
    const digits = [];

  for ( let i = 1; i < 10; i++ ) { 
    digits.push(
      <button onClick={() => updateCalc(i.toString()) } key={i}>{i}</button>
    )
   }
   return digits;
  
 }
 const ccalc = () => { setCalc(eval(calc).toString())}
 const delLast = () => { if (calc === "") {return;}

  const value = calc.slice(0, -1);
  console.log(value)
  setCalc(value)

/*if (calc !== "") {setCalc("")}
 if (result !== "") {setResult("")} 
*/
}

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
        {result ? <span>{result}</span> : ""} {calc || "0"}
        </div>
        <div className='operators'>
          <button onClick={() => updateCalc("/") }>/</button>
          <button onClick={() => updateCalc("*") }>*</button>
          <button onClick={() => updateCalc("+") }>+</button>
          <button onClick={() => updateCalc("-") }>-</button>
          <button onClick={delLast}>DEL</button>
        </div>
        <div className='digits'>
          {craetDigits()}
          <button onClick={() => updateCalc("0") }>0</button>
          <button onClick={() => updateCalc(".") }>.</button>
          <button onClick={ccalc}>=</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
