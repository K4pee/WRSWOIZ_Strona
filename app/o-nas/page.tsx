'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ONasPage() {
  return (
    <>
      <Navbar />
      <header className="page-header">
        <h1>O nas</h1>
      </header>
      <main className="page-content">
        <div className="container">
          <p>
            Wydziałowa Rada Samorządu Wydziału Organizacji i Zarządzania (WRS WOIZ) to organizacja studencka działająca na rzecz społeczności akademickiej naszego wydziału.
          </p>
          
          <p>
            Naszą misją jest reprezentowanie interesów studentów, organizowanie wydarzeń integracyjnych oraz wspieranie inicjatyw studenckich.
          </p>
          
          <p>
            Działamy w wielu obszarach, od organizacji imprez kulturalnych, przez pomoc w sprawach administracyjnych, aż po tworzenie przestrzeni do rozwoju i nawiązywania nowych znajomości.
          </p>
          
          <p>
            WRS istnieje od wielu lat, nieprzerwanie działając na rzecz studentów i budując społeczność naszego wydziału.
          </p>
        
          <p>
            Jesteśmy grupą zaangażowanych studentów, którzy chcą zmieniać rzeczywistość akademicką na lepsze. Dołącz do nas!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
