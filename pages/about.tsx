import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';
import {AppContext} from '../context/state';
import {useContext} from 'react'



function About() {
  const {searchCriteria, setSearchCriteria} = useContext(AppContext);

  setSearchCriteria("test")
  return (
    <>
      <Layout imageUrl={images.about}>
        <PageTitle text="About Us" />
        <p>{searchCriteria}</p>
       </Layout>
    </>
  )
}

export default About