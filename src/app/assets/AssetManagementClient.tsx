"use client";

import { useMemo, useState } from "react";
import { AssetManagementHeader } from "@/components/AssetManagementHeader";
import { AssetFilters, Filters } from "@/components/AssetsFilter";
import { AssetsTable, Asset } from "@/components/AssetsTable";

const ALL_ASSETS: Asset[] = [
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

export default function AssetManagementClient() {
  const [filters, setFilters] = useState<Filters>({
    q: "",
    type: "All",
    location: "All",
    status: "All",
  });

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();

    return ALL_ASSETS.filter((a) => {
      const matchQ =
        !q ||
        a.id.toLowerCase().includes(q) ||
        a.name.toLowerCase().includes(q) ||
        a.model.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q) ||
        a.type.toLowerCase().includes(q) ||
        a.status.toLowerCase().includes(q);

      const matchType = filters.type === "All" || a.type === filters.type;
      const matchLoc =
        filters.location === "All" || a.location === filters.location;
      const matchStatus =
        filters.status === "All" || a.status === filters.status;

      return matchQ && matchType && matchLoc && matchStatus;
    });
  }, [filters]);

  return (
    <div className="flex flex-col gap-6 p-6">
      <AssetManagementHeader />
      <AssetFilters value={filters} onChange={setFilters} />
      <AssetsTable assets={filtered} />
    </div>
  );
}
