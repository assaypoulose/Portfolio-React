
"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";


const URL1= "https://food-delivery-frontend-pguf.onrender.com";
const URL2 = "https://amazon-clone-pi-navy.vercel.app";
const URL3 = "https://amazon-web-scraping.vercel.app";
const URL4 = "https://career-page-1.onrender.com/"
const URL5 = "https://clinic-booking-frontend.onrender.com/"


const GITHUB1 = "https://github.com/assaypoulose/food-delivery-app.git"
const GITHUB2 = "https://github.com/assaypoulose/Amazon-Clone.git"
const GITHUB3 = "https://github.com/assaypoulose/Web-Scraping-Amazon.git"
const GITHUB4 = "https://github.com/assaypoulose/Career-Page.git"
const GITHUB5 = "https://github.com/assaypoulose/Hospital-Appointment-Booking.git"

const projects = [
  {
    num: '01',
    category: 'Full-Stack',
    title: 'Food Delivery Web Application',
    description: "JavaScript project built using React JS, MongoDB, Express, Node JS, and Stripe. Covers all aspects from user authentication to online payments and order status updates.",
    image: '/assets/work/thumb1.png',
    live: `${URL1}`,
    github: `${GITHUB1}`,
  },
  {
    num: '02',
    category: 'Full-Stack',
    title: 'E-commerce Website',
    description: "Developed a fully functional e-commerce website replicating Amazon's features using ReactJS, Next.js, TypeScript, Tailwind CSS, Stripe and Supabase. Key features include product management, multi-step checkout, and dynamic product displays. Deployed the application on Vercel and used Git & GitHub for version control and collaboration.",
    image: '/assets/work/thumb2.png',
    live: `${URL2}`,
    github: `${GITHUB2}`,
  },
  {
    num: '03',
    category: 'Full-Stack',
    title: 'Amazon Web Scraping Application',
    description: "Developed an advanced web scraping tool using Next.js and Bright Data's webunlocker to extract Amazon product details. Leveraged Tailwind CSS for a responsive, user-friendly interface and implemented back-end functionality with MongoDB. Automated periodic data scraping using cron jobs, enabling real-time data processing and user notifications for price drops and stock updates. Utilized Git and GitHub for effective version control and project management.",
    image: '/assets/work/thumb3.png',
    live: `${URL3}`,
    github: `${GITHUB3}`,
  },
  {
    num: '04',
    category: 'Full-Stack',
    title: 'Career-Page Web Application',
    description: "Developed an advanced Job-Portal and here you can filter job listings by title, location, posting time, and more. Implement user authentication and registration using email, password, or even your Gmail account. Allow registered users to post, edit, and manage their job listings. Implement pagination and craft an awesome UI for an outstanding user experience.",
    image: '/assets/work/thumb4.png',
    live: `${URL4}`,
    github: `${GITHUB4}`,
  },
  {
    num: '05',
    category: 'Full-Stack',
    title: 'Hostial Appointment Booking Web Application',
    description: "This full stack appointment booking system can be used by a doctor or a hospital. Because in this project I have created 3 level of authentication. 1st one is for Patients, so that patient can login on the website, book appointment with doctor and manage the booked appointment. 2nd one is doctor login, so that doctor can login and check the appointment and their earning. Doctor can update their profile also from dashboard. 3rd one is Admin Dashboard where admin can manages the appointment and admin can also manage the doctor profile.",
    image: '/assets/work/thumb5.png',
    live: `${URL5}`,
    github: `${GITHUB5}`,
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section 
    initial={{opacity: 0}} 
    animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease: "easeIn"}}} 
    className="min-h-[80vh] flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60 text-justify">{project.description}</p>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">


                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>


              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project,index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">

                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[24px] h-[24px] flex justify-center items-center transition-all rounded-full" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;