import { PERSONAL } from "@/lib/data";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL.name,
    jobTitle: PERSONAL.title,
    description:
      "Data Analyst specializing in SQL, Power BI, Python and Excel. Based in Kolkata, India.",
    url: "https://niloysaha.dev",
    email: PERSONAL.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    sameAs: [PERSONAL.github, PERSONAL.linkedin],
    knowsAbout: [
      "SQL",
      "Power BI",
      "Python",
      "Excel",
      "Data Analysis",
      "Business Intelligence",
      "PostgreSQL",
      "MySQL",
      "Data Visualization",
      "DAX",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "West Bengal State University",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
