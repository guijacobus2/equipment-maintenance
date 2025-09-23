"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

export interface NewAsset {
  manufacturer: string;
  model: string;
  acquisitionDate: string;
  expectedLifespan: number;
  location: string;
}

interface AddAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (asset: NewAsset) => void;
}

export function AddAssetModal({
  isOpen,
  onClose,
  onSubmit,
}: AddAssetModalProps) {
  const [formData, setFormData] = useState<NewAsset>({
    manufacturer: "",
    model: "",
    acquisitionDate: "",
    expectedLifespan: 5,
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      manufacturer: "",
      model: "",
      acquisitionDate: "",
      expectedLifespan: 5,
      location: "",
    });
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleChange = (field: keyof NewAsset, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in-0 duration-200"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-full max-w-md mx-4 animate-in fade-in-0 zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Add New Asset</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label
              htmlFor="manufacturer"
              className="text-sm font-medium text-gray-700"
            >
              Manufacturer
            </Label>
            <Input
              id="manufacturer"
              type="text"
              value={formData.manufacturer}
              onChange={(e) => handleChange("manufacturer", e.target.value)}
              placeholder="Enter manufacturer"
              className="w-full text-gray-600 border-gray-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="model"
              className="text-sm font-medium text-gray-700"
            >
              Model
            </Label>
            <Input
              id="model"
              type="text"
              value={formData.model}
              onChange={(e) => handleChange("model", e.target.value)}
              placeholder="Enter model"
              className="w-full text-gray-600 border-gray-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="acquisitionDate"
              className="text-sm font-medium text-gray-700"
            >
              Acquisition Date
            </Label>
            <Input
              id="acquisitionDate"
              type="date"
              value={formData.acquisitionDate}
              onChange={(e) => handleChange("acquisitionDate", e.target.value)}
              className="w-full text-gray-600 border-gray-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="expectedLifespan"
              className="text-sm font-medium text-gray-700"
            >
              Expected Lifespan (years)
            </Label>
            <Input
              id="expectedLifespan"
              type="number"
              min="1"
              max="50"
              value={formData.expectedLifespan}
              onChange={(e) =>
                handleChange("expectedLifespan", parseInt(e.target.value) || 5)
              }
              className="w-full text-gray-600 border-gray-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="location"
              className="text-sm font-medium text-gray-700"
            >
              Location
            </Label>
            <div className="relative">
              <Input
                id="location"
                type="text"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="Enter location (e.g., Building A - Floor 2 - Room 201)"
                className="w-full text-gray-600 border-gray-300"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                  Free text
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              💡 Tip: Use consistent naming like &quot;Building - Floor -
              Room&quot; for better organization
            </p>
          </div>

          <div className="flex gap-3 pt-6 border-t border-gray-100">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 h-10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium"
            >
              Add Asset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
