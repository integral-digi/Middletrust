"use client";
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Biz from '@/components/Biz';
import HowItWorks from '@/components/Works';
import Brands from '@/components/Brands';
import CTA from '@/components/CTA';
import DevSection from '@/components/DevSection';
import OurPromise from '@/components/OurPromise';
import Transact from '@/components/Transact';
import Footer from '@/components/Footer';
import Announce from '@/components/AnnounceBar';
import MobileNav from '@/components/MobileNav';

const Home = () => {
  return (
    <>
      {/* Body begin below */}
      <main className="w-full h-full font-primary bg-white dark:bg-[#1E1A1A]">
        <Announce />
        <MobileNav />
        <NavBar />
        <Hero />
        <Biz />
        <HowItWorks />
        <OurPromise />
        <Transact />
        <Brands />
        <DevSection />
        <CTA />
        <Footer  />
      </main>
    </>
  );
};

export default Home;