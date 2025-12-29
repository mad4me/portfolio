import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { MediaBar } from './components/MediaBar';
import { NotFound } from './pages/NotFound';
import { Pitch } from './pages/Pitch';

function App() {
  return (
    <main className="w-screen py-4 bg-gray-950 text-gray-50 min-h-screen">
      <Header />
      <MediaBar />
      <section className="px-3 md:px-10 lg:px-20 pb-12 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pitch" element={<Pitch />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
