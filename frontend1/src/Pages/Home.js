import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    return (
        <div className="Home">
          <header className="Home-header">
            <h1>
              Join the Web3 Chinese Diaspora.
            </h1>
            <h1>
              Claim your <a style={{color: '#FFDC61', textDecoration: 'none', marginTop: '5px'}} href="reactjs.org" target="_blank">Membership NFT</a>
            </h1>
    
            <div className="Home-entry">
              <div class="inputWithIcon inputIconBg">
                <input type="text" placeholder="Email"/>
              </div>
              <btn type="submit" className="btn" onClick={() => {navigate("/name");}}>Sign Up</btn>
            </div>
    
            <h6>
              You will recieve an email when we launch. 
            </h6>
          </header>
        </div>
      );
}

export default Home;