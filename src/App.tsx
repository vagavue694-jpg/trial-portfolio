/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-stone-900 selection:text-stone-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Tools />
        <Portfolio />
        <CTA />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
