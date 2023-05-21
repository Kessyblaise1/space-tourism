import "./Destination.css";

import Data from "../../data.json";
import { useState } from "react";
import PageDesc from "../../components/pageDescription/pageDesc";

const Destination = () => {
  const [currentDest, setCurrentDest] = useState(0);
  const { destinations } = Data;

  return (
    <div className="destination">
      <div className="destGrid">
        <div className="dest_image_container">
          <PageDesc number={'01'} text="Pick your destination"/>
          <img src={destinations[currentDest].images.webp} alt="" />
        </div>
        <div className="dest_description">
          <div className="nav_buttons">
            {destinations.map((destination, key) => (
              <button style={{ borderBottom: currentDest === key && "2px solid white" }} key={key} onClick={() => setCurrentDest(key)}>
                {destination.name}
              </button>
            ))}
          </div>
          <h1>{destinations[currentDest].name}</h1>
          <p className="dest_text">{destinations[currentDest].description}</p>
          <div className="extra_details">
            <p className="avg">
              <span>avg. distance</span>
              {destinations[currentDest].distance}
            </p>
            <p className="travel_time">
              <span>est. travel time</span>
              {destinations[currentDest].travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
