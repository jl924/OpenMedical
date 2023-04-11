import React from "react"
import { useState } from "react"
import { TextField } from "@mui/material"
import "./style2.css"

let SignUp = () => {
  const [input, setInput] = useState(false)
  let clickSignUp = () => {
    setInput(true)
  }

  if (!input) {
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
        <div style={{ display: "flex" }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            style={{ marginRight: "10px", flex: "1", height: "30px" }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            style={{ flex: "1" }}
          />
        </div>
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
        />
        <button
          type="submit"
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            fontSize: "16px",
          }}
          onClick={clickSignUp}
        >
          Sign Up
        </button>
      </form>
    )
  }
  if (input) {
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
          type="text"
          name="text"
          placeholder="text"
          style={{
            marginTop: "10px",
            width: "93.5%",
            padding: "10px",
            fontSize: "14px",
          }}
        />
        <input
          type="text"
          name="text"
          placeholder="text"
          style={{
            marginTop: "10px",
            width: "93.5%",
            padding: "10px",
            fontSize: "14px",
          }}
        />
        <input
          type="text"
          name="text"
          placeholder="text"
          style={{
            marginTop: "10px",
            width: "93.5%",
            padding: "10px",
            fontSize: "14px",
          }}
        />
        <input
          type="text"
          name="text"
          placeholder="text"
          style={{
            marginTop: "10px",
            width: "93.5%",
            padding: "10px",
            fontSize: "14px",
          }}
        />
        <input
          type="text"
          name="text"
          placeholder="text"
          style={{
            marginTop: "10px",
            width: "93.5%",
            padding: "10px",
            fontSize: "14px",
          }}
        />
        <input
          type="text"
          name="text"
          placeholder="text"
          style={{
            marginTop: "10px",
            width: "93.5%",
            padding: "10px",
            fontSize: "14px",
          }}
        />
        <button
          type="submit"
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            fontSize: "16px",
          }}
        >
          Sign Up
        </button>
      </form>
    )
  }
}

export default SignUp
