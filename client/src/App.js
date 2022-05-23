import React, {useState} from "react";

function clickMe(){
  alert('Clicked')
}

function App() {
  
  
  return (
  <>
  <center>English</center>
  <center>French</center>

  
  <center class="btngroup1">

    <button onClick={clickMe}>Czech</button>
    <button onClick={clickMe}>French</button>
    <button onClick={clickMe}>German</button>

  </center>
  <center class="btngroup2">
    <button onClick={clickMe}>Italian</button>
    <button onClick={clickMe}>Norwegian</button>
    <button onClick={clickMe}>Polish</button>

  </center>
  <center class="btngroup3">
    <button onClick={clickMe}>Spanish</button>
    <button onClick={clickMe}>Swedish</button>
    <button onClick={clickMe}>Turkish</button>

  </center>

  </>
  )
}

export default App;
