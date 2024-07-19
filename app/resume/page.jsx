"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaGit, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiVisualstudiocode, SiMongodb , SiMysql, SiDotnet } from "react-icons/si";

const about = {
  title: 'About me',
  description: "Full Stack Developer specialized in MERN Stack with 2 years of experience in coding and developing web applications using React.js and Next.js. Certified Full-Stack Developer and holds credentials as an AWS Solutions Architect Associate and Oracle Java Foundations Associate. I am also a Salesforce development enthusiast.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Assay Poulose Peenikkaparamban"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+49) 176 834 66693"
    },
    {
      fieldName: "Email",
      fieldValue: "assaypoulose16@gmail.com"
    },
    {
      fieldName: "Experience",
      fieldValue: "2 years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Residence",
      fieldValue: "Germany"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, German"
    }
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'Collaborated with senior developers to develop and maintain web applications using Java, JavaScript/TypeScript, HTML/CSS, and modern JavaScript frameworks like React and Next.js. Practiced unit testing for code reliability and quality, fixed bugs, and implemented small features while creating technical documentation and SQL queries for database interactions. Contributed to the development of ASAP Tickets and Skylux Travel using Next.js, and developed backend services and RESTful APIs with Java. Utilized version control systems such as Git and GitHub/GitLab, and worked on CI/CD processes, while also leveraging tools like VS Code, Jira, Slack, npm/Yarn, Postman, Jenkins, Docker, and ESLint. Participated in daily stand-ups, sprint planning, retrospective meetings, and Pair Programming.',
  items: [
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "Feb 2024 - Present"
    },
    {
      company: "Innovative Travel Solutions",
      position: "Junior Full Stack Developer",
      duration: "Jun 2022 - Jan 2024"
    },
    {
      company: "Richmark Group",
      position: "Logistics Operations Manager",
      duration: "Feb 2021 - May 2022"
    },
    {
      company: "International Travel Network",
      position: "GDS Expert",
      duration: "Dec 2018 - Jan 2021"
    },
  ]
};

const education = {
  icon: '/assets/resume/badge.svg',
  title: 'My Education',
  items: [
    {
      institution: "AWS",
      degree: "AWS Solutions Architect (SAA-C03)",
      duration: "2024"
    },
    {
      institution: "Oracle",
      degree: "Java Foundations Associate (1Z0-811)",
      duration: "2024"
    },
    {
      institution: "Code Institute",
      degree: "AACC Certified",
      duration: "2024"
    },
    {
      institution: "Online Course Platform - Guvi",
      degree: "Full Stack Development Bootcamp",
      duration: "2022"
    },
    {
      institution: "Riga Technical University",
      degree: "Master of Science",
      duration: "2018 - 2020"
    },
    {
      institution: "Nehru Institute of Engineering and Technology",
      degree: "Bachelor's in Engineering",
      duration: "2011 - 2015"
    },
    {
      institution: "Carmel H.S.S. Chalakudy",
      degree: "High School Diploma in Computer Science",
      duration: "2009 - 2011"
    },
  ]
};

const skills = {
  title : "My Skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiDotnet />,
      name: '.NET',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaGit />,
      name: 'Git',
    },
    {
      icon: <SiVisualstudiocode />,
      name: 'VS Code',
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB',
    },
    {
      icon: <SiMysql />,
      name: 'MySQL',
    },
  ]

}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration:0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] max-auto xl:mx-0 gap-6">
            <TabsTrigger value= "experience">Experience</TabsTrigger>
            <TabsTrigger value= "education">Education</TabsTrigger>
            <TabsTrigger value= "skills">Skills</TabsTrigger>
            <TabsTrigger value= "about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full ">


            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0 text-justify ">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>



            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>



            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold mb-10">{skills.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item,index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>



            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0 text-justify">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0">
                  {about.info.map((item,index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>


          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume