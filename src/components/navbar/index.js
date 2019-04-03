import React, { Component } from "react";
import { Link } from "react-router-dom";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/products" className="navbar-brand">
          <img
            src={require("../../assets/images/cafe.png")}
            style={{ width: 50 }}
          />
          <span> Coffee Shop</span>
        </Link>

        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Ayman Alshanqiti
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#" style={{ color: "gray" }}>
                  <FontAwesomeIcon icon={faUser} style={{ color: "gray" }} /> My
                  Profile
                </a>
                <a className="dropdown-item" href="#" style={{ color: "gray" }}>
                  <FontAwesomeIcon
                    icon={faPowerOff}
                    style={{ color: "gray" }}
                  />{" "}
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
