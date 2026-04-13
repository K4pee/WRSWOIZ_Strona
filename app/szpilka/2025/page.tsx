import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getEditionImages } from '@/lib/site-content-server';
import Gallery from '@/components/Gallery';

export default function Szpilka2025() {
  const images = getEditionImages('szpilka', '2025') || ['/logo-wrs.png'];

  return (
    <>
      <Navbar />
      <header className="page-header">
        <h1>Szpilka 2025</h1>
      </header>
      <main className="page-content">
        <div className="container">
          <p>Galeria z Szpilki 2025.</p>
          <section>
            <h2>Galeria</h2>
            <div className="gallery-top">
              
              <Gallery images={images} altPrefix="Szpilka 2025" shuffle={true} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}


