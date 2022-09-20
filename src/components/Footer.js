import React from 'react';
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="">
        <ul>
          <li className='icon'>
            <a href="https://github.com/amccorkl" target="_blank" rel="noreferrer noopener">Github Repository
              
            </a>
          </li>

          <li className='icon'>
            <a href="https://www.linkedin.com/in/annelinger" target="_blank" rel="noreferrer noopener">LinkedIn
            
            </a>
          </li>
          
          <li className='icon'>
            <a href="mailto:annefmccorkle@gmail.com">Email
            
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