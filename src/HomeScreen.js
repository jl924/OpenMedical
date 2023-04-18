import React from "react"

let HomeScreen = () => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a team of dedicated professionals
        passionate about creating innovative solutions. Our mission is to
        provide exceptional products and services that meet the needs of our
        customers. With years of experience in the industry, we strive to
        deliver excellence in every aspect of our work.
      </p>
      <h2>Our Vision</h2>
      <p>
        Our vision is to become a leader in our industry, recognized for our
        cutting-edge technology, outstanding customer service, and commitment to
        quality. We aim to constantly improve and adapt to the ever-changing
        needs of our customers, while maintaining our core values of integrity,
        innovation, and customer satisfaction.
      </p>
      <h2>Our Team</h2>
      <p>
        Our team is comprised of highly skilled professionals with diverse
        backgrounds and expertise. We believe in fostering a collaborative and
        inclusive work environment that encourages creativity, open
        communication, and continuous learning. Each team member is an integral
        part of our success and contributes to our shared vision.
      </p>
      <div
        className="doctorWrapper"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "20px",
        }}
      >
        <div className="doctor1" style={{ display: "flex" }}>
          <div style={{ flex: "0 0 150px", marginRight: "20px" }}>
            <img
              src="https://www.henrymayo.com/app/files/public/dhanda.l--0002.jpg"
              alt="Team Member 1"
              style={{ width: "150px", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div>
            <h3>Raymond Reddy</h3>
            <p>Family Doctor</p>
          </div>
        </div>
        <div className="doctor2" style={{ display: "flex" }}>
          <div style={{ flex: "0 0 150px", marginRight: "20px" }}>
            <img
              src="https://i.redd.it/bvjhv94ta7121.jpg"
              alt="Team Member 2"
              style={{ width: "150px", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div>
            <h3>Johnny Yins</h3>
            <p>Plastic Surgeon</p>
            <p>
              <small>
                Our team is comprised of highly skilled professionals with
                diverse backgrounds and expertise. We believe in fostering a
                collaborative and inclusive work environment that encourages
                creativity, open communication, and continuous
                learning.inclusive work environment that encourages creativity,
                open communication, and continuous learning.
              </small>
            </p>
          </div>
        </div>
        <div className="doctor3" style={{ display: "flex" }}>
          <div style={{ flex: "0 0 150px", marginRight: "20px" }}>
            <img
              src="https://www.shape.com/thmb/q-mU0BCcgv9JhCkETuSILva8yfg=/1500x0/filters:no_upscale():max_bytes(200000):strip_icc()/black-female-doctor-6d6a6c2ec3ae48ceaeeae61f78b7038e.jpg"
              alt="Team Member 2"
              style={{ width: "150px", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div>
            <h3>Jane Smith</h3>
            <p>OBGYN</p>
          </div>
        </div>
        <div className="doctor4" style={{ display: "flex" }}>
          <div style={{ flex: "0 0 150px", marginRight: "20px" }}>
            <img
              src="https://www.definingcultures.com/wp-content/uploads/2016/10/Ken-Jeong-by-ABCMichael-Desmond-768x1024.jpg"
              alt="Team Member 2"
              style={{ width: "150px", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div>
            <h3>Ken Jeong</h3>
            <p>Podiatrist</p>
          </div>
        </div>
      </div>
      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! If you have any questions, feedback, or
        inquiries, please don't hesitate to contact us. You can reach us by
        phone, email, or through the contact form on our website. We are
        committed to providing excellent customer service and will respond to
        your inquiries as soon as possible.
      </p>
    </div>
  )
}

export default HomeScreen
