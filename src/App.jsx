import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
}
