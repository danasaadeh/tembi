"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import type { DecorationType } from "../types";

interface DecorationSelectorProps {
  open: boolean;
  onClose: () => void;
  selectedDecoration: DecorationType | undefined;
  onDecorationSelect: (decoration: DecorationType) => void;
}

const decorationTypes: DecorationType[] = [
  "Wedding décor",
  "Birthday décor",
  "Graduation décor",
  "Galaxy décor",
  "Old Europe décor",
  "Others",
];

export default function DecorationSelector({
  open,
  onClose,
  selectedDecoration,
  onDecorationSelect,
}: DecorationSelectorProps) {
  const handleDecorationClick = (decoration: DecorationType) => {
    onDecorationSelect(decoration);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent className="p-6">
        <DialogTitle className="px-0 pt-0 pb-4 text-lg font-semibold">
          Select Decoration
        </DialogTitle>
        <div className="space-y-2">
          {decorationTypes.map((decoration) => (
            <button
              key={decoration}
              onClick={() => handleDecorationClick(decoration)}
              className={`
                w-full px-4 py-3 text-left rounded-lg text-base font-medium transition-colors
                ${
                  selectedDecoration === decoration
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }
              `}
            >
              {decoration}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
