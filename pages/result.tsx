import {AppContext} from '../context/state';
import {useContext} from 'react'
import Link from 'next/link';
import {images} from '../lib/images';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

function Result() {
  const {searchCriteria} = useContext(AppContext);
  return (
    <Layout imageUrl={images.article1L}>
    <PageTitle text="Search Results" />
    <p>{searchCriteria}</p>
    {/* {searchCriteria.length > 0 && searchCriteria.map((city: any)=><li key={city.id}><Link href={`/cities/${city.city_name}`}>{city.city_name}</Link></li>)} */}
  </Layout>
  )
}

export default Result