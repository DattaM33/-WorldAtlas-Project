import { NavLink ,useRouteError } from "react-router-dom";
import "./Error.css";

function Error() {

const error=useRouteError();
console.log(error);

  return (
    <div className="error-container">
      <div className="error-card">
        <h1>⚠️ Oops!</h1>
        <h2>Something went wrong</h2>
        {error && <p> {error.data}</p>}
        <p>
          We couldn't process your request.
          <br />
          Please try again later.
        </p>

        <button onClick={() => window.location.reload()}>
          🔄 Refresh Page
        </button>
        <NavLink to="about"> <button>Home</button> </NavLink> 
      </div>
    </div>
  );
}

export default Error;