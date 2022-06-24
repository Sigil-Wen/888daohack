import { React, useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Magic } from 'magic-sdk';

function Home() {
    //Login handler

    const magic = new Magic('pk_live_093B5E835F2DBAFA');

    const handleLogin = async (e) => {
        e.preventDefault();
        const redirectURI = `${window.location.origin}/callback`; // 👈 This will be our callback URI
        if (email) {
            /* One-liner login 🤯 */
            await magic.auth.loginWithMagicLink({ email, redirectURI }); // 👈 Notice the additional parameter!
        }
    };

    let navigate = useNavigate();
    const [email, setEmail] = useState('');

    const updateEmail = (e) => {
        setEmail(e.target.value);
        console.log(email);
    };

    return (
        <div className="Home">
            <body className="Home-header">
                <h1>Join the Web3 Chinese Diaspora.</h1>
                <h1>
                    Claim your{' '}
                    <a
                        style={{
                            color: '#FFDC61',
                            textDecoration: 'none',
                            marginTop: '5px',
                        }}
                        href="reactjs.org"
                        target="_blank"
                    >
                        Membership NFT
                    </a>
                </h1>

                <div className="Home-entry">
                    <div class="inputWithIcon inputIconBg">
                        <input type="text" onChange={updateEmail} placeholder="Email" />
                    </div>
                    <btn type="buttom" onClick={handleLogin} className="btn">
                        Sign Up
                    </btn>
                </div>

                <h6>You will recieve an email when we launch.</h6>
            </body>
        </div>
    );
}

export default Home;
