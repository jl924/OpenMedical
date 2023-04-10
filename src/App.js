import React from "react"
import { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import "./style.css"
import HomeScreen from "./HomeScreen"

let App = () => {
  const [home, setHome] = useState(false)
  useEffect(() => {
    console.log("hello")
  }, [])
  return (
    <>
      <div className="wrapper">
        <header>
          <Button
            variant="text"
            id="btn2"
            onClick={() => {
              setHome(true)
            }}
          >
            Text
          </Button>
          <Button variant="text" id="btn3">
            Text
          </Button>
          <h1>dr.lee</h1>
        </header>

        <side1>side1</side1>
        <side2>side2</side2>
        <center>heloooooooooooooooooooo</center>
        <footer>foot</footer>
      </div>
      <Button variant="text" id="btn1">
        Text
      </Button>
      {home ? <HomeScreen /> : <div>log in</div>}
    </>
  )
}

export default App

/* <div className="App">
  <div className="flex flex-col w-full">
    <div className="flex items-center w-full bg-primary h-[50px]">
      <img
        className="logo absolute h-[50px] mt-[10px]"
        src="https://i.imgur.com/beNiCcN.jpg"
        alt="Benj logo"
      />
    </div>
  </div>
  <h1>hello world</h1>
  <Button variant="contained">Hello World</Button>
</div>; */
