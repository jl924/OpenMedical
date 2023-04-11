const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/EMR", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {
  console.log("connecteeeedddddd")
})

const PatientSchema = new mongoose.Schema({
  name: String,
  age: String,
  weight: String,
  height: String,
  blood: String,
  allergy: String,
  email: String,
  password: String,
})
// 3. Export the models
const Patient = mongoose.model("Patient", PatientSchema)
