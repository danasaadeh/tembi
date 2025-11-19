"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { ChevronDown } from "lucide-react";

interface TimeRangeSelectorProps {
  open: boolean;
  onClose: () => void;
  selectedTimeFrom: string;
  selectedTimeTo: string;
  onTimeSelect: (timeFrom: string, timeTo: string) => void;
  currentSelecting: "from" | "to";
  onCurrentSelectingChange: (type: "from" | "to") => void;
}

const timeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
];

export default function TimeRangeSelector({
  open,
  onClose,
  selectedTimeFrom,
  selectedTimeTo,
  onTimeSelect,
  currentSelecting,
  onCurrentSelectingChange,
}: TimeRangeSelectorProps) {
  const handleTimeClick = (time: string) => {
    if (currentSelecting === "from") {
      onTimeSelect(time, selectedTimeTo);
    } else {
      onTimeSelect(selectedTimeFrom, time);
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent className="p-6">
        <DialogTitle className="px-0 pt-0 pb-4 text-lg font-semibold">
          Select Time {currentSelecting === "from" ? "(From)" : "(To)"}
        </DialogTitle>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {timeSlots.map((time) => {
            const isSelected =
              currentSelecting === "from"
                ? selectedTimeFrom === time
                : selectedTimeTo === time;

            return (
              <button
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${
                    isSelected
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }
                `}
              >
                {time}
              </button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
