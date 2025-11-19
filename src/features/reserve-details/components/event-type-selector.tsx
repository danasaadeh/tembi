"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import type { EventType } from "../types";

interface EventTypeSelectorProps {
  open: boolean;
  onClose: () => void;
  selectedType: EventType | undefined;
  onTypeSelect: (type: EventType) => void;
}

const eventTypes: EventType[] = ["Wedding", "Birthday", "Graduation", "Party"];

export default function EventTypeSelector({
  open,
  onClose,
  selectedType,
  onTypeSelect,
}: EventTypeSelectorProps) {
  const handleTypeClick = (type: EventType) => {
    onTypeSelect(type);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent className="p-6">
        <DialogTitle className="px-0 pt-0 pb-4 text-lg font-semibold">
          Select Event Type
        </DialogTitle>
        <div className="space-y-2">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeClick(type)}
              className={`
                w-full px-4 py-3 text-left rounded-lg text-base font-medium transition-colors
                ${
                  selectedType === type
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }
              `}
            >
              {type}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
