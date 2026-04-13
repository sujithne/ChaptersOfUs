import React from 'react';
import LandingPage from './components/LandingPage';
import ChapterLayout from './components/ChapterLayout';
import MasterMoment from './components/MasterMoment';
import FinalPage from './components/FinalPage';
import OurJourney from './components/OurJourney';
import { chapters } from './data/chapters';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-romantic-cream">
      <LandingPage />
      
      <main>
        {chapters.map((chapter, index) => (
          <ChapterLayout 
            key={chapter.id} 
            chapter={chapter} 
            index={index} 
          />
        ))}
      </main>

      <OurJourney />

      <MasterMoment />

      <FinalPage />
    </div>
  );
}

export default App;
