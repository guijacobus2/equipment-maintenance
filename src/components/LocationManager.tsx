"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, MapPin, X } from "lucide-react";

interface Location {
  id: string;
  name: string;
  description?: string;
}

interface LocationManagerProps {
  locations: Location[];
  onAddLocation: (location: Omit<Location, "id">) => void;
  onRemoveLocation: (id: string) => void;
}

export function LocationManager({
  locations,
  onAddLocation,
  onRemoveLocation,
}: LocationManagerProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [newLocation, setNewLocation] = useState({ name: "", description: "" });

  const handleAdd = () => {
    if (newLocation.name.trim()) {
      onAddLocation(newLocation);
      setNewLocation({ name: "", description: "" });
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Company Locations
        </h3>
        <Button
          onClick={() => setIsAdding(true)}
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Location
        </Button>
      </div>

      {isAdding && (
        <div className="mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="space-y-3">
            <div>
              <Label htmlFor="location-name" className="text-sm font-medium">
                Location Name
              </Label>
              <Input
                id="location-name"
                value={newLocation.name}
                onChange={(e) =>
                  setNewLocation({ ...newLocation, name: e.target.value })
                }
                placeholder="e.g., Building A - Floor 2"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="location-desc" className="text-sm font-medium">
                Description (Optional)
              </Label>
              <Input
                id="location-desc"
                value={newLocation.description}
                onChange={(e) =>
                  setNewLocation({
                    ...newLocation,
                    description: e.target.value,
                  })
                }
                placeholder="e.g., Manufacturing floor with heavy machinery"
                className="mt-1"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAdd} size="sm">
                Add Location
              </Button>
              <Button
                onClick={() => setIsAdding(false)}
                variant="outline"
                size="sm"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {locations.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-4">
            No locations added yet. Add your first location to get started.
          </p>
        ) : (
          locations.map((location) => (
            <div
              key={location.id}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div>
                <p className="font-medium text-gray-900">{location.name}</p>
                {location.description && (
                  <p className="text-sm text-gray-500">
                    {location.description}
                  </p>
                )}
              </div>
              <Button
                onClick={() => onRemoveLocation(location.id)}
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
