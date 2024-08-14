"use client";

import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGit, FaNodeJs, FaJava, FaDocker, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiVisualstudiocode, SiMongodb , SiMysql, SiGraphql, SiSpringboot, SiExpress, SiKubernetes, SiHibernate, SiPhp  } from "react-icons/si";

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
  description: 'Collaborated with senior developers to develop and maintain web applications for ASAP Tickets and Skylux Travel. Ensured code reliability and quality through unit testing, bug fixing, and developed new features. Worked with databases such as MongoDB and MariaDB to store and retrieve data.  Utilized my skills in TypeScript, GraphQL and REST to create efficient and scalable applications. My role also involved working on CI/CD processes with Docker and using Git for repository hosting and collaboration. Participated actively in daily stand-ups, sprint planning, retrospective meetings, and pair programming to ensure effective team collaboration and project progression. Collaborate with cross-functional teams to design and implement software solutions using technologies like Next.js, Node.js, and React.',
  items: [
    {
      company: "Internship",
      position: "Web Development Intern",
      duration: "Aug 2024 - Present",
      certificate: '/assets/resume/UnifiedMentor.png'
    },
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "Feb 2024 - Jul 2024"
    },
    {
      company: "Dyninno Group - Innovative Travel Solutions",
      position: "Junior Full Stack Developer",
      duration: "Jun 2022 - Jan 2024",
      certificate: '/assets/resume/ITS.png'
    },
    {
      company: "Richmark Group",
      position: "Logistics Operations Manager",
      duration: "Feb 2021 - May 2022",
      certificate: '/assets/resume/Richmark.png'
    },
    {
      company: "International Travel Network",
      position: "GDS Expert",
      duration: "Dec 2018 - Jan 2021",
      certificate: '/assets/resume/ITN.png'
    },
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
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
      duration: "2024",
      certificate: '/assets/resume/oracle.png'
    },
    {
      institution: "Code Institute",
      degree: "AACC Certified",
      duration: "2024",
      certificate: '/assets/resume/aacc.png'
    },
    {
      institution: "Online Course Platform - Guvi",
      degree: "Full Stack Development Bootcamp",
      duration: "2022",
      certificate: '/assets/resume/guvi.png'
    },
    {
      institution: "Riga Technical University",
      degree: "Master of Science",
      duration: "2018 - 2020",
      certificate: '/assets/resume/aviation.png'
    },
    {
      institution: "Nehru Institute of Engineering and Technology",
      degree: "Bachelor's in Engineering",
      duration: "2011 - 2015",
      certificate: '/assets/resume/aeronautical.png'
    },
    {
      institution: "Carmel H.S.S. Chalakudy",
      degree: "High School Diploma in Computer Science",
      duration: "2009 - 2011",
      certificate: '/assets/resume/plustwo.png'
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
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
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
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiExpress />,
      name: 'Ecpress.js',
    },
    {
      icon: <FaJava />,
      name: 'Java',
    },
    {
      icon: <SiSpringboot />,
      name: 'Spring Boot',
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
    {
      icon: <FaAws />,
      name: 'AWS',
    },
    {
      icon: <FaDocker />,
      name: 'Docker',
    },
  ]

}

const onlinecourses = {
  title: 'Online Course Certifications',
  items: [
    {
      certificate: '/assets/resume/springboot.png',
      name: 'Spring Boot',
    },
    {
      certificate: '/assets/resume/javafundamentals.png',
      name: 'Java Fundamentals',
    },
    {
      certificate: '/assets/resume/javadevelopment.png',
      name: 'Java Full Stack Development',
    },
    {
      certificate: '/assets/resume/javaspring.png',
      name: 'Java Spring Framework',
    },
    {
      certificate: '/assets/resume/softwaredevelopment.png',
      name: 'Software Development',
    },
    {
      certificate: '/assets/resume/git.png',
      name: 'GIT',
    },
    {
      certificate: '/assets/resume/Docker.png',
      name: 'Docker',
    },
    {
      certificate: '/assets/resume/Jenkins.png',
      name: 'Jenkins',
    },{
      certificate: '/assets/resume/Kubernetes.png',
      name: 'Kubernetes',
    },
    {
      certificate: '/assets/resume/sqlfundamentals.png',
      name: 'SQL Fundamentals',
    },
    {
      certificate: '/assets/resume/sql.png',
      name: 'SQL',
    },
    {
      certificate: '/assets/resume/postgersql.png',
      name: 'PostgerSQL',
    },
    {
      certificate: '/assets/resume/python.png',
      name: 'Python',
    },
    {
      certificate: '/assets/resume/salesforce.png',
      name: 'Salesforce Administrator',
    },
  ],
};

const achievements = {
  title: 'Achievements',
  items: [
    {
      certificate: '/assets/resume/javaexplorer.png',
      name: 'Java Explorer',
    },
    {
      certificate: '/assets/resume/greatstack.png',
      name: 'GreatStack',
    },
    {
      certificate: '/assets/resume/salesforceachievement.png',
      name: 'Salesforce',
    },
    {
      certificate: '/assets/resume/leetcode.png',
      name: 'Leetcode',
    },
  ]
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

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
            <TabsTrigger value="onlinecourses">Certifications</TabsTrigger>
            <TabsTrigger value="achievements">Achievement</TabsTrigger>
            <TabsTrigger value= "about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full ">


            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3> 
                <ScrollArea className="h-[550px]">
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0 text-justify ">{experience.description}</p>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index} 
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}>
                            {hoveredIndex === index && item.certificate && (
                          <div className="relative h-[160px] flex justify-center items-center">
                            <img src={item.certificate} alt="Certificate" className="w-full h-full rounded-xl object-cover" />
                          </div>
                          )}
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
                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index} 
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}>
                            {hoveredIndex === index && item.certificate && (
                          <div className="relative h-[160px] flex justify-center items-center">
                            <img src={item.certificate} alt="Certificate" className="w-full h-full rounded-xl object-cover" />
                          </div>
                          )}
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
                <ScrollArea className="h-[550px]">
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
                </ScrollArea>
              </div>
            </TabsContent>


            <TabsContent value="onlinecourses" className="w-full h-full">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold mb-10">{onlinecourses.title}</h3>
        </div>
        <ScrollArea className="h-[550px]">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 xl:gap-[30px]">
          {onlinecourses.items.map((item, index) => {
            return (
              <li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                      <img src={item.certificate} alt={item.name} className="w-full h-full rounded-xl object-cover" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
        </ScrollArea>
      </div>
            </TabsContent>


            <TabsContent value="achievements" className="w-full h-full">
  <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold mb-10">{achievements.title}</h3>
    </div>
    <ScrollArea className="h-[550px]">
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 xl:gap-[30px]">
      {achievements.items.map((item, index) => {
        return (
          <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[200px] h-[200px] bg-white rounded-xl flex justify-center overflow-hidden items-center group">
                  <img src={item.certificate} alt={item.name} className="w-full h-fit rounded-xl object-cover" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        );
      })}
    </ul>
    </ScrollArea>
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