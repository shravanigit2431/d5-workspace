
import React from 'react'
import { useState } from 'react';

function Calculator() {

    const [a, setNumber1] = React.useState();
    const [b, setNumber2] = React.useState();
    const [c, setTotal] = React.useState();

    function Addnumbers(){
        console.log("Result   " +a)
        console.log("Result   " +b)
       setTotal(a + b)
   // document.getElementById("resulttxt").innerHTML = "addition of two numbers " +c
    }
  return (
    <>
    <form>
        <input type='number' placeholder='enter number A'
         value={a}
         onChange={(e) => setNumber1(parseInt(+e.target.value))}
        />

        <input type='number' placeholder='enter number B'
        value={b}
        onChange={(e) => setNumber2(parseInt(+e.target.value))} />

        <input type='button' value="ADD" onClick={Addnumbers}/>
        <h1 id='resulttxt'> Result is {c} </h1>
    </form>
    </>
  )
}

export default Calculator