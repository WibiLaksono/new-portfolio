import Image from "next/image";

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
      <div className="h-[0.1rem] w-full bg-black"></div>
      <div className="flex flex-col justify-between text-black h-full py-10">
        {/* Skills Section */}
        <div>
          <h1 className="font-bold text-lg">Skills</h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs md:text-sm font-medium shadow-sm hover:bg-gray-300 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-10">
          <h1 className="font-bold text-lg">Education</h1>
          <div className="flex flex-col gap-2 mt-4">
            {education.map((edu, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Image
                  src={edu.imageURL}
                  alt={edu.company}
                  width={100}
                  height={100}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="w-full">
                  <div className="flex items-center justify-between gap-x-2">
                    <h2 className="inline-flex items-center justify-center font-semibold text-xs sm:text-base">
                      {edu.company}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 tabular-nums text-muted-foreground text-right">
                      {edu.duration}
                    </p>
                  </div>
                  <p className="text-sm text-gray-900">{edu.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organization Section */}
        <div className="mt-10">
          <h1 className="font-bold text-lg">Organization</h1>
          <div className="flex flex-col gap-2 mt-4">
            {organization.map((org, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                  <Image
                    src={org.imageURL}
                    alt={org.company}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between gap-x-2">
                    <h2 className="inline-flex items-center justify-center font-semibold text-xs sm:text-base">{org.company}</h2>
                    <p className="text-xs sm:text-sm text-gray-600 tabular-nums text-muted-foreground text-right">{org.duration}</p>
                  </div>
                  <p className="text-sm text-gray-900">{org.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-10">
          <h1 className="font-bold text-lg">Experience</h1>
          <div className="flex flex-col gap-2 mt-4">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Image
                  src={exp.imageURL}
                  alt={exp.company}
                  width={100}
                  height={100}
                  className="w-10 h-10 rounded-full"
                />
                <div className="w-full">
                  <div className="flex items-center justify-between gap-x-2">
                    <h2 className="inline-flex items-center justify-center font-semibold text-xs sm:text-base">{exp.company}</h2>
                    <p className="text-xs text-gray-600 sm:text-sm tabular-nums text-muted-foreground text-right">{exp.duration}</p>
                  </div>
                  <p className="text-sm text-gray-900">{exp.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
