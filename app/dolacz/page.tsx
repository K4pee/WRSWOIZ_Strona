'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DolaczPage() {
  return (
    <>
      <Navbar />
      <header className="page-header">
        <h1>Dołącz do nas</h1>
      </header>
      <main className="page-content">
        <div className="container">
          <p>
            Chcesz działać, poznawać nowych ludzi i rozwijać się? Dołącz do Wydziałowej Rady Samorządu!
          </p>
          
          <h2>Dlaczego warto?</h2>
          <ul style={{ listStyle: 'disc', marginLeft: '30px', marginBottom: '20px' }}>
            <li>Zdobędziesz doświadczenie w organizacji wydarzeń</li>
            <li>Poznasz wspaniałych ludzi</li>
            <li>Rozwiniesz swoje umiejętności miękkie</li>
            <li>Będziesz mieć realny wpływ na życie wydziału</li>
            <li>Dobrze się bawisz przy tym wszystkim!</li>
          </ul>
          
          <h2>Jak dołączyć?</h2>
          <p>
            Rekrutacja do WRS odbywa się cyklicznie. Śledź nasze media społecznościowe, aby nie przegapić ogłoszenia!
          </p>
          
          <p>
            Możesz też napisać do nas bezpośrednio na adres e-mail wrs.woiz@samorzad.p.lodz.pl, skontakować się z nami poprzez social media lub odwiedzić nas w biurze WRS.
          </p>
          
          <h2>Kontakt</h2>
          <p>📧 Email: wrs.woiz@samorzad.p.lodz.pl</p>
          <p>📍 Biuro: B9 (Lodex), pokój 333</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
