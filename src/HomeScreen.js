import React from "react"

let HomeScreen = () => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1 style={{ color: "#325343" }}> About Us</h1>
      <p>
        Our center is a state-of-the-art medical facility dedicated to providing
        comprehensive healthcare services to our community. Our team of skilled
        and compassionate doctors includes specialists in family practice,
        podiatry, plastic surgery, and obstetrics and gynecology (OBGYN). With a
        focus on patient-centered care, we strive to deliver the highest quality
        medical services in a warm and welcoming environment.
      </p>
      <h2 style={{ color: "#325343" }}>Our Vision</h2>
      <p>
        Our vision is to be the premier healthcare center in our region,
        offering a wide range of medical services to meet the diverse needs of
        our patients. We are committed to delivering personalized care that is
        tailored to each patient's unique health concerns and lifestyle,
        ensuring their well-being and satisfaction.
      </p>
      <h2 style={{ color: "#325343" }}>Our Team</h2>
      <p>
        Our center is proud to have a team of highly skilled and compassionate
        doctors who are dedicated to providing exceptional medical care to our
        patients. Our team includes:
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
              src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
              alt="Team Member 1"
              style={{ width: "150px", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div>
            <h3 style={{ color: "#325343" }}>Dr. Raymond Reddy</h3>
            <p>Family Doctor</p>
            <p>
              <small>
                Dr. Reddy has over 15 years of experience in family medicine and
                is known for his thorough and patient-centered approach. He is
                passionate about preventive care and building long-term
                relationships with his patients to help them achieve optimal
                health.
              </small>
            </p>
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
            <h3 style={{ color: "#325343" }}>Dr. Johnny Yins</h3>
            <p>Plastic Surgeon</p>
            <p>
              <small>
                Dr. Yins is a highly skilled plastic surgeon with a keen eye for
                detail and a commitment to natural-looking results. She
                specializes in a wide range of cosmetic and reconstructive
                procedures and takes the time to understand her patients'
                aesthetic goals and concerns, providing personalized treatment
                plans.
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
            <h3 style={{ color: "#325343" }}>Dr. Jane Smith</h3>
            <p>OBGYN</p>
            <p>
              <small>
                Dr. Smith is a compassionate and experienced obstetrician and
                gynecologist with a focus on women's health and wellness. She
                provides comprehensive care for women of all ages, from
                reproductive health to pregnancy and menopause management, and
                is known for her caring and empathetic approach.
              </small>
            </p>
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
            <h3 style={{ color: "#325343" }}>Dr. Ken Jeong</h3>
            <p>Podiatrist</p>
            <p>
              <small>
                Dr. Jeong is a board-certified podiatrist with expertise in
                diagnosing and treating various foot and ankle conditions. She
                is committed to staying updated with the latest advancements in
                podiatric medicine and providing personalized care to improve
                her patients' foot health and mobility.
              </small>
            </p>
          </div>
        </div>
      </div>
      <div
        className="doctor4"
        style={{
          display: "flex",
          padding: "20px",
          borderRadius: "5px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <div style={{ flex: "0 0 150px", marginRight: "20px" }}>
          <img
            src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F20549920-bb0f-11e7-8b2e-f28d30e9c9fd.jpg?crop=2667%2C1500%2C0%2C0"
            alt="Team Member GPT"
            style={{ width: "150px", height: "200px", objectFit: "cover" }}
          />
        </div>
        <div>
          <h3 style={{ color: "#325343" }}>Dr. GPT</h3>
          <p>Everything</p>
          <p>
            <small>
              Dr. GPT holds an impressive array of credentials, including a
              Medical Doctorate (MD) and a Doctor of Philosophy (PhD) in ALL
              Medical Research history. It's extensive education and training
              have equipped it with a deep understanding of human anatomy,
              physiology, and pathology, as well as advanced skills in diagnosis
              and treatment.
            </small>
          </p>
        </div>
      </div>
      <p>
        In addition to our skilled physicians, our center is supported by a team
        of experienced nurses, medical assistants, and administrative staff who
        work collaboratively to ensure the highest level of care and service for
        our patients. Our team is committed to continuing education, staying
        up-to-date with the latest advancements in medical research and
        technology, and providing personalized care that is tailored to each
        patient's needs. We are dedicated to building lasting relationships with
        our patients based on trust, respect, and exceptional healthcare.
      </p>
      <h2 style={{ color: "#325343" }}>Our Commitment</h2>
      <p>
        At our center, we are committed to excellence in healthcare. We
        prioritize patient safety, compassion, and evidence-based medicine in
        our approach to patient care. Our team of skilled doctors and staff work
        collaboratively to provide comprehensive, personalized care in a
        friendly and welcoming environment. We strive to exceed our patients'
        expectations, building long-term relationships based on trust, respect,
        and quality healthcare.
      </p>
      <h2 style={{ color: "#325343" }}>Contact Us</h2>
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
