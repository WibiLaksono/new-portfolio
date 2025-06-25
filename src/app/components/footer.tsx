import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center flex-col pt-20 pb-10 animate-fade-in">
      <h1 className=" font-bold text-lg md:text-2xl">Get In Touch</h1>

      <p className="text-center mt-4 max-w-xl text-sm md:text-base">
        I’m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>

      {/* Social Media Icons */}
      <div className="flex flex-row mt-10 gap-6 md:gap-8 lg:gap-10">
        <div className="relative group">
          <a
            href="https://www.instagram.com/ayabiiii_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center bg-white hover:bg-gray-300 rounded-full p-2"
          >
            <Image
              src="/ig.png"
              alt="Instagram"
              width={48}
              height={48}
              className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[2.5rem] lg:h-[2.5rem]"
            />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
            instagram
          </span>
        </div>
        <div className="relative group">
          <a
            href="https://linkedin.com/in/wibi-laksono-wijaya-4139672b6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center bg-white hover:bg-gray-300 rounded-full p-2"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={48}
              height={48}
              className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[2.5rem] lg:h-[2.5rem]"
            />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
            Linkedin
          </span>
        </div>
        <div className="relative group">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=wibilaksonowijaya@mail.ugm.ac.id&su=DISKUSI%20DARI%20WEB%20PORTOFOLIO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center bg-white hover:bg-gray-300 rounded-full p-2"
          >
            <Image
              src="/email.png"
              alt="Email"
              width={48}
              height={48}
              className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[2.5rem] lg:h-[2.5rem]"
            />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
            Email
          </span>
        </div>
        <div className="relative group">
          <a
            href="https://github.com/WibiLaksono"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center bg-white hover:bg-gray-300 rounded-full p-2"
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={48}
              height={48}
              className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[2.5rem] lg:h-[2.5rem]"
            />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
            Github
          </span>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center text-xs md:text-sm mt-10">
        &copy; {new Date().getFullYear()} Wibi Laksono Wijaya. All rights
        reserved.
      </p>
      <p className="text-xs md:text-sm mt-1">
        Made with ❤️ using Next.js and Tailwind CSS.
      </p>
    </footer>
  );
}
