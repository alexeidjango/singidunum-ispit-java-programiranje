import { Link } from "react-router";

export const NavBar = () => (
  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid justify-content-start">
      <Link className="navbar-brand" to="/">
        2023203407
      </Link>
      <ul className="nav align-self-start d-flex">
        <li className="nav-item">
          {/*Using anchor instead of link simply as a hack to reload Cars page every*/}
          {/*time and trigger component (and hence axios) refresh.*/}
          <a
            href={"/cars"}
            className="btn btn-link nav-link text-decoration-underline"
          >
            Vozila
          </a>
        </li>
        <li className="nav-item">
          <Link
            to="/drivers"
            className="btn btn-link nav-link text-decoration-underline"
          >
            Vozači
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/travels"
            className="btn btn-link nav-link text-decoration-underline"
          >
            Putni nalozi
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
