import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Heading from '../components/heading';

function Home<NextPage>() {
  return (
    <>
      <p>123</p>
      <Heading text="Find your destination" justify="right" />
    </>
  );
}

export default Home;
