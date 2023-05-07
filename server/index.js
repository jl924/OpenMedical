const cors = require("cors")
const express = require("express")
// const bodyParser = require("body-parser")
const app = express()
const db = require("./db")
const config = require("./ignore/ignore.js")
const { Configuration, OpenAIApi } = require("openai")
require('dotenv').config()

app.use(
  cors({
    origin: "http://localhost:3000",
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/boring", (req, res) => {
  console.log("something something")
  var data = {}
  data.hi = "hello"
  res.send(data)
})

app.get("/login", (req, res) => {
  console.log(req.query.info)
  db.getPatient(`${req.query.info.email}`)
    .then((result) => {
      console.log(result, "results inside then")
      if (result === null) {
        res.send(
          "Email does not exist. Please sign up or enter correct email and password"
        )
      } else if (result.password === req.query.info.password) {
        res.send(result)
      } else {
        res.send("Incorrect password")
      }
    })
    .catch((err) => {
      console.log(err)
    })
})
app.post("/patients", (req, res) => {
  console.log(req.body)
  db.insertPatient(req.body).then((data) => {
    res.send("added to database")
    console.log("added to database")
  })
})

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.openAI,
  })
)

app.get("/gpt", (req, res) => {
  console.log(req.query.obj.text1, "Q")
  openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.query.obj.text1 }],
    })
    .then((data) => {
      console.log(data.data.choices)
      res.send(data.data.choices)
    })
})

app.get("/appointment", (req, res) => {
  console.log(req.query.aptDate)
  db.getAppointment(req.query.aptDate).then((response) => {
    console.log(response)
    // var array = [response]
    res.send(response)
  })
})
app.post("/appointment", (req, res) => {
  console.log(req.body)
  db.insertAppointment(req.body).then((data) => {
    res.send("added to database")
    console.log("added to database")
  })
})
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`)
})
