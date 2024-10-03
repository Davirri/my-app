import React from 'react';

function SectionHero({ backgroundColor, title, paragraph, imageUrl, icon, color,icon2 }) {
  return (
    <div style={{ backgroundColor, color }} className="section-hero">
      <div className="hero-content">
        <div className="hero-text">
          <img src={icon} alt={title} />
          <h2>{title}</h2>
          <p>{paragraph}</p>
          <img src={icon2} alt={title} />

        </div>
        <div >
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </div>
  );
}

export default SectionHero;
