import React, { useState } from 'react'
import './App.css';
import History from './components/History';
import Display from './components/Display';
import Button from './components/Button';


const App = () => {
 const [left , setLeft] = useState(0)
 const [right, setRight] = useState(0)
 const [allClicks, setAllClicks] = useState([])

 const handleClickLeft= ()=>{
  setAllClicks(allClicks.concat('L'));
  setLeft(left+1)
 }
 const handleClickRight= ()=>{
  setAllClicks(allClicks.concat('R'));
  setRight(right+1);
 }
  return (
    <div>
      {left}
      <Button name='Left' handleClick={handleClickLeft}/>
      <Button name='Right' handleClick={handleClickRight}/>
      {right}
      <History allClicks={allClicks}/>

    </div>
  )
}


export default App;
