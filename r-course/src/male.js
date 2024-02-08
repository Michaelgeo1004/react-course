import React from 'react';
import IM from '../src/images/IM.jpeg'
import Thor from '../src/images/Thor.jpg'
import Thanos from '../src/images/Thanos.jpg'
import Hulk from '../src/images/Hulk.jpg'
import Loki from '../src/images/LOKI.jpg'
import Spidey from '../src/images/Spidey.jpg'
import Cap from '../src/images/Cap America.jpg'
import Dr from '../src/images/Dr.Str.webp'
import { useNavigate } from 'react-router-dom';

function Male() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page in history
  }

  return (
    <div className='containerR'>
      <div className="backgroundImage"></div>{/* Background image container */}
      <div className='containerS'>
        <img src={Spidey} alt='SM' />
        <img src={IM} alt='IM' />
        <img src={Thor} alt='Thor' />
        <img src={Thanos} alt='Thanos' />
      </div>
      <div className="back-btn">
        <span> <button onClick={goBack}>Back</button></span>
      </div>
      <div className='containerSS'>
        <img src={Loki} alt='Loki' />
        <img src={Hulk} alt='Hulk' />
        <img src={Dr} alt='Dr' />
        <img src={Cap} alt='CA' />
      </div>
    </div>
  );
}
export default Male;