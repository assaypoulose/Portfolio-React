import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaSalesforce } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const socials = [
    { icon: <FaGithub />, path: "https://github.com/assaypoulose"},
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/assay-poulose-peenikkaparamban-961911179"},
    { icon: <SiLeetcode />, path: "https://leetcode.com/u/assaypoulose"},
    { icon: <FaSalesforce />, path: "https://www.salesforce.com/trailblazer/assaypoulosepeenikkaparamban"},
];

const Social = ({containerStyles, iconStyles }) => {
  return (
  <div className={containerStyles}>
    {socials.map((item, index) => {
        return (
        <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
        </Link>
        )
    })}
  </div>
  );
};

export default Social;