import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
      <li>
        <a href="#women" className="text-sm tracking-wide uppercase text-zinc-200 hover:text-white transition">Women</a>
      </li>
      <li>
        <a href="#men" className="text-sm tracking-wide uppercase text-zinc-200 hover:text-white transition">Men</a>
      </li>
      <li>
        <a href="#accessories" className="text-sm tracking-wide uppercase text-zinc-200 hover:text-white transition">Accessories</a>
      </li>
      <li>
        <a href="#studio" className="text-sm tracking-wide uppercase text-zinc-200 hover:text-white transition">Studio</a>
      </li>
    </ul>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-600 shadow-[0_0_30px_rgba(168,85,247,0.6)]" />
              <span className="text-sm font-semibold tracking-widest uppercase">
                LULU//BOLD
              </span>
            </a>

            <nav className="hidden md:block">
              <NavLinks />
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#shop"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
              >
                <ShoppingCart size={16} />
                Shop Now
                <span className="ml-1 block h-1 w-1 rounded-full bg-fuchsia-500 group-hover:scale-125 transition"></span>
              </a>
            </div>

            <button
              aria-label="Toggle navigation"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4">
              <NavLinks />
              <a
                href="#shop"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
              >
                <ShoppingCart size={16} /> Shop Now
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
