export default function Skills() {
  const skills = [
    "SQL",
    "Python",
    "Power BI",
    "Excel",
    "Tableau",
    "MySQL",
    "PostgreSQL",
    "DAX",
    "Power Query",
    "Pandas",
    "NumPy",
    "Machine Learning",
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 ..."
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:border-blue-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}