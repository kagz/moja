import React ,{useState}from 'react'

// function base hooks

export default function CounterExample() {
    const [count,setCount] = useState(0);
    
    return (
        <div>
           <h1>{count}</h1>
           <h1 onClick={()=>setCount(count +1)}>
plus
           </h1>
           <h2 onClick={()=>setCount (count -1)}>
minus
           </h2>
        </div>
    )
}
