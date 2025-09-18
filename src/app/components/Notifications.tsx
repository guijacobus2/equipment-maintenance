interface Notification {
  title: string;
  subtitle?: string;
  time: string;
  type: "warning" | "info";
}

export function Notifications() {
  const notifications: Notification[] = [
    {
      title: "Turbine #1 Overdue Maintenance.",
      subtitle: "Schedule immediately!",
      time: "2 hours ago",
      type: "warning",
    },
    {
      title: "Hydraulic Press Unit high vibration detected.",
      subtitle: "Predictive warning.",
      time: "1 day ago",
      type: "warning",
    },
    {
      title: "New software update available for OptiMaintain AI.",
      subtitle: "",
      time: "3 days ago",
      type: "info",
    },
    {
      title: "Check inventory for spare parts:",
      subtitle: "Compressor filter low stock.",
      time: "4 days ago",
      type: "warning",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Notifications
      </h2>
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className={`mt-1 h-2 w-2 rounded-full ${
                notification.type === "warning"
                  ? "bg-yellow-500"
                  : "bg-blue-500"
              }`}
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                {notification.title}
              </p>
              {notification.subtitle && (
                <p className="text-sm text-gray-600">{notification.subtitle}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
