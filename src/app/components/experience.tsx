"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

export default function Experience() {
  const education = [
    {
      company: "Gadjah Mada University",
      role: "Bachelor degree in Computer Science",
      duration: "July 2023 - Present",
      imageURL: "/lambang-UGM.png",
    },
    {
      company: "SMAN 3 Medan",
      role: "Mathematics and Natural Sciences Student",
      duration: "July 2020 - May 2023",
      imageURL: "/logo-sman3.png",
    },
  ];

  const organization = [
    {
      company: "OmahTI",
      role: "Staff of Frontend Division",
      duration: "February 2024 - Present",
      imageURL: "/OTI-cap.png",
    },
    {
      company: "OmahTI",
      role: "Lead of Human Development Division",
      duration: "January 2025 - Present",
      imageURL: "/OTI-cap.png",
    },
    {
      company: "Google Developer Group on Campus UGM",
      role: "Hacker",
      duration: "November 2024 - May 2025",
      imageURL: "/gdgoc.jpg",
    },
  ];

  const experience = [
    {
      company: "Malam Apresiasi MIPA UGM 2024",
      role: "IT Staff",
      duration: "August 2024 - November 2024",
      imageURL: "/Malpres.jpg",
    },
    {
      company: "Pionir Pascal UGM 2024",
      role: "Staff of Co-Fasilitator Division",
      duration: "June 2024 - August 2024",
      imageURL: "/Pascal.jpg",
    },
    {
      company: "OmahTI Learning Center 2024",
      role: "Project Officer",
      duration: "June 2024 - November 2024",
      imageURL: "/OLC.png",
    },
    {
      company: "OmahTI Academy 2025",
      role: "Steering Committee",
      duration: "February 2025 - Present",
      imageURL: "/oticad.png",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "PHP",
    "Node.js",
    "C++",
    "Java",
    "MySQL",
    "MongoDB",
    "Git",
    "Docker",
    "Leadership",
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Adaptability",
  ];

  return (
    <div className="mx-auto px-6 md:px-20 py-5">
      <div className="h-[0.1rem] w-full" style={{ backgroundColor: "var(--foreground)" }}></div>
      <div className="flex flex-col justify-between h-full py-10">

        {/* Skills */}
        <div>
          <h1 className="font-bold text-lg">Skills</h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="px-3 py-1 bg-gray-400/30 rounded-full text-xs md:text-sm font-medium shadow-sm hover:bg-gray-500/20 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-10">
          <h1 className="font-bold text-lg">Education</h1>
          <div className="flex flex-col gap-2 mt-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-center space-x-4"
              >
                <Image src={edu.imageURL} alt={edu.company} width={100} height={100} className="w-10 h-10 rounded-full object-cover" />
                <div className="w-full">
                  <div className="flex items-center justify-between gap-x-2">
                    <h2 className="font-semibold text-xs sm:text-base">{edu.company}</h2>
                    <p className="text-xs sm:text-sm tabular-nums text-right">{edu.duration}</p>
                  </div>
                  <p className="text-sm">{edu.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Organization */}
        <div className="mt-10">
          <h1 className="font-bold text-lg">Organization</h1>
          <div className="flex flex-col gap-2 mt-4">
            {organization.map((org, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-center space-x-4"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                  <Image src={org.imageURL} alt={org.company} width={32} height={32} className="object-contain rounded-full" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between gap-x-2">
                    <h2 className="font-semibold text-xs sm:text-base">{org.company}</h2>
                    <p className="text-xs sm:text-sm tabular-nums text-right">{org.duration}</p>
                  </div>
                  <p className="text-sm">{org.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-10">
          <h1 className="font-bold text-lg">Experience</h1>
          <div className="flex flex-col gap-2 mt-4">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-center space-x-4"
              >
                <Image src={exp.imageURL} alt={exp.company} width={100} height={100} className="w-10 h-10 rounded-full" />
                <div className="w-full">
                  <div className="flex items-center justify-between gap-x-2">
                    <h2 className="font-semibold text-xs sm:text-base">{exp.company}</h2>
                    <p className="text-xs sm:text-sm tabular-nums text-right">{exp.duration}</p>
                  </div>
                  <p className="text-sm">{exp.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
