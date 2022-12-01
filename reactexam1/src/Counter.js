import React,{useState} from "react";
import OddEvenResult from "./OddEvenResult";

const Counter =({initialValue})=>{



    const [count,setCount]=useState(initialValue); //setCount 는 함수

    const onIncrease=()=>{
        setCount(count+1);
    };

    const onDecrease=()=>{
        setCount(count-1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
            <OddEvenResult count={count}/>
        </div>
    );
};

export default Counter;