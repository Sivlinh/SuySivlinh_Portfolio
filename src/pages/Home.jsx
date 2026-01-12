export default function Home() {
  return (
    <section
      id="home"
      className="pt-32 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Hi, I’m <span className="text-indigo-500">Sivlinh</span>
          </h1>

          <p className="mt-4 text-lg text-gray-400 max-w-md">
            A computer science student and a passionate developer focused on building clean and modern website and know some about backend.
          
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 rounded-lg hover:border-indigo-500 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/MyPic/linh.jpg"
            alt="Linh"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-indigo-500/30 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
