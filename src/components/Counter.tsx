import { useState } from 'react'
import cls from './Counter.module.scss'


export default function Counter() {
    const [ count, setCount ] = useState(0);
    const increment = () => {
        setCount(prev => prev + 1)
    }
  return (
    <div>
        <div>Counter {count}</div>
        <button className={cls.button} onClick={increment}>Increment</button>
    </div>
  )
}