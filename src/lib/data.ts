export const PERSONAL = {
  name: "Niloy Saha",
  title: "Data Analyst",
  email: "nsaha3827@gmail.com",
  github: "https://github.com/nsaha3827-netizen",
  linkedin: "https://www.linkedin.com/in/niloysaha-analyst/",
  location: "Kolkata, West Bengal, India",
  resumeFile: "/Niloy_Saha_Data_Analyst_Resume.pdf",
  bio: "I'm a Mathematics Honours graduate turned Data Analyst with a passion for transforming complex datasets into clear, actionable business insights. I specialize in building end-to-end analytics pipelines — from SQL querying and Python-based EDA to interactive Power BI dashboards that help stakeholders make smarter decisions.",
  bio2:
    "Whether it's uncovering churn patterns in a retail dataset, building trading dashboards for real clients, or automating reporting workflows, I bring a rigorous, problem-first mindset to every data challenge.",
  typingRoles: [
    "Data Analyst",
    "SQL Developer",
    "Power BI Developer",
    "Python Analyst",
    "BI Specialist",
  ],
};

export const STATS = [
  { value: 6, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Tools Mastered" },
  { value: 1200000, suffix: "+", label: "Records Analyzed" },
  { value: 44, suffix: "+", label: "SQL Queries Written" },
];

export const SKILLS = [
  {
    category: "Data Analysis",
    icon: "BarChart2",
    color: "#6c63ff",
    skills: [
      { name: "SQL", level: 88 },
      { name: "Excel", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Python", level: 72 },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "#22d3ee",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "PostgreSQL", level: 78 },
    ],
  },
  {
    category: "Visualization",
    icon: "PieChart",
    color: "#a78bfa",
    skills: [
      { name: "Power BI & DAX", level: 80 },
      { name: "Excel Dashboards", level: 85 },
      { name: "Matplotlib / Seaborn", level: 70 },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "Wrench",
    color: "#34d399",
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "VS Code", level: 88 },
      { name: "Pandas", level: 74 },
      { name: "Power Query", level: 78 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Customer Churn Analysis",
    description:
      "End-to-end churn prediction pipeline using Logistic Regression with SMOTE for class imbalance. Built a Django web app deployed on Railway to serve predictions in real time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["Python", "Scikit-learn", "Django", "SMOTE", "SQL"],
    category: "Machine Learning",
    github: "https://github.com/nsaha3827-netizen",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: "Sales Performance Dashboard",
    description:
      "Interactive Power BI dashboard analyzing Maven Toys sales data with YoY comparisons, product-level KPIs, DAX measures, and drill-through reports for regional performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tags: ["Power BI", "DAX", "Power Query", "Excel"],
    category: "Business Intelligence",
    github: "https://github.com/nsaha3827-netizen",
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: "HR Analytics Dashboard",
    description:
      "Workforce analytics solution tracking attrition rate, headcount trends, department-wise salary distribution, and performance correlation using Power BI and SQL.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    tags: ["Power BI", "SQL", "DAX", "Excel"],
    category: "Business Intelligence",
    github: "https://github.com/nsaha3827-netizen",
    demo: null,
    featured: false,
  },
  {
    id: 4,
    title: "E-commerce Data Analysis",
    description:
      "Exploratory data analysis on a 1.2M-record online dataset using Python and Pandas. Uncovered customer segments, basket analysis patterns, and revenue attribution insights.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    category: "EDA",
    github: "https://github.com/nsaha3827-netizen",
    demo: null,
    featured: false,
  },
  {
    id: 5,
    title: "Financial Dashboard in Excel",
    description:
      "Freelance-delivered trading dashboard for a real client. Features dynamic PnL tracking, position sizing calculator, win-rate analysis, and multi-asset performance charts.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    tags: ["Excel", "VBA", "Power Query", "Charts"],
    category: "Excel",
    github: "https://github.com/nsaha3827-netizen",
    demo: null,
    featured: true,
  },
  {
    id: 6,
    title: "SQL Business Insights",
    description:
      "44-question SQL case study covering window functions, CTEs, JOINs, subqueries, and business scenarios across retail, HR, and finance datasets in PostgreSQL.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    tags: ["PostgreSQL", "MySQL", "CTEs", "Window Functions"],
    category: "SQL",
    github: "https://github.com/nsaha3827-netizen",
    demo: null,
    featured: false,
  },
];

export const PROJECT_CATEGORIES = ["All", "Business Intelligence", "Machine Learning", "EDA", "Excel", "SQL"];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Data Analytics Intern",
    company: "Training & Internship Program",
    period: "2023 – 2024",
    type: "Internship",
    description:
      "Completed structured data analytics training covering SQL, Python, Power BI, and Excel. Built end-to-end projects across retail, HR, and finance domains. Developed ML models for churn prediction and sales forecasting.",
    highlights: [
      "Built 6+ data projects across retail, HR, and e-commerce",
      "Mastered DAX and Power Query in Power BI",
      "Developed ML pipelines using Python and scikit-learn",
      "Wrote 44 SQL queries covering advanced analytical patterns",
    ],
    color: "#6c63ff",
  },
  {
    id: 2,
    role: "Freelance Data Analyst",
    company: "Independent Client Work",
    period: "2024 – Present",
    type: "Freelance",
    description:
      "Delivered a production-ready trading analytics dashboard in Excel for a real client. Handled full project lifecycle: requirements gathering, data modelling, dashboard design, and client handoff.",
    highlights: [
      "Delivered Power BI trading dashboard to a paying client",
      "Built dynamic PnL tracking with multi-asset analysis",
      "Managed direct client communication and revisions",
      "Produced educational math content as a side engagement",
    ],
    color: "#22d3ee",
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "SQL for Data Analytics",
    issuer: "Add your certification issuer",
    date: "2024",
    credentialId: "—",
    badge: "SQL",
    color: "#6c63ff",
    link: "#",
  },
  {
    id: 2,
    title: "Advanced Excel & Dashboard Design",
    issuer: "Add your certification issuer",
    date: "2024",
    credentialId: "—",
    badge: "XL",
    color: "#22d3ee",
    link: "#",
  },
  {
    id: 3,
    title: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "—",
    badge: "PBI",
    color: "#a78bfa",
    link: "#",
  },
  {
    id: 4,
    title: "Data Analytics Professional Certificate",
    issuer: "Add your certification issuer",
    date: "2024",
    credentialId: "—",
    badge: "DA",
    color: "#34d399",
    link: "#",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
