import React, { useState, useRef, useCallback, useEffect } from "react";
// import Counter from "./Counter";

function App() {
 
  // let arr = document.querySelectorAll('.boxes')
  let [num,setNum] = useState(0)

  let [isActive,setActive] = useState(false)
  let [count,setCount] = useState(0)
  // let pointCount = 0
  let [pts,setPts] = useState(0)
  let diva= [1,2,3,4,5,6,7,8,9]
  const timerRef = useRef(null)
  let [btn,setBtn] = useState(false)




  let random = Math.floor(Math.random()*9)

  let numberSet = ()=>{
    let numr = random
    if(numr>=0||numr<=9){
     
      
      setNum(numr)
    document.getElementById(numr).innerText='Hit'
    }
    
  }


 let start = ()=>{
  setActive(false)
  setPts(0)
  
 timerRef.current= setInterval(() => {
    setCount((e)=>e+1)
  }, 1500);
  // if(count>=10) clearInterval(timerRef.current)
  setBtn(true)

  }
  

  useEffect(()=>{
  
    if(count >=60){
      clearInterval(timerRef.current)
      timerRef.current = null;
      setCount((e)=>e-e)
      setActive(true)
      
    }
    if(count%2 !=0 ){
      numberSet()
    }
    
  
  },[count])
 

  // if(arr.length>0){
    

  let handleClick = (e)=>{
  
    if(e==num){
      setPts( pointCount =>pointCount+5)
        document.getElementById(num).innerText = ""
       

    }else {
     setPts( pointCount =>pointCount-2.5)
       document.getElementById(e).innerText = ""
       document.getElementById(num).innerText = ""
       setNum(-1)
       

    }

  }

  // const [time, setTime] = useState(0); // State for rendering the current time
  // const timeRef = useRef(0); // Mutable ref to track time without causing re-renders
  // const timerRef = useRef(null); // Ref to store the timer ID

  // // Start the timer
  // const startTimer = useCallback(() => {
  //   if (timerRef.current) return; // Prevent multiple timers
  //   timerRef.current = setInterval(() => {
  //     timeRef.current += 1; // Update the mutable ref
  //     setTime(timeRef.current); // Update state only when necessary
  //   }, 1000);
  // }, []);

  // // Stop the timer
  // const stopTimer = useCallback(() => {
  //   if (timerRef.current) {
  //     clearInterval(timerRef.current);
  //     timerRef.current = null; // Reset the timer ID
  //   }
  // }, []);

  // // Reset the timer
  // const resetTimer = useCallback(() => {
  //   stopTimer();
  //   timeRef.current = 0; // Reset the mutable ref
  //   setTime(0); // Update the state
  // }, [stopTimer]);

  // // Cleanup on component unmount
  // useEffect(() => {
  //   return () => stopTimer();
  // }, [stopTimer]);

  
 
  return (
    <>
          <div className="container">
            
            {isActive?<><div className="dis">Your Score : {pts}</div>
            <button className='btn' disabled={false} onClick={start} >Play Again</button>
            </>:<><div className="h1">Hit to win</div>
            <div className="disply"><div className="dis">Time Left:{60-count}</div>
            <div className="dis">score:{pts}</div>
            </div>
            {count>0?<div className="box">
              {diva?.map((ele,i)=><div id={i} key={i} className="boxes" onClick={(e)=>handleClick(i)}>{}</div>)}

            </div>:<button className='btn' disabled={false} onClick={start} >Start</button>}</>}
            
          </div>
    </>
  )
}

export default App
