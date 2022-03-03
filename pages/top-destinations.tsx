import type { NextPage } from 'next';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';

function TopDestinations<NextPage>() {
  return (
      <Layout imageUrl={images.article1L}>
        <PageTitle text="Top 2022 Destinations" />
      </Layout>
  );
}

export default TopDestinations;
