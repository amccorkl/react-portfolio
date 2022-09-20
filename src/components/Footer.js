import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// import "../App.css";
// import "../index.css";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="">
        <ul>
          <li className='icon'>
            <a href="https://github.com/amccorkl" target="_blank" rel="noreferrer noopener">Github Repository
              {/* <FontAwesomeIcon={faGithub} /> */}
            </a>
          </li>

          <li className='icon'>
            <a href="https://www.linkedin.com/in/annelinger" target="_blank" rel="noreferrer noopener">LinkedIn
            {/* <FontAwesomIcon icon={faLinkedin} />*/}
            </a>
          </li>
          
          <li className='icon'>
            <a href="mailto:annefmccorkle@gmail.com">Email
            {/* <FontAwesomeIcon icon={faEnvelope} />*/}
            </a>
          </li>
        </ul>
        
        <p className='copyright'>
        &copy; 2022 by Anne Linger
        </p>
      </footer>

    </div>
  );
};

export default Footer;