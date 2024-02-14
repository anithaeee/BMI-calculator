import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './index.css';
function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState("");
  const [message, setmessage] = useState("");

  let calbmi = (e) =>{
   e.preventDefault();
     
    if(weight === 0 || height === 0) {
      alert("please enter the valid weight and height");
    } else {
      let bmi = (weight / (height * height) * 703);
      setbmi(bmi.toFixed(1));
    }
    

    if (bmi < 25) {
      setmessage("you are underweight");
    } else if (bmi > 25 && bmi < 30) {
      setweight("you are a healthy weight");
    } else {
      setmessage("you are overweight");
    }
      
    
  }
  let reload = () =>{
    window.location.reload();
  }
  return (
    <div className="App">
      <div className='container'>
        <h1 style={{textAlign:"center"}}>BMI React Application</h1>
        <form onSubmit={calbmi}>
          <div>
           <label>Weight (lbs)</label>
           <input value={weight} onChange={(e) =>setweight(e.target.value)} />
           <div>
           <label>Weight (in)</label>
           <input value={height}  onChange={(e) =>setheight(e.target.value)}/>
           </div>
           <div>
            <button className='btn1' style={{width:"100%",borderRadius:"4px",backgroundColor:"black",color:"white",margin:"8px 0",padding:"10px 0"}}>submit</button>
            <button className='btn' style={{border:"2px solid",width:"100%",backgroundColor:"black",color:"white",margin:"8px 0",padding:"10px 0"}} onClick={reload}>Reload</button>
           </div>
          </div>
        </form>
        <div className='center'>
          <h3>your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
