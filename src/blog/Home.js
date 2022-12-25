import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "../styles/home.css";

const Home = (props) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios({
      url: "https://dummyapi.io/data/v1/post",
      method: "GET",
      headers: {
        "app-id": "63a710a04586090be53408e8",
      },
    })
      .then((res) => {
        setLoading(false);
        setState(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="home-body">
      <Navbar page="Home" />
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <main>
          {state?.data?.map((post) => {
            return (
              <>
                <div className="post">
                  <div className="owner">
                    <div className="pfp-image">
                      <img src={post.owner.picture} alt="" />
                    </div>
                    <p>
                      {post.owner.title +
                        ". " +
                        post.owner.firstName +
                        " " +
                        post.owner.lastName}
                    </p>
                  </div>
                  <div className="image-container">
                    <img src={post.image} />
                  </div>
                  <div className="bottom">
                    <div>
                      <svg
                        width="62"
                        height="54"
                        viewBox="0 0 62 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.76406 31.2724L27.6457 51.7009C28.5539 52.5485 29.7527 53.0208 31 53.0208C32.2473 53.0208 33.4461 52.5485 34.3543 51.7009L56.2359 31.2724C59.9172 27.8454 62 23.038 62 18.0126V17.3102C62 8.84579 55.8848 1.6286 47.5414 0.236024C42.0195 -0.684288 36.4008 1.12001 32.4531 5.06766L31 6.52079L29.5469 5.06766C25.5992 1.12001 19.9805 -0.684288 14.4586 0.236024C6.11523 1.6286 0 8.84579 0 17.3102V18.0126C0 23.038 2.08281 27.8454 5.76406 31.2724Z"
                          fill="#FF3636"
                        />
                      </svg>

                      {post.likes}
                    </div>
                    <div>
                      <Link to={`/post/${post.id}`}>
                        <p>More info</p>
                        <svg
                          width="10"
                          height="17"
                          viewBox="0 0 10 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L8.23818 8.10893C8.6506 8.51398 8.63469 9.18332 8.20349 9.56831L1 16"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </main>
      )}
    </div>
  );
};

export default Home;
