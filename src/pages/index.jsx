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

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          {/* Pull data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreNearby?.map((item) => (
              <SmallCard key={item.location} {...item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      exploreNearby: exploreNearbyMockData,
    },
  };
}
