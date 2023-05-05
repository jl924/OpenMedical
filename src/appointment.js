import React, { useState, useRef } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import axios from "axios"
import "./style2.css"

const Appointment = ({ setAptTime, setAptDate }) => {
  const [value, onChange] = useState(new Date())
  console.log(value)
  const [date, setDate] = useState("")
  const [apt, setApt] = useState(false)
  const [aptInput, setAptInput] = useState(false)
  const [time, setTime] = useState("")
  const [selectedDate, setSelectedDate] = useState(new Date())

  var times = [
    { "00": "9:00", 15: "9:15", 30: "9:30", 45: "9:45", time: "9:00 AM" },
    {
      "00": "10:00",
      15: "10:15",
      30: "10:30",
      45: "10:45",
      time: "10:00 AM",
    },
    {
      "00": "11:00",
      15: "11:15",
      30: "11:30",
      45: "11:45",
      time: "11:00 AM",
    },
    {
      "00": "12:00",
      15: "12:15",
      30: "12:30",
      45: "12:45",
      time: "12:00 PM",
    },
    { "00": "1:00", 15: "1:15", 30: "1:30", 45: "1:45", time: "1:00 PM" },
    { "00": "2:00", 15: "2:15", 30: "2:30", 45: "2:45", time: "2:00 PM" },
    { "00": "3:00", 15: "3:15", 30: "3:30", 45: "3:45", time: "3:00 PM" },
    { "00": "4:00", 15: "4:15", 30: "4:30", 45: "4:45", time: "4:00 PM" },
  ]
  var correspond = {
    9: 0,
    10: 1,
    11: 2,
    12: 3,
    1: 4,
    2: 5,
    3: 6,
    4: 7,
  }
  const [available, setAvailable] = useState(times)
  const handleDayClick = async (value) => {
    setAptInput(false)
    setSelectedDate(value)
    var value2 = value
    var string1 = ""
    string1 = string1 + value2
    // console.log(string1)
    var array = string1.split(" ")
    var array2 = array.slice(0, 3)
    var aptDate = "" + array2[0] + ", " + array2[1] + " " + array2[2]
    setDate(aptDate)
    // console.log(aptDate)
    await axios
      .get("http://localhost:4000/appointment", { params: { aptDate } })
      .then((result) => {
        // console.log(result)
        if (result.data) {
          var temp = JSON.parse(JSON.stringify(times))
          for (var i = 0; i < result.data.length; i++) {
            var curr = result.data[i].time
            var hour = curr.substring(0, 1)
            var min = curr.slice(-2)
            var index = correspond[hour]
            if (temp[index][min]) {
              // console.log(temp[index][min])
              temp[index][min] = "N/A"
            }
          }
          setAvailable(temp)
          // console.log(temp)
        }
      })
    setApt(true)
  }

  let bookApt = (aptTime) => {
    if (aptTime !== "N/A") {
      // console.log(aptDate, aptTime)
      setTime(aptTime)
      setAptInput(true)
    } else {
      alert("time is not available")
    }
  }
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const reasonRef = useRef()

  let submitApt = (e) => {
    e.preventDefault()
    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    const reason = reasonRef.current.value

    var obj = {
      firstName: firstName,
      lastName: lastName,
      reason: reason,
      time: time,
      date: date,
    }
    axios.post("http://localhost:4000/appointment", obj).then((res) => {
      // console.log(res)
    })
    setAptDate(date)
    setAptTime(time)
    alert("submitted!")
    // console.log(obj)
  }

  // let stylePick = (time) => {
  //   if (time !== "N/A") {
  //     var def = {
  //       marginRight: "8px",
  //       backgroundColor: "skyBlue",
  //       borderRadius: "20px",
  //       borderWidth: "2px",
  //       borderColor: "#f7f0e6",
  //       borderStyle: "solid",
  //       cursor: "pointer",
  //       transition: "background-color 0.3s ease",
  //     }
  //     return def
  //   } else {
  //     var NoDef = {
  //       marginRight: "8px",
  //       backgroundColor: "red",
  //       borderWidth: "1px",
  //       borderStyle: "solid",
  //     }
  //     return NoDef
  //   }
  // }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "5px",
            maxWidth: "300px",
            margin: "0 30px",
          }}
        >
          <h3>Click on a date to see available times</h3>
          <Calendar
            onChange={onChange}
            onClickDay={handleDayClick}
            value={selectedDate}
          />
        </div>
        {apt ? (
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "5px",
              maxWidth: "400px",
              margin: "0 30px",
            }}
          >
            <h4>Available appointment for: {date}</h4>
            {available.map((hello) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "5px",
                  }}
                >
                  <div
                    key={hello}
                    style={{
                      marginRight: "8px",
                    }}
                  >
                    {hello.time}
                  </div>
                  <button
                    className={`my-button ${
                      hello["00"] !== "N/A" ? "active" : ""
                    }`}
                    onClick={() => bookApt(hello["00"])}
                  >
                    {hello["00"]}
                  </button>
                  <button
                    className={`my-button ${
                      hello["15"] !== "N/A" ? "active" : ""
                    }`}
                    onClick={() => bookApt(hello["15"])}
                  >
                    {hello["15"]}
                  </button>
                  <button
                    className={`my-button ${
                      hello["30"] !== "N/A" ? "active" : ""
                    }`}
                    onClick={() => bookApt(hello["30"])}
                  >
                    {hello["30"]}
                  </button>
                  <button
                    className={`my-button ${
                      hello["45"] !== "N/A" ? "active" : ""
                    }`}
                    onClick={() => bookApt(hello["45"])}
                  >
                    {hello["45"]}
                  </button>
                </div>
              )
            })}
            <small style={{ textAlign: "right" }}>
              <small style={{ textAlign: "right" }}>N/A* Not Available</small>
            </small>
          </div>
        ) : null}
        {aptInput ? (
          <form
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "5px",
              maxWidth: "400px",
              margin: "0 30px",
            }}
            onSubmit={submitApt}
          >
            <h4>
              Appointment for: {date} at {time}
            </h4>
            <div style={{ display: "flex", marginTop: "10px" }}>
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
            <textarea
              rows={5}
              cols={5}
              placeholder="Reason for visit..."
              style={{
                marginTop: "10px",
                width: "93.5%",
                padding: "10px",
                fontSize: "14px",
              }}
              ref={reasonRef}
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
              Submit
            </button>
          </form>
        ) : null}
      </div>
    </>
  )
}
export default Appointment
