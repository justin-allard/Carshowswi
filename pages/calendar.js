import Head from "next/head";

import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Events from "../components/events";

import Footer from "../components/footer";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";

const Calendar = () => {
  return (
    <>
      <Head>
        <title>Calendar - Car Shows WI</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Events />
      


      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Calendar;