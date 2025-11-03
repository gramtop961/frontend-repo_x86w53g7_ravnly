import React from 'react';
import Spline from '@splinetool/react-spline';
import { Star, Palette } from 'lucide-react';

const Hero = ({ accent = '#F97316' }) => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-b-3xl border-b border-white/10">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_70%),linear-gradient(to_top,rgba(0,0,0,0.65),transparent_40%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 backdrop-blur">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-xs/5 text-white/80">Plateforme créative pour artistes</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Montrez votre art. Construisez votre univers.
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Un réseau social moderne où chaque artiste crée une page profil unique, publie des billets de blog visuels et développe sa communauté.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#create"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-black"
              style={{ backgroundColor: accent }}
            >
              <Palette className="h-5 w-5" /> Personnaliser ma page
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur hover:bg-white/10"
            >
              Explorer les artistes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
