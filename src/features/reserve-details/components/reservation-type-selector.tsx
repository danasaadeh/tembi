import React from "react";
import type { ReservationType } from "../types";

interface ReservationTypeSelectorProps {
  selectedType: ReservationType;
  onTypeChange: (type: ReservationType) => void;
}

const reservationTypes = [
  {
    type: "single" as ReservationType,
    label: "Reserve a table",
    image: "src/assets/images/reserve/a table.svg",
  },
  {
    type: "multiple" as ReservationType,
    label: "Reserve multiple tables",
    image: "src/assets/images/reserve/tables.svg",
  },
  {
    type: "restaurant" as ReservationType,
    label: "Reserve all restaurant",
    image: "src/assets/images/reserve/all.svg",
  },
  {
    type: "event" as ReservationType,
    label: "Reserve for Event",
    image: "src/assets/images/reserve/Event.svg",
  },
];

export default function ReservationTypeSelector({
  selectedType,
  onTypeChange,
}: ReservationTypeSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {reservationTypes.map((item) => (
        <button
          key={item.type}
          onClick={() => onTypeChange(item.type)}
          className={`p-4 rounded-lg border-2 transition-all hover:border-gray-400 ${
            selectedType === item.type
              ? "border-gray-800 bg-gray-50"
              : "border-gray-200"
          }`}
        >
          <div className="aspect-square mb-3 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-contain"
            />
          </div>
        </button>
      ))}
    </div>
  );
}
