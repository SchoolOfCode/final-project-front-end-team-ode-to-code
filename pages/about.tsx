import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';
import styles from '../styles/About.module.css';
import Link from 'next/link';
import TeamMember from '../components/TeamMember';
import { teamOdeToCode } from '../lib/team';
import type { NextPage } from 'next';
import Head from 'next/head';

function About<NextPage>() {
  return (
    <>
      <Head>
        <title>beyonderbound | About Us</title>
      </Head>
      <Layout imageUrl={images.about}>
        <PageTitle text="About Us" />
        <div data-cy="about-text-parent" className={styles.body}>
          <p className={styles.container}>
            We are <br />
            <span data-cy="about-title" className={styles.highlight}>
              Team Ode to Code
            </span>
            !
          </p>
          <p className={styles.container}>
            We met via{' '}
            <Link href="https://schoolofcode.co.uk/">School of Code</Link>'s
            first national bootcamp, and were grouped together for our Final 4
            week project. Our challenge was to work together remotely, using
            Agile Methodologies, to build a full stack application. Thus,{' '}
            <span className={styles.highlight}>beyonderbound</span> was born!
          </p>
          <p className={styles.container}>
            For more information feel free to checkout our pages:
          </p>
          <ul className={styles.list}>
            {teamOdeToCode.map((teamMember) => (
              <li>
                <TeamMember
                  Name={teamMember.Name}
                  LinkedIn={teamMember.Linkedin}
                  Portfolio={teamMember.Portfolio}
                  GitHub={teamMember.GitHub}
                  key={teamMember.Name}
                />
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}

export default About;
