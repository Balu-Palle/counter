
import { useState } from 'react'
import { useCallback } from 'react';

function App() {

  let [count,setCount] = useState(0);

  let add =useCallback(() =>{
    if (count<20){
      count++
    }
    else{
      alert("limit reached");
    }
    
    setCount(count);
  },count)
  let sub=useCallback(()=>{
    if (count > 0){
      count--;
    }
    else{
      count=0
    }

    
    setCount(count);
  })
 


  return (
    <div className='container'>
      <h1 className='display'>count : {count}</h1>
      <button onClick={add} className='btn'>ADD 1</button>
      <button onClick={sub} className='btn'>SUB 1</button>
    </div>
  )
}

export default App