import type { NextPage } from 'next';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';
import Head from 'next/head';
import ContentTile from '../components/ContentTile';
import { hotCountries } from '../lib/hotcountries';

function FeelingHot<NextPage>(): JSX.Element {
  return (
    <>
      <Head>
        <title>beyonderbound | Where's hot now?</title>
      </Head>
      <Layout imageUrl={images.article3L}>
        <PageTitle text="Where's hot now?" />
        {hotCountries.map((each) => (
          <ContentTile
            src={each.src}
            destination={each.destination}
            text={each.text}
            key={each.destination}
          />
        ))}
      </Layout>
    </>
  );
}

export default FeelingHot;
