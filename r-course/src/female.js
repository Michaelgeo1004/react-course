import React from 'react';
import gamora from '../src/images/Gamora.png'
import capMarvel from '../src/images/CM.jpg'
import thorThunder from '../src/images/Thor Thunder.jpg'
import nebula from '../src/images/Nebula.jpg'
import natasha from '../src/images/Nat.jpg'
import valkere from '../src/images/Valkeyre.jpg'
import witch from '../src/images/Witch.jpg'
import WW from '../src/images/wonder-woman.jpg'
import { useNavigate } from 'react-router-dom';

function Female() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Go back to the previous page in history
    }
    return (
        <div className='containerR'>
            <div className="backgroundImage"></div>{/* Background image container */}
            <div className='containerS'>
                <img src={gamora} alt='Gamora' />
                <img src={capMarvel} alt='Captain Marvel' />
                <img src={thorThunder} alt='Thor Love' />
                <img src={natasha} alt='Black Widow' /></div>
            <div className="back-btn">
                <span> <button onClick={goBack}>Back</button></span>
            </div>
            <div className='containerSS'>
                <img src={WW} alt='The Wonder' />
                <img src={nebula} alt='The Nebula' />
                <img src={valkere} alt='Tessa' />
                <img src={witch} alt='The Witch' /></div>
        </div>

    );
}

export default Female;
