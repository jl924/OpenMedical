import React, { useState, useEffect, useRef } from "react"
import axios from "axios"

const Chat = () => {
  var textStyleRight = {
    borderRadius: "5px",
    padding: "5px",
    textAlign: "right",
    margin: "5px",
  }
  var textStyleLeft = {
    borderRadius: "5px",
    padding: "5px",
    textAlign: "left",
    margin: "5px",
  }
  var spanStyleLeft = {
    border: "1px solid #53a8ce",
    borderRadius: "5px",
    padding: "5px",
    display: "inline-block",
    background: "skyBlue",
    position: "relative",
    zIndex: 1,
  }
  var spanStyleRight = {
    border: "1px solid #53a8ce",
    borderRadius: "5px",
    padding: "5px",
    display: "inline-block",
    background: "lightGrey",
    position: "relative",
    zIndex: 1,
  }
  var test =
    "Stay hydrated: Drink plenty of water, clear fluids, and electrolyte-rich beverages to help replenish fluids lost due to fever and sweating. Rest: Get plenty of rest to allow your body to recover and heal. Take fever-reducing medication: Use over-the-counter fever-reducing medications such as acetaminophen (e.g., Tylenol) or ibuprofen (e.g., Advil) as directed by your healthcare provider to help lower your fever and provide relief from associated discomfort. Keep cool: Use a cool compress, take a lukewarm bath, or use a fan to help lower body temperature and alleviate discomfort. Dress lightly: Wear lightweight, loose-fitting clothing to allow your body to regulate its temperature more effectively. Monitor your symptoms: If your fever persists for an extended period, is accompanied by severe symptoms, or worsens despite home care, it's important to seek medical attention promptly."

  const [chat, setChat] = useState([])
  const textRef = useRef()
  useEffect(() => {}, [chat])

  let addText = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      const inputValue = textRef.current.value
      var obj = {}
      obj.text1 = inputValue
      obj.gpt = false
      var array = []
      array.push(obj)
      setChat([...chat, obj])
      // console.log(chat)
      axios
        .get("http://localhost:4000/gpt", { params: { obj } })
        .then((res) => {
          // console.log(res.data, "what came back from gpt")
          var reply = res.data[0].message.content
          var array2 = reply.split(".")
          for (var i = 0; i < array2.length; i++) {
            console.log(array2[i])
            console.log(array2[i].indexOf("AI"))
            if (array2[i].indexOf("AI") > -1) {
              array2.splice(i, 1)
            }
            if (array2[i].indexOf("However, i") > -1) {
              array2[i] = array2[i].replace("However, i", "I")
            }
          }
          var string = array2.join(".")
          var obj2 = {}
          obj2.text1 = string
          obj2.gpt = true
          setChat((prevChat) => [...prevChat, obj2])
          console.log(chat, "after setting obj2")
        })
      // console.log(chat)
      // console.log("Input value:", inputValue)
      textRef.current.value = ""
    }
  }
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "5px",
        maxWidth: "700px",
        margin: "0 auto",
        marginTop: "100px",
      }}
    >
      <h3>Chat:</h3>
      <div
        style={{
          width: "700px",
          height: "700px",
          overflow: "auto",
          display: "grid",
          alignContent: "end",
        }}
      >
        <div>
          {chat.map((box) => {
            if (!box.gpt) {
              return (
                <p style={textStyleRight}>
                  <span style={spanStyleRight}>{box.text1}</span>
                </p>
              )
            } else {
              return (
                <p style={textStyleLeft}>
                  <span style={spanStyleLeft}>{box.text1}</span>
                </p>
              )
            }
          })}
        </div>
      </div>
      <textarea
        rows={1}
        cols={5}
        placeholder="Hey Dr.Gpt ..."
        style={{
          marginTop: "10px",
          width: "95.5%",
          padding: "10px",
          fontSize: "14px",
        }}
        ref={textRef}
        onKeyDown={addText}
      />
    </div>
  )
}

export default Chat
