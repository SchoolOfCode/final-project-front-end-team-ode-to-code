import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { images } from '../lib/images';
import styles from '../components/styles/Article.module.css';

function TopDestinations<NextPage>() {
  return (
    <>
      <Layout imageUrl={images.article1L}>
        <p>Title Component goes here</p>
      </Layout>
    </>
  );
}

export default TopDestinations;
