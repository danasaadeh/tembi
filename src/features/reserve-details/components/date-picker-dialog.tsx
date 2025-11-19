import React, { useState } from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerDialogProps {
  open: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

export default function DatePickerDialog({
  open,
  onClose,
  selectedDate,
  onDateSelect,
}: DatePickerDialogProps) {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    const days: (number | null)[] = [];

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    onDateSelect(newDate);
    onClose();
  };

  const isSelectedDate = (day: number | null) => {
    if (!day || !selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      currentMonth.getFullYear() === selectedDate.getFullYear()
    );
  };

  const monthYear = currentMonth.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const days = getDaysInMonth(currentMonth);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <IconButton onClick={handlePrevMonth} size="small">
            <ChevronLeft className="w-5 h-5" />
          </IconButton>
          <h3 className="text-base font-medium">{monthYear}</h3>
          <IconButton onClick={handleNextMonth} size="small">
            <ChevronRight className="w-5 h-5" />
          </IconButton>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-xs font-medium text-gray-500 text-center py-2"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => day && handleDateClick(day)}
              disabled={!day}
              className={`
                aspect-square rounded-lg text-sm font-medium transition-colors
                ${!day ? "invisible" : ""}
                ${
                  isSelectedDate(day)
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "hover:bg-gray-100 text-gray-900"
                }
              `}
            >
              {day}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
