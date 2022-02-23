import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Glasscard from '../components/Glasscard'

function Home<NextPage>() {
  return (
    <>
      <p>123</p>
      <Glasscard text="Top 2022 Destinations" imageurl="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80"/>
    < Glasscard text= "Visit Paris" imageurl= "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"/>
    < Glasscard text= "Visit Paris" imageurl= "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"/>
    </>
  );
}

export default Home;
