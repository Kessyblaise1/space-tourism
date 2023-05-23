import React from 'react';
import PageDesc from '../../components/pageDescription/pageDesc'
import './Technology.css'

import Data from '../../data.json'

const Technology = () => {
  const { technology } = Data

  return (
    <div className='tech'>
      <div className="techGrid">
        <PageDesc number={'03'} text="space launch 101"/>
          <div className="navigation">
            <span className='active'>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="item_details">
            <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
          </div>
          <div className="tech_image">
            <img src="./public/assets/technology/image-launch-vehicle-portrait.jpg" alt="" />
          </div>
      </div>
    </div>
  );
}

export default Technology;
