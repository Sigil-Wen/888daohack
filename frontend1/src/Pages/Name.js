import React from "react";
import './Name.css';

function Name() {
  return (
    <div className="Name">
      <header className="Name-header">
        <div className="alignleft"><h1>What is your Chinese Name?</h1></div>
        <div className="alignright">名字?</div>
      </header>
        <footer className="Name-footer">
          <spread className="Name-spread">
            <h2>Family</h2>
            <h2>Generation</h2>
            <h2>Character</h2>
          </spread>
          <spread className="Name-spread">
            <h2>姓</h2>
            <h2>名字</h2>
            <h2>名字</h2>
          </spread>
        </footer>
    </div>
  );
}

export default Name;


// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from 'react';


// function App() {

//   return (
//     <div className="Name">
//       <header className="Name-header">
//         <h1>
//           Join the Web3 Chinese Diaspor2a.
//         </h1>
//         <h1>
//           Claim your <a style={{color: '#FFDC61', textDecoration: 'none', marginTop: '5px'}} href="reactjs.org" target="_blank">Membership NFT</a>
//         </h1>

//         <div className="Name-characters">
//           <div class="inputWithIcon inputIconBg">
//             <input type="text" placeholder="Email"/>
//           </div>
//           <btn type="submit" className="btn">Sign Up</btn>
//         </div>

//         <h6>
//           You will recieve an email when we launch. 
//         </h6>
//       </header>
//     </div>
//   );
// }

// export default App;
