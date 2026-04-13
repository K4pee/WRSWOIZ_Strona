'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import Schedule from '@/components/Schedule';
import Speakers from '@/components/Speakers';
import Partners from '@/components/Partners';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />
      <Schedule />
      <Speakers />
      <Partners />
      <FAQ />
      <Footer />
    </>
  );
}
