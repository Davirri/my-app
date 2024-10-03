import React, { useState, useEffect } from 'react';
import SectionOne from './components/SectionOne';
import SectionOneReverse from './components/SectionOneReverse';
import SectionThree from './components/SectionThree';
import SectionHero from './components/SectionHero';

function App() {
  const [sectionOneData, setSectionOneData] = useState([]);
  const [sectionThreeData, setSectionThreeData] = useState({ boxes1: [], boxes2: [] });
  const [sectionHeroData, setSectionHeroData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const VITE_AMR = import.meta.env

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sectionOneRes, sectionThreeRes, sectionHeroRes] = await Promise.all([
          fetch(`${VITE_AMR.VITE_API_URL}/section-one`),
          fetch(`${VITE_AMR.VITE_API_URL}/section-three`),
          fetch(`${VITE_AMR.VITE_API_URL}/section-hero`),
        ]);

        if (!sectionOneRes.ok || !sectionThreeRes.ok || !sectionHeroRes.ok) {
          throw new Error('Error del servidor');
        }

        const [sectionOneData, sectionThreeData, sectionHeroData] = await Promise.all([
          sectionOneRes.json(),
          sectionThreeRes.json(),
          sectionHeroRes.json(),
        ]);

        setSectionOneData(sectionOneData);
        setSectionThreeData(sectionThreeData);
        setSectionHeroData(sectionHeroData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <SectionHero
        backgroundColor={sectionHeroData.backgroundColor}
        color={sectionHeroData.color}
        title={sectionHeroData.title}
        paragraph={sectionHeroData.paragraph}
        imageUrl={sectionHeroData.imageUrl}
        icon={sectionHeroData.icon}
        icon2={sectionHeroData.icon2}
      />

      <div>
        {sectionOneData.slice(0, 4).map((section, index) => {
          const isReverse = index % 2 !== 0;
          const SectionComponent = isReverse ? SectionOne : SectionOneReverse;

          return (
            <SectionComponent
              key={index}
              backgroundColor={section.backgroundColor}
              color={section.color}
              title={section.title}
              paragraph={section.paragraph}
              imageUrl={section.imageUrl}
              icon={section.icon}
            />
          );
        })}
      </div>

      <div style={{ backgroundColor: '#f2f2f2' }}>
        <SectionThree boxes={sectionThreeData.boxes1} isBoxes2={false} />
      </div>

      <div>
        <SectionThree title="Praise for Triage 1" boxes={sectionThreeData.boxes2} isBoxes2={true} />
      </div>
    </div>
  );
}

export default App;
