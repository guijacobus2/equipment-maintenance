"use client";

import { useMemo, useState } from "react";
import { AssetManagementHeader } from "@/components/AssetManagementHeader";
import { AssetFilters, Filters } from "@/components/AssetsFilter";
import { AssetsTable, Asset } from "@/components/AssetsTable";
import { AddAssetModal, NewAsset } from "@/components/AddAssetModal";

const ALL_ASSETS: Asset[] = [
  {
    id: "AM-001-A",
    name: "Injection Molding Machine",
    type: "Manufacturing",
    manufacturer: "PlasticTech",
    model: "InjectPro 5000",
    acquisitionDate: "2022-03-15",
    expectedLifespan: 8,
    location: "Production Line A",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "AM-002-B",
    name: "Forklift Hyster H40",
    type: "Logistics",
    manufacturer: "Hyster",
    model: "Hyster H40X",
    acquisitionDate: "2021-08-22",
    expectedLifespan: 10,
    location: "Warehouse B",
    status: "Maintenance Due",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "AM-003-C",
    name: "CNC Milling Machine",
    type: "Manufacturing",
    manufacturer: "Haas Automation",
    model: "Haas VF-2",
    acquisitionDate: "2023-01-10",
    expectedLifespan: 12,
    location: "Workshop A",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "AM-004-D",
    name: "Air Compressor Atlas Copco",
    type: "Utilities",
    manufacturer: "Atlas Copco",
    model: "GA 75 VSD+",
    acquisitionDate: "2020-11-05",
    expectedLifespan: 15,
    location: "Utility Room",
    status: "Critical",
    statusColor: "bg-red-100 text-red-800",
  },
  {
    id: "AM-005-E",
    name: "Packaging Line AutoPack",
    type: "Packaging",
    manufacturer: "PackMaster Inc",
    model: "PackMaster 3000",
    acquisitionDate: "2023-06-18",
    expectedLifespan: 7,
    location: "Packing Area",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
];

export default function AssetManagementClient() {
  const [filters, setFilters] = useState<Filters>({
    q: "",
    type: "All",
    location: "",
    status: "All",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assets, setAssets] = useState<Asset[]>(ALL_ASSETS);

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();

    return assets.filter((a) => {
      const matchQ =
        !q ||
        a.id.toLowerCase().includes(q) ||
        a.name.toLowerCase().includes(q) ||
        a.model.toLowerCase().includes(q) ||
        a.manufacturer.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q) ||
        a.type.toLowerCase().includes(q) ||
        a.status.toLowerCase().includes(q);

      const matchType = filters.type === "All" || a.type === filters.type;
      const matchLoc =
        !filters.location.trim() ||
        a.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchStatus =
        filters.status === "All" || a.status === filters.status;

      return matchQ && matchType && matchLoc && matchStatus;
    });
  }, [filters, assets]);

  const handleAddAsset = (newAsset: NewAsset) => {
    const assetId = `AM-${String(assets.length + 1).padStart(
      3,
      "0"
    )}-${String.fromCharCode(65 + (assets.length % 26))}`;

    // Generate a name from manufacturer and model
    const assetName = `${newAsset.manufacturer} ${newAsset.model}`;

    // Determine type based on manufacturer (simple logic for demo)
    const typeOptions: Asset["type"][] = [
      "Manufacturing",
      "Logistics",
      "Utilities",
      "Packaging",
    ];
    const assetType = typeOptions[assets.length % typeOptions.length];

    // Use location from form
    const assetLocation = newAsset.location;

    // Determine status (new assets are typically Active)
    const assetStatus: Asset["status"] = "Active";
    const statusColor = "bg-green-100 text-green-800";

    const newAssetData: Asset = {
      id: assetId,
      name: assetName,
      type: assetType,
      manufacturer: newAsset.manufacturer,
      model: newAsset.model,
      acquisitionDate: newAsset.acquisitionDate,
      expectedLifespan: newAsset.expectedLifespan,
      location: assetLocation,
      status: assetStatus,
      statusColor: statusColor,
    };

    setAssets((prev) => [...prev, newAssetData]);
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <AssetManagementHeader onAddAsset={() => setIsModalOpen(true)} />
      <AssetFilters value={filters} onChange={setFilters} />
      <AssetsTable assets={filtered} />
      <AddAssetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddAsset}
      />
    </div>
  );
}
