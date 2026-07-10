import "./Header.css"
import { NavLink } from "react-router-dom";

function Header()
{
    return(
        <header>
           <div className="container">
           < div className="grid  navbar-grid">
             <div className="logo">
                <NavLink to="home">
                <h2>WorldAtlas</h2>
                </NavLink>
             </div>
              <nav>
                <ul>
                    <li> <NavLink to="home">Home</NavLink></li>
                    <li><NavLink to="country">Country</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                    <li></li>
                </ul>
              </nav>
           </div>
           </div>

        </header>
    );
}
export default Header