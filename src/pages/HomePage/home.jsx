import React from 'react'
import "./home.css"

var images = require.context('../../../public/images', true)

export const Home = () => {
  return (
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
            <svg width="20" height="20" fill="none" class="arrow"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.53 4.47a.75.75 0 10-1.06 1.06l3.719 3.72H4a.75.75 0 100 1.5h10.19l-3.72 3.72a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5z" fill="currentColor"></path></svg>
            <div>
              Discover Prima
            </div>
          </div>
        </div>
      </div>
      <img className='genInfoBoxImg' src={images("./Girl-poster.png")} alt="" srcset="" />
    </div>
  )
}
