
import "./HeroSection.css";
import image from "../../assets/image.jpeg"
import { HiArrowLongRight } from "react-icons/hi2";

function HeroSection()
{
    return(
<section className="hero-section">
      <div className="container">
        <div className="hero-grid">

          {/* Left Content */}
          <div className="hero-content">
            <h1>
              Explore the World,
              <br />
              One Country at a Time.
            </h1>

            <p>
              Discover the history, culture, and beauty of every nation.
              Sort, search and filter through countries to find the details
              you need.
            </p>

            <button className="hero-btn">
            <span>Start Exploring</span>
            <HiArrowLongRight className="arrow-icon" />
            </button>
          </div>

          {/* Right Image */}
          <div className="hero-image">
            <img
              src={image}
              alt="World"
            />
          </div>

        </div>
      </div>
    </section>
  
    );
}

export default HeroSection