import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import WaveImage from '../components/WaveImage';
import Glasssection from '../components/Glasssection';
import SearchSection from '../components/SearchSection';
import {images} from '../lib/images'

function Home<NextPage>() {
  return (
    <>
      <WaveImage imageUrl={images.homepage}/>
      <SearchSection />
      <Glasssection />
    </>
  );
}

export default Home;
