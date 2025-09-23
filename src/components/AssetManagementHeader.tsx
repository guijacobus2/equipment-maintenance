"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface AssetManagementHeaderProps {
  onAddAsset: () => void;
}

export function AssetManagementHeader({
  onAddAsset,
}: AssetManagementHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-900">Asset Management</h1>
      <Button
        onClick={onAddAsset}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Asset
      </Button>
    </div>
  );
}
