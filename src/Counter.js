import React from 'react'
import {useState,useEffect} from 'react'

function Counter() {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log('Mounting...');
    console.log('unMounting...');
    return ()=>{
      console.log('Clean up' +count)
    }
    
    
  },[count]) 
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1>Hello this is components:{count}</h1>
    </div>
  )
}

export default Counter
