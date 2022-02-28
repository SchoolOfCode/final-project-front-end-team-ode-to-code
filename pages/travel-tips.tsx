import type { NextPage } from 'next';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';
import styles from '../components/styles/Article.module.css';

function TravelTips<NextPage>() {
  return (
    <>
      <Layout imageUrl={images.article2L}>
        <PageTitle text="Travel Tips" />
      </Layout>
    </>
  );
}

export default TravelTips;
