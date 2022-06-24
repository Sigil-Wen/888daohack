import { Magic } from 'magic-sdk';
import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const magic = new Magic('pk_live_093B5E835F2DBAFA');

async function Callback() {
    const [userMetadata, setUserMetadata] = useState({});
    const navigate = useNavigate();

    const handleLogout = async () => {
        await magic.user.logout();
    };

    try {
        await magic.auth.loginWithCredential();

        /* Get user metadata including email */
        const data = await magic.user.getMetadata();
        setUserMetadata(data);
    } catch {
        // Go back to main page if error
        navigate('/');
    }

    return (
        <div>
            {/* <h1>Current user: {userMetadata.email}</h1>
            <button onClick={handleLogout}>Logout</button> */}
            Hello World
        </div>
    );
}

export default Callback;
