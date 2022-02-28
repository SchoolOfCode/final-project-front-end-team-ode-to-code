import type { NextPage } from 'next';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

import { images } from '../lib/images';
import styles from '../components/styles/Article.module.css';

function FeelingHot<NextPage>() {
  return (
    <>
      <Layout imageUrl={images.article3L}>
        <PageTitle text="Where's hot now?" />
      </Layout>
    </>
  );
}

export default FeelingHot;
