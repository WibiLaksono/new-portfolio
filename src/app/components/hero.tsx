import Image from "next/image";

export default function Hero() {

  return (
    <div className="flex flex-col md:flex-row justify-between text-black h-full py-10 px-6 md:px-20">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I&#39;m Wibi <span className="inline-block animate-wave">👋</span>
        </h1>

        <p className="text-base md:text-xl mt-6">
          Software Developer with a strong passion for fullstack development and system design. I love bringing ideas to life — from scratch, architecture, technology choices, UI/UX design, implementation, testing, and deployment.
        </p>

        <h2 className="mt-10 font-bold text-xl">About</h2>
        <p className=" text-sm md:text-base mt-2">
          I mainly work with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>PHP</strong>, and <strong>Node.js</strong>. 
          I also actively explore advanced topics like <strong>AI</strong>, <strong>Machine Learning</strong>, <strong>Big Data</strong>, <strong>IoT</strong>, and <strong>Scalable Application Development</strong>.
        </p>

        <p className="text-base mt-2">
          Currently, I’m studying Computer Science at <strong>Universitas Gadjah Mada</strong> 🎓 and continuously working on meaningful and impactful digital products.
        </p>
      </div>

      <div className="mt-5 flex flex-col w-full md:w-64 items-center ">
        <Image
          src="/bibi.png"
          alt="Wibi Laksono"
          width={170}
          height={170}
          className="md:w-100 md:h-100 w-40 h-60 rounded-full border-4 border-gray-600 shadow-lg shadow-gray-800 object-cover"
        />
      </div>
    </div>
  );
}
