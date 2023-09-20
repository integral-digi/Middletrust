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
import Head from 'next/head';
import Announce from '@/components/AnnounceBar';
import MobileNav from '@/components/MobileNav';

const Home = () => {
  return (
    <>
      <Head>
        {/*Head Supposedly goes here */}
      </Head>
      {/* Body begin below */}
      <body className="block w-full font-primary overflow-x-hidden mx-auto bg-white dark:bg-[#1E1A1A] lg:mx-auto lg:overflow-x-hidden">
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
      </body>
    </>
  );
};

export default Home;