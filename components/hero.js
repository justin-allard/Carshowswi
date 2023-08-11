import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/trucks.png";

const Hero = () => {
  return (
    
    <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Free Car Show Advertising
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              CARSHOWSWI.COM is your one stop site for finding car shows in Wisconsin. Our goal is to create a site where anyone can submit a show and we will list it on our site for free.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue rounded-md ">
                Submit Event
              </a>
              
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>

     );
     }

export default Hero;