import { useState, useEffect } from "react"

function App() {
  let [counterVisible, setCounterVisible] = useState(true);
  useEffect(function () {
    setInterval(function () {
      setCounterVisible(function (prev) {
        return !prev;
      })
    }, 5000)


  }, [])
  return <div>
    hi


    {counterVisible ? <Counter></Counter> : null}
  </div>
}
//mounting,re-rendering,unmounting
function Counter() {
  const [count, setCount] = useState(0);

  console.log("counter");
  useEffect(function () {
    console.log("on mount")
    let clock = setInterval(function () {
      console.log("from set interval")
      setCount(function (count) {//cant pass count+1 directly as it is a dependency
        return count + 1;
      })
    }, 1000)
    console.log("mounted");
    return function () {
      console.log("on unmount")
      clearInterval(clock);
    }
  }, []);//dependency array
  function increaseCount() {//hooking into lifecycle events of react
    setCount(count + 1);
  }
  //  }
  //  function decreaseCount(){
  //   setCount(count-1);
  //  }
  //  function resetCount(){
  //   setCount(count-1);
  //  }

  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    {/* <button onClick={decreaseCount}>Decrease count</button>
  <button onClick={resetCount}>Reset count</button> */}
  </div>

}


export default App;
