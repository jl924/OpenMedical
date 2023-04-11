const cors = require("cors")
const express = require("express")
// const bodyParser = require("body-parser")
const app = express()

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

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`)
})
