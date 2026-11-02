import { useEffect, useState, type ChangeEvent } from "react";
import loadSavedCounterInfo from "../utils/storage";

//Style Map
const styles = {
  counter: {
    counterContainer: "flex flex-col items-center justify-center",
    btnContainer:
      "rounded-lg  px-4 py-3 border-[#bf00ff] bg-[#bf00ff]/8 shadow-[0_0_10px_#bf00ff55]",
    btn: "rounded-md border border-zinc-600 px-4 py-2 hover:bg-zinc-800",
  },
};


function AdvanceCounter() {
  /*
    coun, step and countHistory states load their startig value from localStorage
    using lazy initialization useState(() =>.....), which allows it to be called on first render
  */
  const [count, setCount] = useState(() => loadSavedCounterInfo().count);//only on first render
  const [step, setStep] = useState(() => loadSavedCounterInfo().step)
  const [countHistory, setCountHistory] = useState(() => loadSavedCounterInfo().history)
  const [countStatus, setCountStatus] = useState("Changes Saved")


/*
  Auto save feature runs after first render then everytime
  count, step orr countHistory changes
*/
  useEffect(() => {
    setCountStatus("Saving to localStorage.....")
    const timer = setTimeout(() => {
        const counterData = {count, step, countHistory}
        localStorage.setItem("reactCounter", JSON.stringify(counterData))
        setCountStatus("Changes Saved");
        console.log("Saved:", counterData);
    }, 1000)//1 second delay

    //runs before the effect runs again or if the component unmounts
    return () => clearTimeout(timer)
  }, [count, step, countHistory])

  const numStep = Number(step)//e.target.value is a string so it needs to be converted to a number

  function decrement() {
    /*
    setCount((prevCount) => prevCount - numStep);//setCount schedules the change to -1
    setCountHistory((prevHistory) => [...prevHistory, count])//setCountHistory adds 0 to the history, because count is still 0 in this function call
    */

    //calculate the updated count then use 
    // it for setCount ans setHistoryCount
    const updatedCount = count - numStep
    setCount(updatedCount);//setCount schedules the change
    setCountHistory((prevHistory) => [...prevHistory, updatedCount])
  }

  function increment() {
    const updatedCount = count + numStep
    setCount(updatedCount);
    setCountHistory((prevHistory) => [...prevHistory, updatedCount])
  }

  function handleStep(e: ChangeEvent<HTMLInputElement>){
    setStep(e.target.value)

  }

  function handleReset(){
    setCount(0)
    setStep("1")
    setCountHistory([0])
  }


  return (
    <div className={styles.counter.counterContainer}>
      <h2 className="my-5 text-2xl">Current Count: {count}</h2>
      <div className={styles.counter.btnContainer}>
        <button onClick={increment} className={`${styles.counter.btn} mr-3`}>
          +
        </button>
        <span className="font-mono text-xl">{count}</span>

        <button onClick={decrement} className={`${styles.counter.btn} ml-3`}>
          -
        </button>
        <button 
        className={`${styles.counter.btn} ml-5`}
        onClick={handleReset}
        >Reset</button>
      </div>

      <div>
        <div>
          <label htmlFor="step">Step Value:</label>
          <input 
          id="step" 
          type="number"//e.target.value is still a string
          value={step}//makes the input a controlled input
          onChange={handleStep}
          />
        </div>
        <span>{countStatus}</span>
      </div>

      <div>
        <h3>Count History:</h3>
        {countHistory.map((count) => (
            <p>{count}</p>
        ))}
      </div>
    </div>
  );
}

export default AdvanceCounter;
