"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "Web/Full-Stack Development",
    description: "Proficient in building responsive, user-focused web applications using modern technologies including React.js, Node.js, Express.js, and MongoDB/MySQL. Experienced in designing RESTful APIs, implementing authentication, and managing state with Redux. Skilled in integrating frontend and backend for seamless performance, and deploying applications using platforms like Vercel, Netlify, and AWS. Focused on writing clean, scalable code and delivering intuitive user interfaces with strong attention to performance and accessibility.",
    href: ""
  },
  {
    num: "02",
    title: "Salesforce Administration & Development",
    description: "Skilled in customizing and managing Salesforce CRM to support business processes across Sales, Service, and Marketing. Skilled in configuring objects, fields, validation rules, workflows, and automation using Flow and Process Builder. Proficient in Apex, SOQL, and Lightning Web Components (LWC) for building scalable custom solutions. Hands-on experience with user management, security settings, dashboards, and reports to drive data-driven decision-making. Committed to delivering efficient, user-friendly Salesforce solutions aligned with business goals.",
    href: ""
  },
  // {
  //   num: "03",
  //   title: "Salesforce Development",
  //   description: "Salesforce Developer proficient in Apex, Visualforce, and Lightning for custom CRM solutions.",
  //   href: ""
  // },
  // {
  //   num: "04",
  //   title: "AWS Solutions Architect",
  //   description: "AWS Solutions Architect with expertise in designing and implementing scalable, secure, and cost-effective cloud solutions. Proficient in EC2, S3, RDS, VPC, Lambda, and more.",
  //   href: ""
  // }
];

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div initial={{ opacity: 0 }} animate={{
          opacity: 1, // Changed from 0 to 1
          transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
        }}
        className=""
        >

          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className='w-full flex justify-between items-center'>
                  <div className='text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                  <Link href={service.href} className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                <h2 className='text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                <p className='text-white/60 text-justify'>{service.description}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
