import React, { useEffect, useState } from "react";

export default function FunctionComp(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const increaseEvent =() => {
        setCount(count+1)
    }
    useEffect(() => {
        setName('Hello');
    }, [])
    return(
        <>
            <div>
                <h2>Function : {count}</h2>
                <h3>Name: {name}</h3>
                <button onClick={increaseEvent}>Increase</button>
            </div>
        </>
    )
}