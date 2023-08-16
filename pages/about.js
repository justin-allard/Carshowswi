import Head from "next/head";

import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Footer from "../components/footer";
import Cta from "../components/cta";
import Faq from "../components/faq";


const About = () => {
  return (
    <>
      <Head>
        <title>Events - Car Shows WI</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
     
      <SectionTitle
        
        title="Upcoming Car Shows">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      

      <Cta />
      <Footer />
   
    </>
  );
}

export default About;