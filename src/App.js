
import React, { useState, useEffect } from "react";

const App=()=> {
  const [counter,setCounter] = useState(0);
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
      
        <div className="card-body ">
          <h1>Ticket Tracker</h1>
          <div className="my-5 border rounded py-3">
          <p>Name:</p>
          <p>Role:</p>
          
          <div className="my-5 border rounded py-4" >
            <h2>{counter}</h2>
            <button className="btn btn-success mx-3" onClick={()=>setCounter(counter+1)}>+</button>
            <button className="btn btn-danger mx-3" onClick={()=>setCounter(counter-1)} disabled={counter ===0}>-</button>
            <button className="btn btn-secondary mx-3" onClick={()=> setCounter(0)} disabled={counter ===0}>reset</button>
            
          </div>
          </div>
        </div>
      </div>

    </div>
    


  )
}


export default App;
