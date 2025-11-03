import React from 'react';
import { User, Star } from 'lucide-react';

const ProfileShowcase = ({ accent = '#F97316' }) => {
  return (
    <section id="profile" className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-center gap-4">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-white"
              style={{ background: `linear-gradient(135deg, ${accent}, #ef4444)` }}
            >
              <User className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Nova Atelier</h3>
              <p className="text-sm text-white/60">Art numérique • Collage • Motion</p>
            </div>
            <div className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80">
              <Star className="h-4 w-4 text-yellow-400" /> 12.3k followers
            </div>
          </div>

          <p className="mt-5 text-white/80">
            Entre textures et lumières, j'explore des paysages mentaux d'inspiration rétro-futuriste. Ici, je partage mes séries, process et coulisses.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Rétro-futurisme', 'Typographie', 'GLSL', 'Generative Art'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">Dernier billet</h4>
          <div className="mt-3 rounded-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1543332164-6e82f355bad8?q=80&w=1200&auto=format&fit=crop"
              alt="Dernier billet"
              className="h-40 w-full rounded-t-2xl object-cover"
            />
            <div className="space-y-2 rounded-b-2xl bg-black/40 p-4">
              <h5 className="font-medium text-white">Série: Tuiles inclinées chroma</h5>
              <p className="text-sm text-white/70">Recherche visuelle autour des rythmes géométriques et lumières rouges-oranges.</p>
              <button
                className="w-full rounded-xl px-4 py-2 font-medium text-black"
                style={{ backgroundColor: accent }}
              >
                Lire le billet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileShowcase;
