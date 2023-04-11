import React from "react"
import { TextField } from "@mui/material"

let Login = () => {
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
      >
        Log in
      </button>
    </form>
  )
}

export default Login
