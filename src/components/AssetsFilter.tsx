"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Activity } from "lucide-react";

export type Filters = {
  q: string;
  type: "All" | "Manufacturing" | "Logistics" | "Utilities" | "Packaging";
  location:
    | "All"
    | "Production Line A"
    | "Warehouse B"
    | "Workshop A"
    | "Utility Room"
    | "Packing Area";
  status: "All" | "Active" | "Maintenance Due" | "Critical";
};

export function AssetFilters({
  value,
  onChange,
}: {
  value: Filters;
  onChange: (next: Filters) => void;
}) {
  const set = <K extends keyof Filters>(key: K, v: Filters[K]) =>
    onChange({ ...value, [key]: v });

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white p-4 rounded-lg border">
      <div className="flex flex-col sm:flex-row gap-3 flex-1">
        <div className="relative flex-1 max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
          <Input
            placeholder="Search assets..."
            className="pl-10 text-gray-700"
            value={value.q}
            onChange={(e) => set("q", e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <select
            className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={value.type}
            onChange={(e) => set("type", e.target.value as Filters["type"])}
          >
            <option>All</option>
            <option>Manufacturing</option>
            <option>Logistics</option>
            <option>Utilities</option>
            <option>Packaging</option>
          </select>

          <div className="relative">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              className="pl-10 pr-8 py-2 border border-gray-300 text-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              value={value.location}
              onChange={(e) =>
                set("location", e.target.value as Filters["location"])
              }
            >
              <option>All</option>
              <option>Production Line A</option>
              <option>Warehouse B</option>
              <option>Workshop A</option>
              <option>Utility Room</option>
              <option>Packing Area</option>
            </select>
          </div>

          <div className="relative">
            <Activity className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              className="pl-10 pr-8 py-2 border border-gray-300 text-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              value={value.status}
              onChange={(e) =>
                set("status", e.target.value as Filters["status"])
              }
            >
              <option>All</option>
              <option>Active</option>
              <option>Maintenance Due</option>
              <option>Critical</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
