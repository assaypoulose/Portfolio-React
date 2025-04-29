import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
// import Link from "next/link";


const Home = () => {
  return (
  <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-2">

        <div className="text-center xl:text-left order-2 xl:order-none">
          <h1 className="text-3xl mb-4">
            Hello I'm <br /> <span className="text-accent">Assay Poulose Peenikkaparamban</span>
            </h1>
            <span className="text-xl text-white/90">Salesforce Administrator & Full Stack Developer</span>
            <p className="max-w-[700px] text-sm mt-4 mb-4 text-white/80 text-justify">I enjoy working with in Salesforce platform with a low code to no code strategies to improve business processes, automate workflows, and support sales and service operations. My passion for coding made me a Full-Stack Developer skilled in transforming great designs into fast, responsive web applications with hands-on experience in React.js, Express.js, Node.js, MongoDB and AWS. Skilled in building scalable and efficient solutions that users love. Brings over 5 years of experience in CRM management, project development, sales and client-facing roles.</p>
            <div className="flex mt-10 flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                Download CV
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>
  );
}

export default Home;