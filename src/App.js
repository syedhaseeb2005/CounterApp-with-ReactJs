import './App.css';
import { useState } from 'react';

function CounterrApp(){

  const [count,setcount] = useState(0)
  return(
    <div className='contanier'>
      <h1>Counter App</h1>
      <h2 style={{marginTop:'10px',marginBottom:'15px'}}>{count}</h2>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <button  style={{marginRight:'20px',}} onClick={()=> setcount(count + 1 )}>
          Increment
        </button>
        <button onClick={()=> setcount(count - 1)} disabled={count === 0}>
          Decrement
        </button>
        <button style={{marginLeft:'20px',}} onClick={()=> setcount(0)} disabled={count === 0}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default CounterrApp