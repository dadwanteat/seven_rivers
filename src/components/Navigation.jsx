import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Seven Rivers Networks
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/businesses" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/businesses">
                  Businesses
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/endUser" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/endUser">
                  End User
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/visitingGuest" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/visitingGuest">
                  Visiting/Guest
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);