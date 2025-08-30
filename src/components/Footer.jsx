import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-600" />
              <span className="text-sm font-semibold tracking-widest uppercase">LULU//BOLD</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-zinc-400">
              Elevated performance wear with a fearless aesthetic. Designed for those who move with intent.
            </p>
            <div className="mt-4 flex items-center gap-4 text-zinc-300">
              <a aria-label="Instagram" href="#" className="hover:text-white"><Instagram size={18} /></a>
              <a aria-label="Twitter" href="#" className="hover:text-white"><Twitter size={18} /></a>
              <a aria-label="YouTube" href="#" className="hover:text-white"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li><a href="#women" className="hover:text-white">Women</a></li>
              <li><a href="#men" className="hover:text-white">Men</a></li>
              <li><a href="#accessories" className="hover:text-white">Accessories</a></li>
              <li><a href="#studio" className="hover:text-white">Studio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">Support</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Fit Guide</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} LULU//BOLD. Concept experience.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-300">Privacy</a>
            <a href="#" className="hover:text-zinc-300">Terms</a>
            <a href="#" className="hover:text-zinc-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
