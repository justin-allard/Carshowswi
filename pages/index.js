import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Events from "../components/events";
import Footer from "../components/footer";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Car Shows WI</title>
        <meta
          name="description"
          content="Car Shows WI is a site that lets car shows and car related events advertise and list their events for free."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        
        title="Upcoming Car Shows">
        View a full list of up coming car shows and events on our Events page.
      </SectionTitle>
      <Events />
      


      <SectionTitle title="Frequently Asked Questions">
        Please feel free to reach out with any questions using our contact us form.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;