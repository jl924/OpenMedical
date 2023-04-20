import React from "react"
import { useState } from "react"
import Button from "@mui/material/Button"
import "./style2.css"
import HomeScreen from "./HomeScreen.js"
import SignUp from "./signup.js"
import Login from "./login.js"
import PatientInfo from "./patientInfo.js"
import Contact from "./contact.js"
import Appointment from "./appointment.js"
import Chat from "./chat.js"
import Covid19 from "./covid19"

let App = () => {
  const [home, setHome] = useState(false)
  const [apt, setApt] = useState(false)
  const [chat, setChat] = useState(false)
  const [info, setInfo] = useState(false)
  const [login, setLogin] = useState(true)
  const [signup, setSignup] = useState(false)
  const [covid, setCovid] = useState(false)
  const [patient, setPatient] = useState({})
  const [aptDate, setAptDate] = useState("")
  const [aptTime, setAptTime] = useState("")

  let AptTrue = () => {
    setHome(false)
    setApt(true)
    setChat(false)
    setInfo(false)
    setLogin(false)
    setSignup(false)
    setCovid(false)
  }
  let chatTrue = () => {
    setHome(false)
    setApt(false)
    setChat(true)
    setInfo(false)
    setLogin(false)
    setSignup(false)
    setCovid(false)
  }
  let infoTrue = () => {
    setHome(false)
    setApt(false)
    setChat(false)
    setInfo(true)
    setLogin(false)
    setSignup(false)
    setCovid(false)
  }
  let signupTrue = () => {
    setHome(false)
    setApt(false)
    setChat(false)
    setInfo(false)
    setLogin(false)
    setSignup(true)
    setCovid(false)
  }
  let homeTrue = () => {
    setHome(true)
    setApt(false)
    setChat(false)
    setInfo(false)
    setLogin(false)
    setSignup(false)
    setCovid(false)
  }
  let loginTrue = () => {
    setHome(false)
    setApt(false)
    setChat(false)
    setInfo(false)
    setLogin(true)
    setSignup(false)
    setCovid(false)
  }
  let covidTrue = () => {
    setHome(false)
    setApt(false)
    setChat(false)
    setInfo(false)
    setLogin(false)
    setSignup(false)
    setCovid(true)
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
              style={{ marginRight: "20px" }}
              onClick={covidTrue}
              className="header-button"
            >
              COVID-19
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
              <PatientInfo
                info={patient}
                infoTime={aptTime}
                infoDate={aptDate}
              />
            </div>
            <div className="content">
              <HomeScreen />
            </div>
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
              <PatientInfo
                info={patient}
                infoTime={aptTime}
                infoDate={aptDate}
              />
            </div>
            <div className="content">
              <Appointment setAptTime={setAptTime} setAptDate={setAptDate} />
            </div>
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
              <PatientInfo
                info={patient}
                infoTime={aptTime}
                infoDate={aptDate}
              />
            </div>
            <div className="content">
              <Chat />
            </div>
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
              <PatientInfo
                info={patient}
                infoTime={aptTime}
                infoDate={aptDate}
              />
            </div>
            <div className="content">
              <Contact />
            </div>
          </div>
        ) : null}
        {/* ============================================================================================================================ */}
        {covid ? (
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
              <PatientInfo
                info={patient}
                infoTime={aptTime}
                infoDate={aptDate}
              />
            </div>
            <div className="content">
              <Covid19 />
            </div>
          </div>
        ) : null}
      </>
    )
  }
  // ============================================================================================================================

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
        </div>
      </>
    )
  }
  // ============================================================================================================================
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
        </div>
      </>
    )
  }
}
export default App
