import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getEditionImages } from '@/lib/site-content-server';
import Gallery from '@/components/Gallery';

export default function DW2023() {
  const images = getEditionImages('dw', '2023') || ['/logo-wrs.png', '/logo-wrs.png', '/logo-wrs.png'];

  return (
    <>
      <Navbar />
      <header className="page-header">
        <h1>Dzień Wydziału 2023</h1>
      </header>
      <main className="page-content">
        <div className="container">
          <p>Trzecia edycja pełna energii, konkursów i wspólnej zabawy.</p>

          <section>
            <h2>Galeria</h2>
            
            <div className="gallery-top">
              
              <Gallery images={images} altPrefix="DW 2023" shuffle={true} />
            </div>
          </section>

          <p className="back-link-wrap">
            <Link href="/dw">← Powrót do strony Dzień Wydziału</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}


