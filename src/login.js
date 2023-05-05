import React from "react"
import { useRef } from "react"
import axios from "axios"

let Login = ({ goHome, setPatient }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const loginSubmit = (e) => {
    e.preventDefault()
    // console.log(emailRef.current.value)
    // console.log(passwordRef.current.value)
    var info = {}
    info.email = emailRef.current.value
    info.password = passwordRef.current.value
    axios
      .get("http://localhost:4000/login", { params: { info } })
      .then((res) => {
        // console.log(res.data, "res at login frontend")
        if (!res.data.firstName) {
          alert(res.data)
        } else {
          setPatient(res.data)
          goHome()
        }
      })
  }
  return (
    <form
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "5px",
        maxWidth: "300px",
        margin: "0 auto",
        marginTop: "100px",
      }}
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        style={{
          marginTop: "10px",
          width: "93.5%",
          padding: "10px",
          fontSize: "14px",
        }}
        ref={emailRef}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        style={{
          marginTop: "10px",
          width: "93.5%",
          padding: "10px",
          fontSize: "14px",
        }}
        ref={passwordRef}
      />
      <button
        className="signInButton"
        type="submit"
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
        onClick={loginSubmit}
      >
        Log in
      </button>
    </form>
  )
}

export default Login
