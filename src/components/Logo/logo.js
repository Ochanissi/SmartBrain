import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.css';

const Logo = () => {
  return (
    <div className='ma4 pointer' style={{ position: 'absolute', top: 0 }}>
      <Tilt
        className='Tilt br2 shadow-2'
        options={{ max: 55 }}
        style={{ height: 100, width: 100 }}
      >
        <div className='Tilt-inner pa3'>
          <a
            href='https://github.com/Ochanissi/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              style={{ paddingTop: '5px', width: '100%', height: '100%' }}
              alt='logo'
              src={brain}
            />
          </a>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
