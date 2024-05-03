import { useState } from "react";
import "./App.css";

function App() {
  const[Count, setCount] = useState(0);
  function decreaseHandler(){
    setCount(Count-1);
  }
  function increaseHandler(){
    setCount(Count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className=" text-[#0398de] font-medium text-2xl">Incremen and Decrement</div>
    <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344251]">
      <button onClick={decreaseHandler} className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl" >-</button>
      <div className="font-bold  gap-12 text-5xl">
        {Count}
      </div>
      <button onClick={increaseHandler} className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl" >+</button>
    </div>
    <button onClick={resetHandler} className="bg-[#398de] text-white px-5 py-2  rounded-sm text-5xl">reset</button>
    </div>
  );
}

export default App;
