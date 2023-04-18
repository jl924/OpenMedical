import React from "react"
import "./style2.css"
import { SlUserFemale } from "react-icons/sl"
import { SlUser } from "react-icons/sl"

const PatientInfo = ({ info }) => {
  var listStyle = {
    marginLeft: "10px",
    whiteSpace: "nowrap",
  }

  return (
    <div
      className="profile-container"
      style={{
        padding: "10px",
        maxWidth: "500px",
        margin: "0 auto",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minWidth: "200px",
      }}
    >
      {info.gender === "female" || info.gender === "Female" ? (
        <SlUserFemale size={70} style={{ alignSelf: "center" }} />
      ) : (
        <SlUser size={70} style={{ alignSelf: "center" }} />
      )}
      <div
        style={{
          marginLeft: "10px",
          whiteSpace: "nowrap",
          marginTop: "20px",
        }}
      >
        First Name: {info.firstName}
      </div>
      <div style={listStyle}>Last Name: {info.lastName}</div>
      <div style={listStyle}>Gender: {info.gender}</div>
      <div style={listStyle}>Blood Type: {info.bloodType}</div>
      <div style={listStyle}>Height: {info.height}</div>
      <div style={listStyle}>Weight: {info.weight}</div>
      <div style={listStyle}>AKA: {info.allergies}</div>
    </div>
  )
}

export default PatientInfo
