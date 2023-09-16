import React, { useEffect, useState } from 'react';
import "./home.css"
import axios from 'axios';
import UserLink from '../../components/userLink';

function LandingPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make a GET request to your Flask backend's API endpoint
    axios.get('/api/users')  // Update the URL as needed
      .then((response) => {
        setUsers(response.data); // Set the fetched user data in state
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);
}

var images = require.context('../../../public/images', true)

export const Home = () => {
  return (
    <div>
      {/* 1st box starts here */}
      <div className='genInfoBox'>
        <img className='genInfoBoxImg' src={images("./blackWoman-poster.png")} alt="" srcset="" />
        <div className='genInfoBoxText'>
          <div>
            <div className='genInfoBoxTextHeading'>
              More care, for more people.
            </div>
            <div className='genInfoBoxTextPara'>
              We help more patients access the healthcare they need by offering affordable monthly payment options
            </div>
            <div className='genInfoBoxRoller'>
              <div>
                Discover Prima
              </div>
            </div>
          </div>
        </div>
        <img className='genInfoBoxImg' src={images("./Girl-poster.png")} alt="" srcset="" />
      </div>
      {/* 2nd Box starts here */}
      <div className='spacingLandingPage'></div>
      <div className='landingPageBox2'>
        <img src={images("./graph-poster.png")} alt="" className='landingPageBox2Img' />
        <div className='landingPageBox2Text'>
          <h1>Approve most patients.</h1>
          <p>Many patients looking for care are turned away because of increased out-of-pocket costs and unsophisticated credit algorithms. But that doesn’t have to be the case. It’s time to get more people the treatment they deserve.</p>
          <div className='landingPageBox2Selector'>
            <p>
              Traditional patient finance companies deny about 50% of credit applicants.
            </p>
          </div>
          <div className='landingPageBox2Selector'>
            <p>
              With our Greenlight program, you can approve up to 89% of applicants.
            </p>
          </div>
          <button className='landingPageBox2Button'>
            Lets Partner
          </button>
        </div>
      </div>
      <div className="spacingLandingPage"></div>
      {/* 3rd box starts here */}
      <div className='landingPageBox3'>
        <img src={images("./woman-poster.png")} alt="" />
        <div className="landingPageBox3Text">
          <h1>
            Our Superpower: assessing a patient’s ability to pay.
          </h1>
          <p>
            Our proprietary credit analytics engine is our secret weapon. We use it to instantly assess a patient’s ability to pay by evaluating over 200 attributes that are designed to optimize approvals and reduce risk in each healthcare segment we serve.
          </p>
        </div>
      </div>
      <div className="spacingLandingPage"></div>
    </div>
  )
}
