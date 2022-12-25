import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const [state, setState] = useState([]);
  useEffect(() => {}, []);

  return (
    <nav>
      <div className="nav-body">
        <ul className="menu-items">
          <li>
            <Link to="/">
              <p>TheBlog</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <svg
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill={props.page == "Home" ? "black" : "none"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.9976 17.36L31.9913 17.4157V17.4717C31.9913 17.9121 31.6068 18.2898 31.1579 18.2898H29.3244H28.3199L28.3244 19.2943L28.3645 28.3637C28.3645 28.3643 28.3645 28.365 28.3645 28.3657C28.3644 28.4691 28.3566 28.5821 28.3421 28.7108L28.3358 28.7664V28.8225V29.7344C28.3358 30.423 27.7688 31 27.044 31H26.1272C26.0568 31 26.0386 30.9993 26.0277 30.9984L25.9477 30.9912L25.8677 30.9968C25.8285 30.9996 25.7835 31 25.6975 31H23.8354H22.4602C21.7354 31 21.1684 30.423 21.1684 29.7344V28.375V24.75C21.1684 23.1844 19.8904 21.9375 18.3349 21.9375H14.6679C13.1124 21.9375 11.8344 23.1844 11.8344 24.75V28.375V29.7344C11.8344 30.423 11.2674 31 10.5426 31H9.16745H7.33969C7.29217 31 7.23911 30.9969 7.14761 30.9908L7.07364 30.986L6.99975 30.992C6.92402 30.9983 6.89633 31 6.87559 31H5.95884C5.23398 31 4.66698 30.423 4.66698 29.7344V23.3906L4.66705 23.3583L4.66734 23.3379C4.66737 23.3368 4.6674 23.3358 4.66743 23.335L4.67271 23.2881V23.232V19.2898V18.2898H3.67271H1.83349C1.34561 18.2898 1 17.9358 1 17.4717C1 17.2296 1.06592 17.0399 1.25518 16.8445L15.9166 4.21067L15.9425 4.18834L15.9668 4.16429C16.0409 4.0911 16.1081 4.05745 16.1784 4.03661C16.2605 4.01224 16.3661 4 16.5243 4C16.7592 4 16.9662 4.06913 17.0844 4.16242L31.7052 16.8671L31.7069 16.8686C32.0008 17.1229 32.0071 17.2755 31.9976 17.36Z"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>

              <p
                style={
                  props.page == "Home"
                    ? { fontWeight: "600" }
                    : { fontWeight: "400" }
                }
              >
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <svg
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill={props.page == "About" ? "black" : "none"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16.5"
                  cy="17.5"
                  r="15.5"
                  stroke="black"
                  stroke-width="2"
                />
                <path
                  d="M18 9.1C18 10.2594 17.1042 11.2 16 11.2C14.8958 11.2 14 10.2594 14 9.1C14 7.94062 14.8958 7 16 7C17.1042 7 18 7.94062 18 9.1ZM12 15.4C12 14.6256 12.5958 14 13.3333 14H16C16.7375 14 17.3333 14.6256 17.3333 15.4V25.2H18.6667C19.4042 25.2 20 25.8256 20 26.6C20 27.3744 19.4042 28 18.6667 28H13.3333C12.5958 28 12 27.3744 12 26.6C12 25.8256 12.5958 25.2 13.3333 25.2H14.6667V16.8H13.3333C12.5958 16.8 12 16.1744 12 15.4Z"
                  fill={props.page == "About" ? "#ebf6fc" : "black"}
                />
              </svg>

              <p
                style={
                  props.page == "About"
                    ? { fontWeight: "600" }
                    : { fontWeight: "400" }
                }
              >
                About
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
