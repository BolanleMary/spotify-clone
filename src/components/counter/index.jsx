import styles from "./counter.module.css";
import {useState, useEffect} from "react"

const Counter =() => {
const [counter, setCounter] =useState(0)
const onClickHandler = () =>{
setCounter(counter + 1);
    };

    useEffect(() =>{
console.log('I am from the effect')

return() =>{
    console.log("unmounted")
}
    }, [counter])


()
    
    
    return(
     <div className ={styles.wrapper} >
<div className={styles.counterDisplay}>Counter {counter}</div>
<button onClick={onClickHandler} className={styles.counterButton}> Click me to count</button>
</div >
 )   
}

export default Counter;