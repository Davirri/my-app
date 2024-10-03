import React from 'react';

function SectionOneReverse({ backgroundColor, title, paragraph, imageUrl, icon,color }) {
  return (
    <div style={{ backgroundColor,color }} className="section">
      <div className="section-one-reverse-content">
        <div className="section-one-reverse-text">
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

export default SectionOneReverse;
