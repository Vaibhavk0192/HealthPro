import React, { useState } from "react";
import axios from "axios";
import "./patientDetails.css";
import arrow from "../../images/arrow.png"

function PatientDetails() {
  const [formData, setFormData] = useState({
    patientName: "",
    dob: "",
    gender: "",
    phoneNo: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/save_patient", formData);
      console.log(response.data);
      setFormData({
        patientName: "",
        dob: "",
        gender: "",
        phoneNo: "",
        email: "",
      });
    } catch (error) {
      console.error("Error saving patient:", error);
    }
  };

  return (
    <div>
      {/* <h2 style={{ fontSize: "40px" , fontFamily: 'NibPro-SemiBold'}}>Patient Information</h2> */}
      <div style={{ display: "flex", margin: "80px" }}>
        <div>
          <div
            style={{
              width: "40%",
              fontFamily: "NibPro-SemiBold",
              fontSize: "110px",
              padding: "30px",
              margin: "40px",
              display: "flex",
            }}
          >
            Enter your information
          </div>
          <div style={{textAlign: 'left', fontSize: '25px', paddingLeft: '30px', paddingRight: '30px'}}>
            <p>We aim to make more care happen than anyone else because more is the
            care we all deserve.</p>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div>
                <img style={{scale: '0.60'}} src={arrow} alt="arrow" onClick={handleSubmit}/>
            </div>
            <div>
                <h1 style={{fontSize: '40px', fontFamily: 'NibPro-SemiBold'}}>Submit</h1>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "white", width: "60%", borderRadius: '10px', padding: '50px'}}>
          <form>
            <div>
              <label style={{}}>Patient Name:</label>
              <input 
              className={`inputfield ${formData.patientName && "focused"}`}
              placeholder="Enter Name"
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                required
              />
            </div>
            <br></br>
            <div>
              <label>Date of Birth:</label>
              <input className="inputfield"
              placeholder="Select DOB"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <br></br>
            <div>
              <label>Gender:</label>
              <select className="inputfield"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <br></br>
            <div>
              <label>Contact No:</label>
              <input className="inputfield"
              placeholder="Enter Contact Number"
                type="text"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
              />
            </div>
            <br></br>
            <div>
              <label>Email:</label>
              <input className="inputfield"
              placeholder="Enter Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
