import {AppContext} from '../context/state';
import {useContext} from 'react'
import Link from 'next/link';
import {images} from '../lib/images';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { useRouter } from 'next/router';

function Result() {
  const {query} = useRouter();
  const {data} = useContext(AppContext);

  return (
    <Layout imageUrl={images.article1L}>
    <PageTitle text="Search Results" />
    <p>Search criteria = {query.search}</p>
    {data.cities.length > 0 && data.cities.map((city: any)=><li key={city.id}><Link href={`/cities/${city.city_name}`}>{city.city_name}</Link></li>)}
  </Layout>
  )
}

export default Result