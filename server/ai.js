const config = require("./ignore/ignore.js")
const { Configuration, OpenAIApi } = require("openai")

// import { config } from "dotenv"
// config()
// console.log(process.env.API_KEY)
console.log(config)
const openai = new OpenAIApi(
  new Configuration({
    apiKey: config.config.key,
  })
)
openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello ChatGPT" }],
  })
  .then((res) => {
    console.log(res.data.choices)
  })

// let talkToGpt = () => {
// }

//   module.exports.talkToGpt = talkToGpt
