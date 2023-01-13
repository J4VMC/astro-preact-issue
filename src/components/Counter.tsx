import {useState} from 'react'

export const Counter =()=>{
  const [count,setCount]=useState(0)
  const handleClick=(operator:'increment' | 'decrement')=>{
    console.log(count)
    if(operator==='increment') return setCount((prev)=> prev+1)
    if(operator==='decrement') return setCount((prev)=> prev-1)
  }
  return (
    <div className="">
      {/* <button onClick={()=>setCount(count + 1)}>Increment</button> */}
      <button onClick={()=>handleClick('increment')}>Increment</button>
      <button onClick={()=>handleClick('decrement')}>Decrement</button>
      <span>{count}</span>
    </div>
  )
}