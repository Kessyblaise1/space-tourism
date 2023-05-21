import "./Navbar.css"
import { images } from "../../Images";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="left_pane">
        <span></span>
        <img src={images.logo} alt="site logo" />
      </div>
      <div className="right_pane">
        <ul>
          <li><NavLink to={'/'} ><span>00</span> Home</NavLink></li>
          <li><NavLink to={'/destination'} ><span>01</span> Destination</NavLink></li>
          <li><NavLink to={'/crew'} ><span>02</span> Crew</NavLink></li>
          <li><NavLink to={'/technology'} ><span>03</span> Technology</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
