import React from 'react';
import './facerecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  console.log(boxes);
  return (
    <div className='center'>
      <div className='absolute mv5'>
        <img
          id='inputimage'
          alt=''
          src={imageUrl}
          // width='700px'
          heigh='auto'
          // className='ba bw2 b--blue'
        />
        {boxes.map((box) => (
          <div
            key={`box${box.topRow}${box.rightCol}`}
            className='bounding-box'
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
