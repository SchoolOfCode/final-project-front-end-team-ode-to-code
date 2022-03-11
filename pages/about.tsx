import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';
import styles from '../styles/About.module.css';
import Link from 'next/link';
import { teamOdeToCode } from '../lib/team';
import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/Card';

function About<NextPage>() {

  const shuffledTeam = teamOdeToCode
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  return (
    <>
      <Head>
        <title>beyonderbound | About Us</title>
      </Head>
      <Layout imageUrl={images.about}>
        <PageTitle text="About Us" />
        <div data-cy="about-text-parent" className={styles.body}>
          <p className={styles.subheading}>
            We are <br />
            <span data-cy="about-title" className={styles.highlightheading}>
              Team Ode to Code
            </span>
          </p>
          <p className={styles.container}>
            We met via{' '}
            <Link href="https://schoolofcode.co.uk/">School of Code</Link>'s first national bootcamp, and were grouped together for our final 4 week project. Our challenge was to work together remotely, using Agile Methodologies, to build a full stack application. </p>
          <p className={styles.container}>Thus, <span className={styles.highlight}>beyonderbound</span> was born!</p>
          <p className={styles.container}>
            For more information feel free to check out our pages:
          </p>
          <div className={styles.profilecards}>
            {shuffledTeam.map((teamMember) => (
              <Card
                key={teamMember.Name}
                name={teamMember.Name}
                image={teamMember.Image}
                linkedin={teamMember.Linkedin}
                github={teamMember.GitHub}
                portfolio={teamMember.Portfolio}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
