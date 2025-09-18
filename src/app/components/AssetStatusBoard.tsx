interface Asset {
  name: string;
  status: string;
  color: "green" | "yellow" | "red";
}

export function AssetStatusBoard() {
  const assets: Asset[] = [
    { name: "Turbine Generator #1", status: "OK", color: "green" },
    { name: "Conveyor Belt System", status: "Preventive Due", color: "yellow" },
    { name: "Hydraulic Press Unit", status: "Critical", color: "red" },
    { name: "Robotic Arm A", status: "OK", color: "green" },
    { name: "HVAC Unit 3B", status: "Preventive Due", color: "yellow" },
    { name: "Packaging Machine X", status: "OK", color: "green" },
    { name: "Forklift Y", status: "Critical", color: "red" },
  ];

  const getStatusClasses = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-100 text-green-800";
      case "yellow":
        return "bg-yellow-100 text-yellow-800";
      case "red":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Asset Status Board
      </h2>
      <div className="space-y-3">
        {assets.map((asset, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <span className="text-sm font-medium text-gray-900">
              {asset.name}
            </span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClasses(
                asset.color
              )}`}
            >
              {asset.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
