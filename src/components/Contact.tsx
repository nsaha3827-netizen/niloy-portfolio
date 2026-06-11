export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-black text-white flex justify-center"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-5xl font-bold mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:nsaha3827@gmail.com"
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-400">
              nsaha3827@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/nsaha3827-netizen"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <p className="text-gray-400">
              View Projects
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/niloysaha-analyst/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <p className="text-gray-400">
              Connect With Me
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}