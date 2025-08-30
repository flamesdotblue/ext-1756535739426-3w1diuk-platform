import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 'p1',
    title: 'AeroWeave Jacket',
    tag: 'Windproof • Ultra-light',
    price: '$198',
    gradient: 'from-fuchsia-600 via-purple-700 to-indigo-800',
  },
  {
    id: 'p2',
    title: 'Pulse Leggings',
    tag: 'Seamless • 4-Way Stretch',
    price: '$118',
    gradient: 'from-indigo-700 via-slate-800 to-black',
  },
  {
    id: 'p3',
    title: 'Flux Tee',
    tag: 'Cooling • Fast-dry',
    price: '$68',
    gradient: 'from-zinc-900 via-purple-800 to-fuchsia-700',
  },
  {
    id: 'p4',
    title: 'Torque Shorts',
    tag: 'Mesh • Breathable',
    price: '$78',
    gradient: 'from-slate-900 via-indigo-800 to-purple-700',
  },
  {
    id: 'p5',
    title: 'Gravitas Bra',
    tag: 'Support • Sculpt',
    price: '$88',
    gradient: 'from-purple-900 via-fuchsia-700 to-pink-600',
  },
  {
    id: 'p6',
    title: 'Vector Crew',
    tag: 'Thermal • SoftTouch',
    price: '$98',
    gradient: 'from-black via-zinc-800 to-indigo-700',
  },
];

function ProductCard({ item, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: idx * 0.05, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-3"
    >
      <div className={`relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-br ${item.gradient}`}>
        <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen" style={{ background: 'radial-gradient(120px 120px at 20% 30%, rgba(255,255,255,0.25), transparent), radial-gradient(160px 160px at 80% 70%, rgba(168,85,247,0.35), transparent)' }} />
        <motion.div
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl"
        />
        <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-widest text-zinc-200">
          <Star size={12} className="text-fuchsia-400" /> Featured
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-xs text-zinc-400">{item.tag}</p>
        </div>
        <div className="text-sm font-medium text-zinc-200">{item.price}</div>
      </div>

      <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10">
        <ShoppingCart size={16} /> Add to bag
      </button>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="shop" className="relative z-10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Engineered for intensity
            </h2>
            <p className="mt-2 max-w-xl text-zinc-400">
              Materials tuned for movement. Pieces that hold up when everything else falls back.
            </p>
          </div>
          <a href="#tech" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:border-white/20 hover:bg-white/10">
            See the science
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.id} item={p} idx={i} />
          ))}
        </div>

        <div id="tech" className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-zinc-300">
                Fabric Lab
              </div>
              <h3 className="mt-4 text-2xl font-bold">Tech that keeps up</h3>
              <p className="mt-2 text-zinc-400">
                Our fibers are knit for breathability and recovery, treated for moisture management, and cut for unrestricted motion. The result? Gear that never blinks.
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" /> 4-way stretch
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" /> Sweat-wicking
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" /> Quick-dry
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" /> Anti-chafe seams
                </li>
              </ul>
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-700/40 via-purple-700/40 to-indigo-700/40 p-0 md:h-full">
              <div className="absolute inset-0" style={{ background: 'radial-gradient(200px 200px at 20% 20%, rgba(255,255,255,0.1), transparent), radial-gradient(300px 300px at 80% 80%, rgba(168,85,247,0.2), transparent)' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-600 blur-2xl opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
