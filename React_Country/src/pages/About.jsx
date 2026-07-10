import "./About.css";
import countryFacts from "../api/countrydata.json"
function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-title">
          Here are the Interesting Facts
          <br />
          we're proud of
        </h2>

        <div className="facts-grid">
          {countryFacts.map((item, index) => (
            <div className="fact-card" key={index}>
              <h3>{item.country}</h3>

              <p>
                <span>Capital:</span> {item.capital}
              </p>

              <p>
                <span>Population:</span> {item.population}
              </p>

              <p>
                <span>Interesting Fact:</span> {item.interestingFact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;