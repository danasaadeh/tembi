"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

interface TablesNumberSelectorProps {
  open: boolean;
  onClose: () => void;
  selectedNumber: number | null;
  onNumberSelect: (num: number) => void;
}

const tableOptions = [2, 3, 4, 5];

export default function TablesNumberSelector({
  open,
  onClose,
  selectedNumber,
  onNumberSelect,
}: TablesNumberSelectorProps) {
  const handleNumberClick = (num: number) => {
    onNumberSelect(num);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent className="p-6">
        <DialogTitle className="px-0 pt-0 pb-4 text-lg font-semibold">
          Select Number of Tables
        </DialogTitle>
        <div className="space-y-2">
          {tableOptions.map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className={`
                w-full px-4 py-3 text-left rounded-lg text-base font-medium transition-colors
                ${
                  selectedNumber === num
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }
              `}
            >
              {num} tables
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
