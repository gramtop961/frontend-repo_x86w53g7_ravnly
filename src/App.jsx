import React, { useState } from 'react';
import Hero from './components/Hero.jsx';
import ProfileShowcase from './components/ProfileShowcase.jsx';
import GalleryGrid from './components/GalleryGrid.jsx';
import CustomizerPanel from './components/CustomizerPanel.jsx';

function App() {
  const [accent, setAccent] = useState('#F97316'); // orange par défaut

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <Hero accent={accent} />
      <ProfileShowcase accent={accent} />
      <GalleryGrid accent={accent} />
      <CustomizerPanel accent={accent} onChange={setAccent} />
      <footer className="mx-auto max-w-7xl px-6 pb-10 text-center text-sm text-white/60">
        Fait pour les artistes — créez, écrivez et partagez votre art.
      </footer>
    </div>
  );
}

export default App;
