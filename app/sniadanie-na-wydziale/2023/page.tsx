import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getEditionImages } from '@/lib/site-content-server';
import Gallery from '@/components/Gallery';

export default function Sniadanie2023() {
  const images = getEditionImages('sniadanie-na-wydziale', '2023') || ['/logo-wrs.png', '/logo-wrs.png', '/logo-wrs.png', '/logo-wrs.png'];

  return (
    <>
      <Navbar />
      <header className="page-header">
        <h1>Ĺšniadanie na Wydziale 2023</h1>
      </header>
      <main className="page-content">
        <div className="container">
          <p>Galeria ze Ĺšniadania na Wydziale 2023.</p>

          <section>
            <h2>Galeria</h2>
            <div className="gallery-top">
              
              <Gallery images={images} altPrefix="Ĺšniadanie 2023" shuffle={true} />
            </div>
          </section>

          <p className="back-link-wrap">
            <Link href="/sniadanie-na-wydziale">â† PowrĂłt do strony Ĺšniadanie na Wydziale</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

