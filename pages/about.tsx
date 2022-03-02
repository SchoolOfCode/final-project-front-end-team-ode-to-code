import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';
import {AppContext} from '../context/state';
import {useContext} from 'react'



function About() {
  const {data, updateSearchCriteria} = useContext(AppContext);

  updateSearchCriteria("test")
  return (
    <>
      <Layout imageUrl={images.about}>
        <PageTitle text="About Us" />
        <p>{data}</p>
       </Layout>
    </>
  )
}

export default About