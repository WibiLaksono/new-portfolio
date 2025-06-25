"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function Project() {
  const projects = [
    {
      title: "Loax App",
      description:
        "A fullstack app to help people sell and buy secondhand goods easily with Next.js, Express.js, PostgreSQL and Docker.",
      date: "2025",
      website: "https://loax.vercel.app",
      source: "https://github.com/WibiLaksono/kuding-fix.git",
      tag: "Fullstack Web, Next.js, Node.js, Express.js, MySQL, Docker, Tailwind CSS",
      role: "Fullstack Developer",
      imageURL: "/loax.png",
    },
    {
      title: "Boommerce",
      description:
        "A platform to buy and read both physical and digital books, centralizing purchases and simplifying access to any book format.",
      date: "2025",
      source: "https://github.com/athjihan/book-commerce.git",
      tag: "Fullstack Mob Apps,Microservices, Event Driven, ElasticSearch, RabbitMQ, Redis, React Native, Expo, Node.js, Express.js, MongoDB, Docker, Nativewind CSS",
      role: "Fullstack Developer",
      imageURL: "/Boommerce.png",
    },
    {
      title: "Aturin - Expense Tracker App ",
      description:
        "Track and manage your daily expenses with intuitive charts and reports.",
      date: "2025",
      website: "https://aturin.great-site.net",
      source: "https://github.com/fagan-id/expense-tracker-app.git",
      tag: "Fullstack Web, PHP, Laravel, Firebase, Tailwind CSS",
      role: "Fullstack Developer",
      imageURL: "/Aturin.png",
    },
    {
      title: "Lintara",
      description:
        "A mobile app to report waste, join challenges, and track contributions for better waste management.",
      date: "2025",
      source: "https://github.com/WibiLaksono/GSC2025-LINTARA.git",
      tag: "Fullstack Mob Apps, React Native, Expo, Node.js, Express.js, Firebase, Gemini AI, Nativewind CSS",
      role: "Fullstack Developer",
      imageURL: "/Lintara.png",
    },
    {
      title: "Malpres 2024",
      description:
        "A web app for voting and ticket booking for the Malam Apresiasi MIPA 2024.",
      date: "2024",
      website: "https://malpresmipa2024.com",
      tag: "Fullstack Web, Next.js, Python, Tailwind CSS",
      role: "Frontend Developer",
      imageURL: "/malpres-web.png",
    },
    {
      title: "Portofolio Website (Old)",
      description:
        "The first portfolio website I created to showcase my projects and skills.",
      date: "2024",
      website: "https://duniawibi.vercel.app",
      source: "https://github.com/WibiLaksono/portofolioBibi.git",
      tag: "Fullstack Web, Next.js, Shadcn UI, Tailwind CSS",
      role: "Frontend Developer",
      imageURL: "/duniawibi.png",
    },
  ];

  return (
    <div className="mx-auto px-6 md:px-20 py-2">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl font-bold mb-8 uppercase tracking-wider"
      >
        Selected Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl shadow-lg overflow-hidden border border-gray-200/10 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={project.imageURL}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm mt-1">{project.date}</p>
                <p className="text-sm mt-2">{project.description}</p>
                <p className="text-sm italic mt-1">{project.role}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tag.split(",").map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.2 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-gray-400/30 text-[10px] hover:bg-gray-100/20 px-3 py-1 rounded-full"
                    >
                      {tag.trim()}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-3 flex-wrap">
                {project.website && (
                  <motion.a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition border"
                    id="web-button"
                  >
                    🌐 Website
                  </motion.a>
                )}
                {project.source && (
                  <motion.a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition border"
                    id="code-button"
                  >
                    🔗 Source Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
