const config = require("./ignore/ignore.js")
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai")
console.log(process.env.openAI)


const openai = new OpenAIApi(
  new Configuration({
    apiKey: config.config.key, //Your API KEY HERE
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


