import { useState } from "react";

function AdvanceCounter() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button
        onClick={increment}
        className="rounded-md border border-zinc-600 mr-3 px-4 py-2 hover:bg-zinc-800"
      >
        +
      </button>
      <span className="font-mono text-xl">{count}</span>

      <button
        onClick={decrement}
        className="rounded-md border border-zinc-600 ml-3 px-4 py-2 hover:bg-zinc-800"
      >
        -
      </button>
    </>
  );
}

export default AdvanceCounter;
