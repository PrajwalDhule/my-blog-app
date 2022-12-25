import React from "react";
import Navbar from "./Navbar";
import "../styles/About.css";
import pfp from "../images/dummy.jpg";

const About = () => {
  return (
    <div className="about-body">
      <Navbar page="About" />
      <main>
        <section>
          <div></div>
          <div>
            <p>Prajwal Dhule</p>
            <p>Currently pursuing Computer Engineering degree</p>
            <p>
              <a
                href="https://www.linkedin.com/in/prajwal-dhule/"
                target="_blank"
              >
                Linkedin
              </a>
              <a href="https://github.com/PrajwalDhule" target="_blank">
                Github
              </a>
            </p>
          </div>
        </section>
        <div className="line"></div>
        <section>
          <div className="top">
            <div>
              <p className="topic">Projects:</p>
              <ul>
                <li>
                  <span>Techit</span>
                  <span>
                    <a
                      href="https://github.com/PrajwalDhule/MERN-Techit"
                      target="_blank"
                    >
                      Github
                    </a>
                  </span>
                </li>
                <li>
                  <span>Helpalert</span>
                  <span>
                    <a
                      href="https://github.com/PrajwalDhule/K3P-website"
                      target="_blank"
                    >
                      Github
                    </a>
                  </span>
                </li>
                <li>
                  <span>Space Tourism</span>
                  <span>
                    <a
                      href="https://space-tourism-prajwal.netlify.app/"
                      target="_blank"
                    >
                      Website
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <p className="topic">Skills:</p>
              <div>
                <span>Java</span>
                <span>Javascript</span>
                <span>React js</span>
                <span>MongoDB</span>
                <span>Node js</span>
                <span>Express js</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Figma</span>
              </div>
            </div>
          </div>
          <div className="bottom">
            <p className="topic">Achievements:</p>
            <p>Secured 1st place in Codeissance Hackathon 2022.</p>
            <p>Secured 1st place in TSEC Codestorm’s Hackathon ’21.</p>
            <p>Secured 4th place in Mockupp - a Ui ideathon </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
