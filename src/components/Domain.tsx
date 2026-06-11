export default function Domain() {
  const domains = [
    {
      title: "Sales Analytics",
      description:
        "Analyzed large-scale sales data to identify revenue drivers, profitability trends and growth opportunities.",
    },
    {
      title: "E-Commerce Analytics",
      description:
        "Performed customer segmentation, retention analysis and product performance evaluation using SQL and Python.",
    },
    {
      title: "Inventory Analytics",
      description:
        "Identified stockout risks, overstock situations and inventory optimization opportunities.",
    },
    {
      title: "Business Intelligence",
      description:
        "Built KPI dashboards, executive reports and forecasting solutions using Power BI and SQL.",
    },
    {
      title: "Trading Analytics",
      description:
        "Developed dashboards tracking capital growth, risk metrics, win rates and trading performance.",
    },
    {
      title: "Customer Analytics",
      description:
        "Applied analytical techniques to understand customer behavior, value and retention opportunities.",
    },
  ];

  return (
    <section
      id="expertise"
      className="py-24 bg-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Domain Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {domain.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}