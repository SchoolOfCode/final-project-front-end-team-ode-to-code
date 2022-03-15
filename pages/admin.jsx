import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';
import styles from '../styles/Admin.module.css';
import Head from 'next/head';

function Admin() {
    const citiesApi = 'https://four-week-project.herokuapp.com/cities';
    const countriesApi = 'https://four-week-project.herokuapp.com/countries';

    

    return (
        <>
          <Head>
            <title>beyonderbound | Admin</title>
          </Head>
          <Layout imageUrl={images.admin}>
            <PageTitle text="Admin" />
          </Layout>
        </>
    )
}

export default Admin;