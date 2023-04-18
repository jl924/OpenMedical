import React from "react"
import { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import "./style2.css"
import HomeScreen from "./HomeScreen.js"
import axios from "axios"
import SignUp from "./signup.js"
import Login from "./login.js"
import PatientInfo from "./patientInfo.js"
import Contact from "./contact.js"
import Appointment from "./appointment.js"
import Chat from "./chat.js"

let App = () => {
  const [home, setHome] = useState(false)
  const [apt, setApt] = useState(false)
  const [chat, setChat] = useState(false)
  const [info, setInfo] = useState(false)
  const [login, setLogin] = useState(true)
  const [signup, setSignup] = useState(false)
  const [patient, setPatient] = useState({})

  useEffect(() => {
    console.log("boring")
    // axios.get("/boring").then((data) => {
    //   console.log(data.body)
    // })
  }, [])

  let getData = () => {
    axios.get("http://localhost:4000/boring").then((data) => {
      console.log(data.data)
    })
  }

  let AptTrue = () => {
    setHome(false)
    setApt(true)
    setChat(false)
    setInfo(false)
    setLogin(false)
    setSignup(false)
  }
  let chatTrue = () => {
    setHome(false)
    setApt(false)
    setChat(true)
    setInfo(false)
    setLogin(false)
    setSignup(false)
  }
  let infoTrue = () => {
    setHome(false)
    setApt(false)
    setChat(false)
    setInfo(true)
    setLogin(false)
    setSignup(false)
  }
  let signupTrue = () => {
    setHome(false)
    setApt(false)
    setChat(false)
    setInfo(false)
    setLogin(false)
    setSignup(true)
  }
  let homeTrue = () => {
    setHome(true)
    setApt(false)
    setChat(false)
    setInfo(false)
    setLogin(false)
    setSignup(false)
  }
  let loginTrue = () => {
    setHome(false)
    setApt(false)
    setChat(false)
    setInfo(false)
    setLogin(true)
    setSignup(false)
  }

  if (!login && !signup) {
    return (
      <>
        <div className="header">
          <h1
            style={{ marginLeft: "40px" }}
            onClick={homeTrue}
            className="title-h1"
          >
            OpenMedical
          </h1>
          <div className="header-buttons">
            <Button
              variant="text"
              style={{ marginRight: "20px" }}
              onClick={AptTrue}
              className="header-button"
            >
              Make an Appointment
            </Button>
            <Button
              variant="text"
              style={{ marginRight: "20px" }}
              onClick={chatTrue}
              className="header-button"
            >
              Talk to a Doctor
            </Button>
            <Button
              variant="text"
              style={{ marginRight: "50px" }}
              onClick={infoTrue}
              className="header-button"
            >
              Contact Us
            </Button>
          </div>
        </div>
        {/* ========================================================================================================== */}
        {home ? (
          <div className="wrapper">
            <div className="side1">
              <h4
                style={{
                  marginLeft: "10px",
                  whiteSpace: "nowrap",
                  marginTop: "10px",
                }}
              >
                Welcome Back!
              </h4>
              <PatientInfo info={patient} />
            </div>
            <div className="content">
              <HomeScreen />
            </div>
            <div className="side2">Side 2</div>
          </div>
        ) : null}
        {/* ========================================================================================================== */}
        {apt ? (
          <div className="wrapper">
            <div className="side1">
              <h4
                style={{
                  marginLeft: "10px",
                  whiteSpace: "nowrap",
                  marginTop: "10px",
                }}
              >
                Welcome Back!
              </h4>
              <PatientInfo info={patient} />
            </div>
            <div className="content">
              <Appointment />
            </div>
            <div className="side2">Side 2</div>
          </div>
        ) : null}
        {/* ========================================================================================================== */}
        {chat ? (
          <div className="wrapper">
            <div className="side1">
              <h4
                style={{
                  marginLeft: "10px",
                  whiteSpace: "nowrap",
                  marginTop: "10px",
                }}
              >
                Welcome Back!
              </h4>
              <PatientInfo info={patient} />
            </div>
            <div className="content">
              <Chat />
            </div>
            <div className="side2">Side 2</div>
          </div>
        ) : null}
        {/* ========================================================================================================== */}
        {info ? (
          <div className="wrapper">
            <div className="side1">
              <h4
                style={{
                  marginLeft: "10px",
                  whiteSpace: "nowrap",
                  marginTop: "10px",
                }}
              >
                Welcome Back!
              </h4>
              <PatientInfo info={patient} />
            </div>
            <div className="content">
              <Contact />
            </div>
            <div className="side2">Side 2</div>
          </div>
        ) : null}
      </>
    )
  }
  {
    /* ========================================================================================================== */
  }
  if (login) {
    return (
      <>
        <div className="header">
          <h1 style={{ marginLeft: "40px" }}>OpenMedical</h1>
          <div className="header-buttons">
            <Button
              variant="text"
              style={{ marginRight: "20px" }}
              className="header-button"
              onClick={homeTrue}
            >
              Home
            </Button>
            <Button
              variant="text"
              style={{ marginRight: "50px" }}
              onClick={signupTrue}
              className="header-button"
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className="wrapper">
          <div className="side1"></div>
          <div className="content">
            <Login goHome={homeTrue} setPatient={setPatient} />
          </div>
          <div className="side2"></div>
        </div>
      </>
    )
  }
  {
    /* ========================================================================================================== */
  }
  if (signup) {
    return (
      <>
        <div className="header">
          <h1 style={{ marginLeft: "40px" }}>OpenMedical</h1>
          <div className="header-buttons">
            <Button
              variant="text"
              style={{ marginRight: "20px" }}
              className="header-button"
            >
              Home
            </Button>
            <Button
              variant="text"
              style={{ marginRight: "50px" }}
              onClick={loginTrue}
              className="header-button"
            >
              Log in
            </Button>
          </div>
        </div>
        <div className="wrapper">
          <div className="side1"></div>
          <div className="content">
            <SignUp toLogin={loginTrue} />
          </div>
          <div className="side2"></div>
        </div>
      </>
    )
  }
}
export default App
