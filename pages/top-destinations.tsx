import type { NextPage } from 'next';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import { images } from '../lib/images';
import styles from '../styles/Topdestination.module.css';

function TopDestinations<NextPage>() {
  return (
      <Layout imageUrl={images.article1L}>
        <PageTitle text="Top 2022 Destinations" />

        <div className='top-destination-divs'>
        <h1 className={styles.headers1}>Almere, Holland</h1>
        <img  className={styles.image} src='https://cdn.pixabay.com/photo/2016/04/18/21/15/holland-1337473_1280.jpg'/>
        <p className={styles.paragraphs}>If ever there was a year to visit the Netherlands, it's 2022 when the Floriade floral spectacle takes place, with its timely eco-theme of ‘growing green cities’. Held every 10 years, the Floriade Expo returns for six months from April to October and will bring an array of unique and fascinating exhibitions to Almere, near Amsterdam.

        With a focus on imagining sustainable, city living for the future, you can expect inspiring gardens, workshops and exhibitions mixed with striking attractions and tasting sessions. The 150-acre site is also where 300 eco-homes have been built, with plans for the area to be turned into a green residential neighbourhood of 660 homes, so if you're after a sustainably-focused holiday destination for 2022, Holland is the place worth considering.</p>
      </div>
      
      <div className='top-destination-divs'>
        <h1 className={styles.headers1}>Japan</h1>
        <img  className={styles.image} src='https://cdn.pixabay.com/photo/2020/03/28/06/42/kobe-4975863_1280.jpg'/>
        <p className={styles.paragraphs}>Fresh from its Olympic and Paralympic success, Japan is a dream holiday destination that should be firmly on your list for 2022. This year, however, it's time to go beyond Tokyo and explore the country's rural side. Japan's newest bullet train route, Nishi Kyushu Shinkansen, is set to open between Nagasaki and Saga in autumn 2022. This will help speed up Nagasaki connections from the current Kyushu bullet train line that comes into Fukuoka from Tokyo.

        The trains themselves will be called kamome meaning 'seagull,' following the popularity of lockdown video game franchise, Ghost of Tsushima, which is set on the stunning archipelagos surrounding the city of Nagasaki. Over the next decade, there will also be new bullet train lines joining Tokyo directly to traditional Fukui, snowy Sapporo and passing through the Nakasendo walking trails of the Kiso Valley. Japan is set to be one of the biggest rail holiday destinations of the future...</p>
      </div>

      <div className='top-destination-divs'>
        <h1 className={styles.headers1}>Kaunas, Lithuania</h1>
        <img  className={styles.image} src='https://cdn.pixabay.com/photo/2018/10/03/16/19/lithuania-3721840__480.jpg'/>
        <p className={styles.paragraphs}>The Lithuanian city of Kaunas, along with Novi Sad in Serbia, is the European Capital of Culture for 2022, allowing the photogenic destination to step into the spotlight to showcase its cultural offering to the world.

        A visit to Kaunas is ideal for a short European city break, with direct flights from the UK with low-cost airlines Ryanair and Wizz Air. The city combines tree-lined promenades and historic architecture with contemporary street art and high-class dining. As Lithuania's second largest city, Kaunas offers a unique take on art deco design, fairy tale attractions like Kaunas Castle and Pažaislis Monastery and Modernist architecture to browse.</p>
      </div>

      <div className='top-destination-divs'>
        <h1 className={styles.headers1}>Barbados</h1>
        <img  className={styles.image} src='https://cdn.pixabay.com/photo/2020/06/13/10/43/wallpaper-5293774_1280.jpg'/>
        <p className={styles.paragraphs}>Bringing winter sun to travellers flying from Edinburgh, Virgin Atlantic's new route to Barbados puts the Caribbean island firmly on our list for 2022. The route from Scotland's capital to Barbados marks the first time Virgin Atlantic has flown international flights from Edinburgh in its 37-year history. It's also Scotland’s only direct flight to the Caribbean.

        With Virgin flights from both London Heathrow and Edinburgh, we've got our eyes on the sun, sea and white sand of this Caribbean idyll for early and late 2022. What's more, a stylish new hotel has arrived in Christ Church, giving you a five-star all-inclusive retreat to experience when you get there. O2 Beach Club and Spa is set on 1,000 feet of the powder white sand on Barbados' south coast. It's the hottest new place to experience indulgent dining, top-notch pampering and a trio of pools.</p>
      </div>

      <div className='top-destination-divs'>
        <h1 className={styles.headers1}>Egypt</h1>
        <img  className={styles.image} src='https://cdn.pixabay.com/photo/2017/04/28/00/44/egypt-2267089_1280.jpg'/>
        <p className={styles.paragraphs}>2022 is a big year for Egypt. The country will mark 100 years of independence from the United Kingdom and historians will celebrate 100 years since the discovery of the tomb of Tutankhamun. By the end of the year, the long-awaited Grand Egyptian Museum will also open its doors.

        What's more, February will see the latest big-screen adaptation of Agatha Christie’s Death on the Nile, directed by and starring Kenneth Branagh, open in cinemas. If you've always wanted to explore the ancient wonders of Egypt, 2022 is the year.</p>
      </div>

      <div className='top-destination-divs'>
        <h1 className={styles.headers1}>Azores, Portugal</h1>
        <img  className={styles.image} src='https://cdn.pixabay.com/photo/2018/08/09/20/32/nature-3595382__340.jpg'/>
        <p className={styles.paragraphs}>British Airways is bringing the Atlantic islands of São Miguel and Terceira in the stunning Azores a little closer to the UK as it launches direct flights to the destinations from Heathrow for summer 2022. The new flight routes are perfect for exploring these heavenly islands, which are often compared to Hawaii and New Zealand - without the long-haul journey.

        From its unique take on gastronomy to its old world wines, interesting flora and incredible crater lakes, the Azores invite you to get back to nature and take in the scenery of the Portuguese islands. Senhora da Rosa is a new boutique hotel in Ponta Delgada, with garden views and swimming pools, that's worth checking out.</p>
      </div>


      </Layout>

      
  );
}

export default TopDestinations;
