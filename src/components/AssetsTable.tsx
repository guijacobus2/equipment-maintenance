"use client";

import { Button } from "@/components/ui/button";
import { MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

const assets = [
  {
    id: "AM-001-A",
    name: "Injection Molding Machine",
    type: "Manufacturing",
    model: "InjectPro 5000",
    location: "Production Line A",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "AM-002-B",
    name: "Forklift Hyster H40",
    type: "Logistics",
    model: "Hyster H40X",
    location: "Warehouse B",
    status: "Maintenance Due",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "AM-003-C",
    name: "CNC Milling Machine",
    type: "Manufacturing",
    model: "Haas VF-2",
    location: "Workshop A",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "AM-004-D",
    name: "Air Compressor Atlas Copco",
    type: "Utilities",
    model: "GA 75 VSD+",
    location: "Utility Room",
    status: "Critical",
    statusColor: "bg-red-100 text-red-800",
  },
  {
    id: "AM-005-E",
    name: "Packaging Line AutoPack",
    type: "Packaging",
    model: "PackMaster 3000",
    location: "Packing Area",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
];

export function AssetsTable() {
  return (
    <div className="bg-white rounded-lg border">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold text-gray-900">Current Assets</h2>
        <p className="text-sm text-gray-600 mt-1">
          Overview of all registered equipment.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="w-12 px-6 py-3 text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                QR Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Asset Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Model
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {asset.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {asset.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {asset.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {asset.model}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {asset.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${asset.statusColor}`}
                  >
                    {asset.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-600">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t bg-gray-50 flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 bg-transparent text-gray-600"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 p-0 bg-transparent"
          >
            1
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 p-0 bg-transparent"
          >
            2
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 p-0 bg-transparent"
          >
            3
          </Button>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 bg-transparent text-gray-600"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
