import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';

function About() {
  return (
    <>
      <Layout imageUrl={images.about}>
        <PageTitle text="About Us" />
      </Layout>
    </>
  )
}

export default About