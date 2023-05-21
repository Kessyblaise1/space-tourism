import PageDesc from "../../components/pageDescription/pageDesc";
import "./Crew.css";

import Data from "../../data.json";
import { useState } from "react";

const Crew = () => {
  const [crewData, setCrewData] = useState(0);
  const { crew } = Data;

  return (
    <div className="Crew">
      <div className="crew_grid">
        <div className="crew_desc_container">
          <PageDesc number={"02"} text={"Meet Your Crew"} />
          <h1>
            <span>{crew[crewData].role}</span>
            {crew[crewData].name}
          </h1>
          <div className="dest_text">{crew[crewData].bio}</div>

          <div className="pagination">
            {crew.map((item, key) => (
              <span
                key={key}
                className="nav_span"
                onClick={() => setCrewData(key)}
                style={{ backgroundColor: key === crewData && "white" }}
              ></span>
            ))}
          </div>
        </div>

        <div className="crew_member">
          <img src={crew[crewData].images.webp} alt="space exploration crew member" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
