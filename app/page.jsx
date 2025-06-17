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
            <p className="max-w-[700px] text-sm mt-4 mb-4 text-white/80 text-justify">I love turning “we have a problem” into “here’s your solution.” With hands-on experience gained through countless hours on Trailhead, I specialize in streamlining business processes, automating workflows, integrating third-party systems, and supporting sales and service operations. Exploring Salesforce’s latest innovations— Einstein Analytics, AgentForce and Sales Coach features as an AgentBlazer Champion and Innovator. Currently, I’m deepening my expertise in CPQ & Platform Developer.
            <br />
            Beyond Salesforce, I’m a Full-Stack Developer with a solid foundation in React.js, Express.js, Node.js, MongoDB, and AWS. I enjoy bringing well-crafted designs to life through fast, responsive, and scalable web applications that users truly appreciate.</p>
        
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