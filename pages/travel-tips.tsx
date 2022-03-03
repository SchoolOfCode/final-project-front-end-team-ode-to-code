import type { NextPage } from 'next';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';
import styles from '../components/styles/Article.module.css';

function TravelTips<NextPage>() {
  return (
    <>
      <Layout imageUrl={images.article2L}>
        <PageTitle text="Travel Tips" />

        <p>
          When you're getting ready to leave your every-day life behind and jet
          off to extraordinary new places, bustling new cities and weather so
          refreshingly different from home it's almost dream-like, it's easy to
          get caught up in the excitement of it it all! Thankfully, we're here
          to help you keep grounded in all the ways that matter, by listing the
          top travel tips every traveller should have in their arsenal.
        </p>

        <ol>
          <li> When you go out, take only what you need.</li>
          <p>
            This may seem obvious, but too many people keep all their cash and
            important documents such as their passport on them every time they
            leave the hotel. This means that if your bag gets lost or stolen,
            it'll be a huge setback. Which brings us to the second tip...{' '}
          </p>
          <li>
            Make extra copies of your passport and all of your important
            documents
          </li>
          <p>
            This is important, as you can never be too prepared in this regard.
            You will never know when you might need to have some sort of
            documentation with you and might not want to always carry your
            original. A good hack is to also email these documents to yourself,
            as extra security and to give you piece of mind.Additionally, if
            your passport gets stolen, having a copy will come in handy for your
            police report.
          </p>

          <li>Don't take direct flights to your destination</li>
          <p>
            If you want to save money, then it's good to keep in mind that
            taking the direct route does'nt often come out the cheapest. It's
            good to keep this in mind when booking flights.
          </p>

          <li>Libraries, Starbucks, and most cafés have free Wi-Fi</li>
          <p>
            This is a travel tip that is easy to forget when you are abroad. If
            you are staying in a place that charges for wifi, you can always go
            to these places for free wifi.
          </p>

          <li>Never eat near a tourist attraction</li>
          <p>
            The closer you are to tourist attractions the more you are going to
            pay and the worse the food is going to be - ypu also run the risk of
            missing out on authentic cousine.
          </p>

          <li>Carry a basic first-aid kit.</li>
          <p>
            You never know when accidents are going to happen, and you might
            have access to one
          </p>

          <li>Book flights 2-3 months in advance to get the best price</li>
          <p>
            This will allow you to save money on flights and avoid the steep
            hike in price if you booked closer to your departure date
          </p>
        </ol>
      </Layout>
    </>
  );
}

export default TravelTips;
