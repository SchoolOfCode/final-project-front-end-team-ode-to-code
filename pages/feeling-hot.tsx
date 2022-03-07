import type { NextPage } from 'next';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';
import styles from '../styles/feelinghot.module.css';
import Head from 'next/head';

function FeelingHot<NextPage>() {
  return (
    <>
    <Head>
      <title>beyonderbound | Where's hot now?</title>
    </Head>
     <Layout imageUrl={images.article3L}>
        <PageTitle text="Where's hot now?" />

        <div className='top-destination-divs'>
        <h1 className={styles.headers1}>Dominican Republic</h1>
        <img  className={styles.image} src='https://cdn.pixabay.com/photo/2016/12/05/16/28/dominican-republic-1884286_1280.jpg'/>
        <p className={styles.paragraphs}>Dominican Republic is the second largest and most diverse Caribbean country, situated just two hours south of Miami, less than four hours from New York and eight hours from most European cities. Known for our warm and hospitable people, Dominican Republic is a destination like no other, featuring astounding nature, intriguing history and rich culture.
        Surrounded by the Atlantic Ocean on the north and the Caribbean Sea on the south, our lush tropical island paradise boasts nearly 1,000 miles (1,609 km) of coastline, 250 miles (402 km) of the world’s top beaches, magnificent resorts and hotels, and a variety of sports, recreation and entertainment options. Here you can dance to the pulse pounding thrill of the merengue, renew in our luxurious and diverse accommodations, explore ancient relics of centuries past, delight in delicious Dominican gastronomy or enjoy ecotourism adventures in our magnificent national parks, mountain ranges, rivers, and beaches.</p>
      </div>

      <div className='top-destination-divs'>
        <h1 className={styles.headers1}>Cuba</h1>
        <img  className={styles.image} src='https://cdn.pixabay.com/photo/2016/09/02/08/32/cuba-1638594__480.jpg'/>
        <p className={styles.paragraphs}>Cuba is like a prince in a poor man’s coat: behind the sometimes shabby facades, gold dust lingers. It’s these rich dichotomies that make travel here the exciting, exhilarating roller-coaster ride it is. Trapped in a time warp and reeling from an economic embargo that has grated for more than half a century, this is a country where you can wave goodbye to everyday assumptions and expect the unexpected. If Cuba were a book, it would be James Joyce's Ulysses: layered, hard to grasp, frequently misunderstood, but – above all – a classic.The vast majority of Cuba's tourists gravitate to the attractive arcs of white sand that pepper the country's north coast and offshore islands. But, explore beyond the beaches and you’re in a different domain, a land of fecund forests and crocodile-infested swamps, abandoned coffee plantations and rugged mountains as famous for their revolutionary folklore as their endemic species. Cuba, once observed German scientist Alexander von Humboldt, is a kind of Caribbean Galápagos where contradictory curiosities exist side by side. Get off the beaten path and seek them out.</p>
      </div>

      <div className='top-destination-divs'>
        <h1 className={styles.headers1}>Canary Islands</h1>
        <img  className={styles.image} src='https://cdn.pixabay.com/photo/2014/09/26/04/01/sea-water-swimming-pool-461565_1280.jpg'/>
        <p className={styles.paragraphs}>The diversity of landscapes on the Canary Islands really is staggering, spanning dramatic deserts and snow-capped mountains, verdant valleys and towering cliffs. Then there’s the seemingly infinite number of beaches - of both the black and white sand variety. What’s more, the Canaries are volcanic (hence that black sand), and volcanic islands are never dull. For example, La Palma’s Teneguia erupted as recently as 1971.
        All that diversity considered, it’s not a question of which island is best - rather, it’s a case of which is best for you. And the good thing is, no matter what your travel style, there’s an island to suits your needs. Pining for back-to-nature adventures? Seeking a secluded beach spot? Want to sample world-class water-sports? All this (and a whole lot more) is covered in our Canary Islands overview - written with first-timers in mind.</p>
      </div>

      <div className='top-destination-divs'>
        <h1 className={styles.headers1}>Morocco</h1>
        <img  className={styles.image} src='https://cdn.pixabay.com/photo/2017/05/27/22/33/morocco-2349647_1280.jpg'/>
        <p className={styles.paragraphs}>Today, more than eight million tourists come to the country every year in search of a beach break with a twist. Most people choose Agadir as their base, and for good reason. The stretch of coast here unravels for six miles and basks in 300 days of sunshine a year. Drive 30 minutes north, meanwhile, and you’ll find yourself on the quieter sands of Taghazout. This up-and-coming fishing village is a magnet for surfers and offers an authentic taste of laidback Moroccan life.
        Head a little further north from the mountains, meanwhile, and you’ll reach Marrakech. The highlight of this chaotic city is the market place in Jemaa el-Fna square. Even if you don’t have an eye to buy it’s still worth a visit. You’re likely to see bejewelled belly dancers, too.</p>
      </div>

      <div className='top-destination-divs'>
        <h1 className={styles.headers1}>Malta</h1>
        <img  className={styles.image} src='https://cdn.pixabay.com/photo/2014/03/21/16/55/malta-292181__340.jpg'/>
        <p className={styles.paragraphs}>Malta’s rich history means it has a culture all of its own, and you’re going to want to experience as much of it as you can. Do as the locals do and snack on pea or ricotta pastizzi (savoury pastries), tuck into fenkata (rabbit stew), and drink a splash of the prickly pear liqueur, Bajtra. Book your holidays to Malta in summer and you could find yourself at one of the island’s lively festa street parties or letting your hair down at a music festival, such as Annie Mac’s Lost & Found. Don’t miss the chance to see a Maltese marching band, too – just one of this characterful island’s distinctive quirks.
        ou’ll find the island’s longest beach at Mellieha Bay, on the northern coast, while some of Malta’s best sandy beaches hug the north-western coast at Golden Bay. Over to the south-east, the large, buzzing resorts of Qawra and Bugibba are tucked side-by-side in St Paul’s Bay. Or, surround yourself with historic culture in Malta’s small but elegant capital, Valletta: it’s filled with narrow streets and bordered by dramatic fortifications. The rocky shores north of the capital are home to the classy resorts of Sliema and St Julian’s. And for a taste of rural peace, book your holiday to Gozo, Malta’s little sister island.</p>
      </div>


      </Layout>
      </>
  );
}

export default FeelingHot;
