import React from "react"
import "./style2.css"
import { useMemo } from "react"
import { createAvatar } from "@dicebear/core"
import { lorelei } from "@dicebear/collection"

const PatientInfo = ({ info, infoTime, infoDate }) => {
  var listStyle = {
    marginLeft: "10px",
    whiteSpace: "nowrap",
  }
  var listStyle2 = {
    marginLeft: "30px",
    whiteSpace: "nowrap",
  }
  var listStyle3 = {
    marginTop: "5px",
    marginLeft: "30px",
    whiteSpace: "nowrap",
  }
  var long = [
    "variant40",
    "variant41",
    "variant42",
    "variant14",
    "variant13",
    "variant19",
    "variant45",
    "variant31",
  ]
  var short = [
    "variant01",
    "variant02",
    "variant03",
    "variant04",
    "variant06",
    "variant09",
    "variant28",
    "variant36",
  ]
  const avatar = useMemo(() => {
    return createAvatar(lorelei, {
      size: 128,
      seed: info.firstName || "jessica",
      hair:
        info.gender === "male" || info.gender === "Male" || info.gender === ""
          ? short
          : long,
    }).toDataUriSync()
  }, [])

  return (
    <>
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
          <img src={avatar} alt="Avatar" />
        ) : (
          <img src={avatar} alt="Avatar" />
        )}
        <div
          style={{
            marginLeft: "10px",
            whiteSpace: "nowrap",
            marginTop: "20px",
          }}
        >
          First Name: {info.firstName || "John"}
        </div>
        <div style={listStyle}>Last Name: {info.lastName || "Doe"}</div>
        <div style={listStyle}>Gender: {info.gender || "Male"}</div>
        <div style={listStyle}>Blood Type: {info.bloodType || "O"}</div>
        <div style={listStyle}>Height: {info.height || "6ft"}</div>
        <div style={listStyle}>Weight: {info.weight || "180Lbs"}</div>
        <div style={listStyle}>AKA: {info.allergies || "Cherries"}</div>
      </div>
      <div>
        <div
          className="profile-container"
          style={{
            padding: "10px",
            maxWidth: "500px",
            margin: "0 auto",
            marginTop: "10px",
            alignItems: "left",
            flexDirection: "column",
            minWidth: "200px",
          }}
        >
          <div
            style={{
              marginLeft: "10px",
              whiteSpace: "nowrap",
              marginTop: "20px",
            }}
          >
            Next Appointment:
          </div>
          <div style={listStyle3}>Date: {infoDate}</div>
          <div style={listStyle2}>Time: {infoTime}</div>
        </div>
      </div>
    </>
  )
}

export default PatientInfo
