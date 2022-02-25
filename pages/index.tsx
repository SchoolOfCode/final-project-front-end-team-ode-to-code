import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import WaveImage from '../components/WaveImage';
import Glasssection from '../components/Glasssection';
import SearchSection from '../components/SearchSection';

function Home<NextPage>() {
  return (
    <>
      <WaveImage />
      <SearchSection />
      <Glasssection />
    </>
  );
}

export default Home;
