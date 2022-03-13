import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';
import exploreNearbyMockData from '../mocks/exploreNearby.json';

export default function Home({exploreNearby}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto mt-10 max-w-screen-2xl px-10">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Inspiration for your next trip</h2>

          {/* Pull data from server */}
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreNearby?.map((item) => (
              <SmallCard key={item.location} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mt-10 py-4 text-4xl font-semibold">Live Anywhere</h2>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      exploreNearby: exploreNearbyMockData.slice(0, 4),
    },
  };
}
