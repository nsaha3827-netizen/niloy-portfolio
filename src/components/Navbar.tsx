export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">
          Data with Niloy
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-blue-400 transition">
  About
</a>

<a href="#expertise" className="hover:text-blue-400 transition">
  Expertise
</a>

<a href="#experience" className="hover:text-blue-400 transition">
  Experience
</a>

<a href="#skills" className="hover:text-blue-400 transition">
  Skills
</a>

<a href="#projects" className="hover:text-blue-400 transition">
  Projects
</a>

<a href="#certificates" className="hover:text-blue-400 transition">
  Certificates
</a>

<a href="#linkedin" className="hover:text-blue-400 transition">
  LinkedIn
</a>

<a href="#contact" className="hover:text-blue-400 transition">
  Contact
</a>
        </div>
      </div>
    </nav>
  );
}