import { Link } from "react-router-dom";

function About() {
  return (
    <div className="page">
      <h1>About</h1>
      <p>This application is built to understand React Router concepts.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default About;
