interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  color: "blue" | "orange" | "green" | "purple";
}

function MetricCard({ title, value, unit, color }: MetricCardProps) {
  const colorClasses = {
    blue: "bg-blue-100 bg-blue-600",
    orange: "bg-orange-100 bg-orange-600",
    green: "bg-green-100 bg-green-600",
    purple: "bg-purple-100 bg-purple-600",
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{unit}</p>
        </div>
        <div
          className={`h-12 w-12 ${
            colorClasses[color].split(" ")[0]
          } rounded-lg flex items-center justify-center`}
        >
          <div
            className={`h-6 w-6 ${colorClasses[color].split(" ")[1]} rounded`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export function MetricsCards() {
  const metrics = [
    {
      title: "ACTIVE EQUIPMENT",
      value: "125",
      unit: "units",
      color: "blue" as const,
    },
    {
      title: "UNDER MAINTENANCE",
      value: "18",
      unit: "units",
      color: "orange" as const,
    },
    { title: "MTBF", value: "210", unit: "days", color: "green" as const },
    { title: "MTTR", value: "4.5", unit: "hours", color: "purple" as const },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
