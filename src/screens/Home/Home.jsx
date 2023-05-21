import "./Home.css";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div className="grid">
        <div className="text_container">
          <p className="subtitle">SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p className="description">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>
        <div className="explore_container">
          <div className="ripple">
            <Link to={'/destination'} className="explore_button">Explore</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
