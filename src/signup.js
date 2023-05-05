import React from "react"
import { useState, useRef } from "react"
import "./style2.css"
import axios from "axios"

let SignUp = ({ toLogin }) => {
  const [input, setInput] = useState(false)
  const [form, setForm] = useState({})
  const [sign1, setSign1] = useState(false)
  const [sign2, setSign2] = useState(false)

  let clickSignUp = (e) => {
    e.preventDefault()
    setInput(true)
  }

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const DOBref = useRef()
  const genderRef = useRef()
  const heightRef = useRef()
  const weightRef = useRef()
  const bloodTypeRef = useRef()
  const allergiesRef = useRef()

  let onSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    var obj = form
    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    obj.firstName = firstName
    obj.lastName = lastName
    obj.email = email
    obj.password = password
    setForm(obj)
    passwordRef.current.value = ""
    console.log(form)
    console.log(firstName, lastName, email, password)
  }

  let submitPatient = (e) => {
    e.preventDefault()
    var obj2 = form
    const DOB = DOBref.current.value
    const gender = genderRef.current.value
    const height = heightRef.current.value
    const weight = weightRef.current.value
    const bloodType = bloodTypeRef.current.value
    const allergies = allergiesRef.current.value

    obj2.DOB = DOB
    obj2.gender = gender
    obj2.height = height
    obj2.weight = weight
    obj2.bloodType = bloodType
    obj2.allergies = allergies
    setForm(obj2)
    setSign2(true)
    axios.post("http://localhost:4000/patients", obj2).then((res) => {
      console.log(res)
    })
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
        onSubmit={onSubmit}
      >
        <div style={{ display: "flex" }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            style={{
              marginRight: "10px",
              flex: "1",
              height: "35px",
              width: "93.5%",
            }}
            ref={firstNameRef}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            style={{ flex: "1", width: "93.5%" }}
            ref={lastNameRef}
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
        <div style={{ display: "flex" }}>
          <button
            className="signInButton"
            type="submit"
            style={{
              marginTop: "10px",
              marginRight: "10px",
              width: "100%",
              padding: "10px",
              fontSize: "12px",
            }}
            onClick={() => setSign1(true)}
          >
            Sign Up
          </button>
          {sign1 ? (
            <button
              className="signInButton"
              type="submit"
              style={{
                marginTop: "10px",
                width: "50%",
                padding: "10px",
                fontSize: "12px",
              }}
              onClick={clickSignUp}
            >
              To Patient Information
            </button>
          ) : null}
        </div>
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
        <div>Patient Information:</div>
        <input
          type="date"
          name="DOB"
          placeholder="DOB"
          style={{
            marginTop: "10px",
            width: "93.5%",
            padding: "10px",
            fontSize: "14px",
          }}
          ref={DOBref}
        />
        <input
          type="text"
          name="Gender"
          placeholder="Gender"
          style={{
            marginTop: "10px",
            width: "93.5%",
            padding: "10px",
            fontSize: "14px",
          }}
          ref={genderRef}
        />
        <input
          type="text"
          name="Height"
          placeholder="Height"
          style={{
            marginTop: "10px",
            width: "93.5%",
            padding: "10px",
            fontSize: "14px",
          }}
          ref={heightRef}
        />
        <input
          type="text"
          name="Weight"
          placeholder="Weight"
          style={{
            marginTop: "10px",
            width: "93.5%",
            padding: "10px",
            fontSize: "14px",
          }}
          ref={weightRef}
        />
        <input
          type="text"
          name="bloodType"
          placeholder="Blood Type"
          style={{
            marginTop: "10px",
            width: "93.5%",
            padding: "10px",
            fontSize: "14px",
          }}
          ref={bloodTypeRef}
        />
        <input
          type="text"
          name="Allergies"
          placeholder="Allergies"
          style={{
            marginTop: "10px",
            width: "93.5%",
            padding: "10px",
            fontSize: "14px",
          }}
          ref={allergiesRef}
        />
        <div style={{ display: "flex" }}>
          <button
            className="signInButton"
            type="submit"
            style={{
              marginTop: "10px",
              marginRight: "10px",
              width: "100%",
              padding: "10px",
              fontSize: "12px",
            }}
            onClick={submitPatient}
          >
            Finish Sign Up
          </button>
          {sign2 ? (
            <button
              className="signInButton"
              type="submit"
              style={{
                marginTop: "10px",
                width: "50%",
                padding: "10px",
                fontSize: "12px",
              }}
              onClick={toLogin}
            >
              To Log in
            </button>
          ) : null}
        </div>
      </form>
    )
  }
}

export default SignUp
