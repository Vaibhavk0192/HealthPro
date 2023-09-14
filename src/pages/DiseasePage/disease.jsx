import React from "react";
import "./disease.css";
import { FaArrowRight } from "react-icons/fa6";

export const Disease = () => {
  return (
    <div className="app__disease-box">
      <div className="app__disease-section1">
        <div className="app__disease-heading">
          Your One-Stop Disease Resource.
        </div>
        <div className="app__disease-subheading">
          Empowering You with Knowledge: Explore and Understand Diseases.
        </div>
        <form action="" className="app__disease-form">
          <input
            type="text"
            placeholder="Search Disease"
            className="app__disease-searchbox"
          />
          <div className="app__disease-button">
            <FaArrowRight size={20} color="black" />
          </div>
        </form>
      </div>
      <div className="app__disease-section2">
        <div className="app__disease-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M27.3497 53.0622C41.8835 53.0622 53.6654 41.1838 53.6654 26.5311C53.6654 11.8784 41.8835 0 27.3497 0C12.8159 0 1.03394 11.8784 1.03394 26.5311C1.03394 41.1838 12.8159 53.0622 27.3497 53.0622Z"
              fill="black"
            ></path>
            <path
              d="M27.3496 46.8463C38.4783 46.8463 47.4999 37.7509 47.4999 26.5311C47.4999 15.3113 38.4783 6.21582 27.3496 6.21582C16.2208 6.21582 7.19922 15.3113 7.19922 26.5311C7.19922 37.7509 16.2208 46.8463 27.3496 46.8463Z"
              fill="white"
            ></path>
            <path
              d="M57.7029 63L40.4097 45.5653L45.6728 40.259L62.966 57.6938L57.7029 63Z"
              fill="black"
            ></path>
            <path
              d="M31.5303 30.162H22.034L20.0265 35.4682H16.2371L24.6731 13.8871H29.1017L37.3724 35.4303H33.5303L31.5303 30.162ZM30.2596 26.8873L26.7634 17.7909L23.3047 26.8873H30.2596Z"
              fill="#00D100"
            ></path>
          </svg>
        </div>
        <div className="app__disease-contentbox">
          <div className="app__disease-disease_heading">
          Hypothetical Disease (HD)
          </div>
          <div className="app__disease-disease_sub_heading">
          Overview:
          </div>
          <div className="app__disease-content">
          Hypothetical Disease (HD) is a fictitious ailment used for illustrative purposes in medical and health-related discussions. It does not exist in reality but is employed in hypothetical scenarios, medical case studies, and educational materials to simulate the process of diagnosing and managing diseases.
          </div>
        </div>
          
      </div>
    </div>
  );
};
