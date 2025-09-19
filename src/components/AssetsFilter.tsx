"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Activity } from "lucide-react";

export function AssetFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white p-4 rounded-lg border">
      <div className="flex flex-col sm:flex-row gap-3 flex-1">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4" />
          <Input
            placeholder="Search assets..."
            className="pl-10 text-gray-600"
          />
        </div>

        <div className="flex gap-3">
          <select className="px-3 py-2 border border-gray-300 text-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>All Types</option>
            <option>Manufacturing</option>
            <option>Logistics</option>
            <option>Utilities</option>
            <option>Packaging</option>
          </select>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select className="pl-10 pr-8 py-2 border border-gray-300 text-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white">
              <option>All Locations</option>
              <option>Production Line A</option>
              <option>Warehouse B</option>
              <option>Workshop A</option>
              <option>Utility Room</option>
              <option>Packing Area</option>
            </select>
          </div>

          <div className="relative">
            <Activity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select className="pl-10 pr-8 py-2 border border-gray-300 text-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Maintenance Due</option>
              <option>Critical</option>
            </select>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        className="whitespace-nowrap bg-transparent text-gray-600"
      >
        Apply Filters
      </Button>
    </div>
  );
}
