import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hItYec195M0PYk2X/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-zinc-200">
            New Drop
            <span className="h-1 w-1 rounded-full bg-fuchsia-500" />
            A/W Tech Capsule
          </div>
          <h1 className="mt-6 bg-gradient-to-br from-white via-zinc-200 to-fuchsia-300 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Move Relentless.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
            Performance essentials with a fearless edge. Precision-crafted fabrics, bold silhouettes, engineered to go harder.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold shadow-[0_10px_40px_rgba(168,85,247,0.45)] transition hover:brightness-110"
            >
              Shop Collection
            </a>
            <a
              href="#tech"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/25 hover:bg-white/10"
            >
              Explore Tech
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
