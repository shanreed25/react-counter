import { useState } from "react";



//Style Map
const styles = {
    counter : {
        container: 'rounded-lg  px-4 py-3 border-[#bf00ff] bg-[#bf00ff]/8 shadow-[0_0_10px_#bf00ff55]',
        btn: 'rounded-md border border-zinc-600 px-4 py-2 hover:bg-zinc-800'
    }
}




function AdvanceCounter() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className={styles.counter.container}>
      <button
        onClick={increment}
        className={`${styles.counter.btn} mr-3`}
      >
        +
      </button>
      <span className="font-mono text-xl">{count}</span>

      <button
        onClick={decrement}
        className={`${styles.counter.btn} ml-3`}
      >
        -
      </button>
      <button className={`${styles.counter.btn} ml-5`}>Reset</button>
    </div>
  );
}

export default AdvanceCounter;
