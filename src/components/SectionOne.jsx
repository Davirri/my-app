import React from 'react';

function SectionOne({ backgroundColor, title, paragraph, imageUrl, icon,color }) {
  return (
    <div style={{ backgroundColor,color }} className="up">
      <div className="section-one-content">
        <div className="section-one-text">
        <img src={icon} alt={title} />
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
        <div>
          <img src={imageUrl} alt={title} /></div>
      </div>
    </div>
  );
}

export default SectionOne;
