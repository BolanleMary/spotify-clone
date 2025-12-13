import styles from "./counter.module.css";

const Counter = () =>{

    let counter = 0;
    const onClickHandler = () =>{
counter = counter + 1
    }
    return <div className ={styles.wrapper} >
<div className={styles.counterDisplay}>Counter {counter}</div>
<button onClick={onClickHandler} className={styles.counterButton}> Click me to count</button>
</div >
    
}

export default Counter;