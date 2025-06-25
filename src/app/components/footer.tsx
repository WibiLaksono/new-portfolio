import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center flex-col py-20">
      <h1 className="text-black font-bold text-2xl">Get In Touch</h1>

      <p className="text-center text-gray-600 dark:text-gray-400 mt-4 max-w-xl">
        I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      {/* Social Media Icons */}
      <div className="flex flex-row mt-10 gap-6 md:gap-8 lg:gap-10">
        <a
          href="https://www.instagram.com/ayabiiii_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <Image
            src="/ig.png"
            alt="Instagram"
            width={48}
            height={48}
            className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[2.5rem] lg:h-[2.5rem]"
          />
        </a>
        <a
          href="https://linkedin.com/in/wibi-laksono-wijaya-4139672b6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={48}
            height={48}
            className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[2.5rem] lg:h-[2.5rem]"
          />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=wibilaksonowijaya@mail.ugm.ac.id&su=DISKUSI%20DARI%20WEB%20PORTOFOLIO"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <Image
            src="/email.png"
            alt="Email"
            width={48}
            height={48}
            className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[2.5rem] lg:h-[2.5rem]"
          />
        </a>
        <a
          href="https://github.com/WibiLaksono"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <Image
            src="/github.png"
            alt="GitHub"
            width={48}
            height={48}
            className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[2.5rem] lg:h-[2.5rem]"
          />
        </a>
      </div>

      {/* Footer Note */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Wibi Laksono Wijaya. All rights reserved.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Made with ❤️ using Next.js and Tailwind CSS.
      </p>
    </footer>
  );
}
