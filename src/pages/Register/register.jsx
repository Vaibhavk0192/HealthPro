import React, { useContext, useState } from "react";
import "./register.css";
import arrow from "../../images/arrow.png";
import AuthContext from "../../context/AuthContext";

function Register() {
  const [registerformData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({
      ...registerformData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(registerformData);
      await register(
        registerformData.name,
        registerformData.email,
        registerformData.password
      );
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
          <div
            style={{
              textAlign: "left",
              fontSize: "25px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            <p>
              We aim to make more care happen than anyone else because more is
              the care we all deserve.
            </p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={handleSubmit}
          >
            <div>
              <img style={{ scale: "0.60" }} src={arrow} alt="arrow" />
            </div>
            <div>
              <h1 style={{ fontSize: "40px", fontFamily: "NibPro-SemiBold" }}>
                Submit
              </h1>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "60%",
            borderRadius: "10px",
            padding: "50px",
          }}
        >
          <form>
            <div>
              <label>Name:</label>
              <input
                className="inputfield"
                placeholder="Enter Name"
                type="name"
                name="name"
                value={registerformData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                className="inputfield"
                placeholder="Enter Email"
                type="email"
                name="email"
                value={registerformData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                className="inputfield"
                placeholder="Enter Password"
                type="password"
                name="password"
                value={registerformData.password}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
