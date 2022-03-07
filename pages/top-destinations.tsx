import type { NextPage } from 'next';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';
import Tile from "../components/Tile"
import { topDestinations } from "../lib/topdestinations"

function TopDestinations<NextPage>() {
  return (
      <Layout imageUrl={images.article1L}>
        <PageTitle text="Top 2022 Destinations" />
        {topDestinations.map((each)=>(<Tile src={each.src} destination={each.destination} text={each.text} key={each.destination} />))}
      </Layout>
      
  );
}

export default TopDestinations;
