import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f4 fw6'>
        {'Give it an image and it will tell you where the faces are!'}
      </p>
      <div className='center'>
        <div
          className='form center pa4 br2 shadow-5'
          id='imagelinkform-container'
        >
          <input
            className='f4 pa2 w-70 center b--blue'
            type='text'
            onChange={onInputChange}
          />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple b--purple ml3'
            id='imagelinkform-button'
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
