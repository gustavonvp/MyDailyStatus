import React from 'react';
import {FaLinkedinIn, FaGithubAlt, FaFacebook} from 'react-icons/fa'


const footer = () =>{
    return (
        <footer className="footer">
        <div className="footer-container">
          <div className="social-icons">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gustavo-nunes-villela-de-paula-b36ab3150/"
            >
              <FaLinkedinIn color="#961D66" size={26} />
            </a>
    
            <a target="_blank" href="https://github.com/gustavonvp">
              <FaGithubAlt color="#961D66" size={26} />
            </a>
    
            <a target="_blank" href="https://www.facebook.com/gustavo.nunesvillela">
              <FaFacebook color="#961D66" size={26} />
            </a>
          </div>
    
          <div className="devpleno">
            <a target="_blank" href="https://devpleno.com/">
              <img src="/devPleno.png" alt="Dev Pleno" />
            </a>
          </div>
        </div>
      </footer>
    )
}


export default footer;