import React, { useState } from 'react';
import { Palette, Image, Settings } from 'lucide-react';

const swatches = [
  { name: 'Orange', value: '#F97316' },
  { name: 'Rouge', value: '#EF4444' },
  { name: 'Rose', value: '#EC4899' },
  { name: 'Violet', value: '#8B5CF6' },
  { name: 'Cyan', value: '#06B6D4' },
];

const CustomizerPanel = ({ accent, onChange }) => {
  const [layout, setLayout] = useState('masonry');

  return (
    <section id="create" className="mx-auto max-w-7xl px-6 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: accent }}>
            <Settings className="h-5 w-5 text-black" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Personnaliser votre page</h3>
            <p className="text-sm text-white/70">Aperçu rapide des options de thème et de mise en page</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">Couleur d'accent</h4>
            <div className="flex flex-wrap gap-2">
              {swatches.map((s) => (
                <button
                  key={s.value}
                  onClick={() => onChange?.(s.value)}
                  className="h-9 w-9 rounded-full ring-2 ring-offset-0 transition-transform hover:scale-105"
                  style={{ backgroundColor: s.value, boxShadow: accent === s.value ? '0 0 0 3px rgba(255,255,255,0.25) inset' : 'none' }}
                  aria-label={s.name}
                />
              ))}
            </div>

            <h4 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-white/70">Mise en page</h4>
            <div className="flex gap-2">
              {['masonry', 'grid', 'carousel'].map((m) => (
                <button
                  key={m}
                  onClick={() => setLayout(m)}
                  className={`rounded-xl border px-3 py-1 text-sm capitalize text-white/80 ${layout === m ? 'border-white/30 bg-white/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="mb-2 flex items-center gap-2 text-white/80">
              <Palette className="h-4 w-4" /> Aperçu
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-video rounded-lg bg-white/5">
                  <div className="flex h-full items-center justify-center text-white/40">
                    <Image className="h-6 w-6" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-xs text-white/50">Layout: {layout}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizerPanel;
