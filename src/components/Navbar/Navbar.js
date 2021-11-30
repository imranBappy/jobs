/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAuthAction, logoutAction } from "../../redux/actions/authAction";
import styles from "../../styles/Home.module.css";
const Navbar = (props) => {
  useEffect(() => props.getAuthAction(), []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Student
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${styles.nav__left}`}
            id="navbarScroll"
          >
            <ul
              className={`navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ${styles.m__r0}`}
            >
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>

              {!!props.user ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/earn">
                      Earn
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={props.logoutAction}
                      className="btn btn-secondary "
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <br />
    </div>
  );
};
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps, { getAuthAction, logoutAction })(
  Navbar
);
