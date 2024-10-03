import React from 'react';

const SectionThree = ({ title, boxes = [], isBoxes2 = false }) => {
  return (
    <div style={{ padding: '60px' }}>
      <h1>{title}</h1>
      <div className='boxes'>
        {boxes.map((box, index) => (
          <div className='box'
            key={index}
            style={{
              padding: '20px',
              margin:'0.5rem',
              backgroundColor: box.backgroundColor,
              color: box.color,
              borderRadius: '8px',
            }}
          >
            {!isBoxes2 && <img src={box.icon} />} 
            
            <p>{box.paragraph}</p>
            
            {isBoxes2 && <img className='animation1' src={box.icon} />} 
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
