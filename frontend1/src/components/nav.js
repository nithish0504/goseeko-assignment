function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light " id="mynav">
      <a className="navbar-brand" href="#">
        <img
          src="/docs/4.6/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        ></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Engineering
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Course Material
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" tabindex="-1">
              Upskill
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" tabindex="-1">
              Books
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" tabindex="-1">
              Universities
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
