import { Link } from "react-router";

export const NavBar = () => (
  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid justify-content-start">
      <a className="navbar-brand" href="#">
        Cars, Drivers and Travels - 2023203407
      </a>
      <ul className="nav align-self-start d-flex">
        <li className="nav-item">
          <Link to={"/cars"} className="btn btn-link nav-link">
            Cars
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/drivers" className="btn btn-link nav-link">
            Drivers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/travels" className="btn btn-link nav-link">
            Travels
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
