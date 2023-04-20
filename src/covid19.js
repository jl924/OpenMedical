import React, { useState, useRef } from "react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import axios from "axios"
const data1 = require("./covid19Data.js")

let Covid19 = () => {
  const [year, setYear] = useState(2023)
  const [location, setLocation] = useState("USA")
  const countryRef = useRef()

  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.log(data1)
    setYear(Number(e.target.value))
  }

  const [locData, setLocData] = useState([
    {
      name: location,
      casesPerOneMillion: 318041,
      deathsPerOneMillion: 3460,
      recoveredPerOneMillion: 311666.5,
    },
  ])
  let searchCountry = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      axios
        .get(
          `https://corona.lmao.ninja/v2/countries/${countryRef.current.value}`
        )
        .then(async (res) => {
          // console.log(res.data.casesPerOneMillion)
          await setLocation(countryRef.current.value)
          var obj = [
            {
              name: countryRef.current.value,
              casesPerOneMillion: res.data.casesPerOneMillion,
              deathsPerOneMillion: res.data.deathsPerOneMillion,
              recoveredPerOneMillion: res.data.recoveredPerOneMillion,
            },
          ]
          setLocData(obj)
        })
        .then(() => (countryRef.current.value = ""))
        .catch((err) => alert("country does not exist, or check spelling"))
      // console.log(countryRef.current.value)
    }
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          margin: "0 auto",
          marginTop: "100px",
          width: "66%",
          height: "33%",
        }}
      >
        <div
          style={{
            marginBottom: "10px",
          }}
        >
          Monthly Covid Data (USA): {year}
        </div>
        <ResponsiveContainer width="90%" height="90%">
          <LineChart width={500} height={300} data={data1.data[year]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cases" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* ================================================= */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          margin: "0 auto",
          marginTop: "20px",
          width: "66%",
          height: "33%",
        }}
      >
        <div
          style={{
            marginBottom: "10px",
          }}
        >
          Covid Data (per million): {location}
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={500} height={300} data={locData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 400000]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="casesPerOneMillion" fill="#8884d8" />
            <Bar dataKey="deathsPerOneMillion" fill="red" />
            <Bar dataKey="recoveredPerOneMillion" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* ================================================= */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          margin: "0 auto",
          marginTop: "100px",
          maxWidth: "110px",
          position: "absolute",
          right: "1rem",
          top: "2rem",
        }}
      >
        <FormControl fullWidth variant="outlined" style={{ width: "100px" }}>
          <InputLabel htmlFor="year-select">Year</InputLabel>
          <Select
            label="Year"
            value={year}
            onChange={handleChange}
            inputProps={{
              name: "year",
              id: "year-select",
            }}
          >
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
          </Select>
        </FormControl>
      </div>
      <form
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          margin: "0 auto",
          marginTop: "100px",
          maxWidth: "110px",
          position: "absolute",
          right: "1rem",
          top: "30rem",
        }}
      >
        <input
          type="text"
          name="country"
          placeholder="country"
          style={{
            marginTop: "10px",
            width: "77%",
            padding: "10px",
            fontSize: "14px",
          }}
          ref={countryRef}
          onKeyDown={searchCountry}
        />
      </form>
    </>
  )
}

export default Covid19
