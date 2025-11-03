import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
];

const GalleryGrid = ({ accent = '#F97316' }) => {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">Tendances de la communauté</h3>
          <p className="text-white/60">Pièces récentes aimées par les curateurs</p>
        </div>
        <div className="hidden gap-2 md:flex">
          {['Tous', '3D', 'Affiche', 'Typo', 'Motion'].map((f) => (
            <button
              key={f}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 hover:bg-white/10"
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/10">
            <img src={src} alt="oeuvre" className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
              En vedette
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;
