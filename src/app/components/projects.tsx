import Image from "next/image";

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
            "Web for Indonesian news sentiment classification (NLP + FastAPI).",
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
    <div className="mx-auto px-6 md:px-20 py-2 text-black">
      <h2 className="text-xl font-bold mb-8 text-black uppercase tracking-wider">
        Selected Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col"
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
                <p className="text-sm text-gray-500 mt-1">{project.date}</p>
                <p className="text-sm mt-2">{project.description}</p>
                <p className="text-sm italic mt-1">{project.role}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tag.split(",").map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-800 text-[10px] hover:bg-gray-300 px-3 py-1 rounded-full"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-3 flex-wrap">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black text-white text-xs hover:bg-gray-800 transition"
                  >
                    🌐 Website
                  </a>
                )}
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-2 py-2 rounded-full border border-black text-black text-xs hover:bg-gray-100 transition"
                  >
                    🔗 Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
