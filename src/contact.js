import React from "react"

let Contact = () => {
  return (
    <form
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "5px",
        maxWidth: "300px",
        margin: "0 auto",
        marginTop: "100px",
      }}
    >
      <div>Contact Us:</div>
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
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          style={{ flex: "1", width: "93.5%" }}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        style={{
          marginTop: "10px",
          width: "93.5%",
          padding: "10px",
          fontSize: "14px",
        }}
      />
      <textarea
        rows={5}
        cols={5}
        placeholder="Write Your body here..."
        style={{
          marginTop: "10px",
          width: "93.5%",
          padding: "10px",
          fontSize: "14px",
        }}
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
  )
}

export default Contact
