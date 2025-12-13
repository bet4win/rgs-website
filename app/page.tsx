import Header from './components/Header';
import Hero from './components/Hero';
import Games from './components/Games';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <Games />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
