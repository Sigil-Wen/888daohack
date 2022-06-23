import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

import { Magic } from 'magic-sdk';
import { ethers } from 'ethers';
const magic = new Magic(process.env.MAGIC_LINK_KEY);


function App() {
  
  useEffect(() => {
    printAddress();
  });

  async function printAddress() {
    const provider = new ethers.providers.Web3Provider(magic.rpcProvider);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    console.log(address)
    //todo: add functionality here to add address to db
    return address;
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Join the Web3 Chinese Diaspora.
        </h1>
        <h1>
          Claim your <a style={{color: 'yellow', textDecoration: 'none'}} href="reactjs.org" target="_blank">Membership NFT</a>
        </h1>
        {/* <form class="form-inline"> */}
          <div class="form-group mx-sm-3 mb-2">
            <input type="email" class="form-control" id="email" placeholder="Email"/>
          </div>
          <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
        {/* </form> */}
        <h6>
          You will recieve an email when we launch. 
        </h6>
      </header>
    </div>
  );
}

export default App;
