import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 px-4">
      {/* Header Navigation */}
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto">
        <nav className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg">
          <ul className="flex items-center justify-between md:gap-6 gap-3 text-xs md:text-sm">
            <li>
              <a
                href="#skills"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <Link
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="max-w-4xl w-full space-y-8 md:space-y-12 pt-32 pb-12 mx-auto">
        {/* Profile Section - Image and Text Side by Side */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text and Social Links */}
          <div className="space-y-6 text-center md:text-left">
            {/* Name and Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Arham Gill
              </h1>
              <p className="text-base md:text-lg text-gray-400 font-light tracking-wider mt-2">
                Full Stack Web Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center md:justify-start">
              {/* GitHub */}
              <Link
                href="https://github.com/arhamgill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors flex items-center"
                aria-label="GitHub"
              >
                <svg
                  className="w-14 h-14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/arhamgilldev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors flex items-center"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-11 h-11"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>

              {/* Twitter/X */}
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors flex items-center"
                aria-label="Twitter"
              >
                <svg
                  className="w-11 h-11"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base text-gray-300 leading-relaxed text-left bg-slate-800 p-6 rounded-lg">
            I'm a passionate web developer with experience in building modern,
            responsive web applications. I specialize in creating seamless user
            experiences using cutting-edge technologies and best practices. With
            a strong foundation in both frontend and backend development, I
            bring ideas to life through clean, efficient, and scalable code.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Skills
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-white font-semibold mb-3">Languages</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-300 text-slate-900">
                  JavaScript
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500 text-white">
                  TypeScript
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-400 text-white">
                  Python
                </span>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">
                Frameworks & Libraries
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-400 text-slate-900">
                  React
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-600 text-white">
                  Node.js
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-900">
                  Next.js
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-slate-600 text-white">
                  Express
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-emerald-600 text-white">
                  Django
                </span>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">Databases</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-500 text-white">
                  MongoDB
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-emerald-500 text-white">
                  Supabase
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-orange-500 text-white">
                  Convex
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-red-500 text-white">
                  Sanity
                </span>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">Other Tools</p>
              <div className="flex flex-wrap gap-3">
                {/* <span className="px-4 py-2 rounded-full text-sm font-medium bg-orange-600 text-white">
                  Git
                </span> */}
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500 text-white">
                  Docker
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-orange-400 text-slate-900">
                  AWS
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-900">
                  Vercel
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500 text-white">
                  Render
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-violet-500 text-white">
                  Stripe
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                Freelance Full Stack Developer
              </h3>
              <div className="mb-4 flex items-center gap-3 flex-wrap">
                <a
                  href="https://www.fiverr.com/arhamgill92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-sm font-medium bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  Fiverr
                </a>
                <span className="text-gray-400">• 2024 - Present</span>
              </div>
              <p className="text-gray-300">
                I work on fiverr as a full stack web devloper building diverse
                websites for my clinets. I have gained expertise in building
                websites from scratch and debugging.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                Junior Web Developer
              </h3>
              <div className="mb-4 flex items-center gap-3 flex-wrap">
                <a
                  href="https://metawibe.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500 text-white hover:bg-purple-600 transition-colors"
                >
                  Meta Wibe
                </a>
                <span className="text-gray-400">• May 2025 - August 2025</span>
              </div>
              <p className="text-gray-300">
                I worked at Meta Wibe during the summer of 2025. I contributed
                to a number of ongoing projects which helped me strengthen my
                web dev skills.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                React Developer Intern
              </h3>
              <div className="mb-4 flex items-center gap-3 flex-wrap">
                <a
                  href="https://www.exytex.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  Exytex Technologies
                </a>
                <span className="text-gray-400">• June 2024 - August 2024</span>
              </div>
              <p className="text-gray-300">
                I worled as an intern at Exyter Technologies in 2024. It was
                mostly a learning experience which helped me start my journey as
                a professional web developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">
                E-Commerce Platform
              </h3>
              <p className="text-gray-300 mb-4">
                A full-stack e-commerce solution with payment integration and
                admin dashboard.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">
                  React
                </span>
                <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">
                  Node.js
                </span>
                <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">
                  MongoDB
                </span>
              </div>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">
                Task Management App
              </h3>
              <p className="text-gray-300 mb-4">
                A collaborative task management tool with real-time updates and
                team features.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">
                  Next.js
                </span>
                <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">
                  TypeScript
                </span>
                <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Contact
          </h2>
          <div className="bg-slate-800 p-8 rounded-lg max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:arhamgill.dev@gmail.com"
                    className="text-white hover:text-gray-300"
                  >
                    arhamgill.dev@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:+923348539681"
                    className="text-white hover:text-gray-300"
                  >
                    +92 334 8539681
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/arhamgilldev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    linkedin.com/in/arhamgilldev
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
