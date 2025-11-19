"use client";

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { ChevronDown } from "lucide-react";
import DatePickerDialog from "../components/date-picker-dialog";
import DecorationSelector from "../components/decoration-selector";
import EventTypeSelector from "../components/event-type-selector";
import ReservationTypeSelector from "../components/reservation-type-selector";
import TablesNumberSelector from "../components/tables-number-selector";
import TimeRangeSelector from "../components/time-range-selector";
import TimeSelector from "../components/time-selector";
import type { ReservationFormData, ReservationType } from "../types";

export default function ReserveDetailsPage() {
  const [formData, setFormData] = useState<ReservationFormData>({
    type: "single",
    bookingDate: null,
    bookingTime: "",
    bookingTimeFrom: "",
    bookingTimeTo: "",
    tablesNumber: null,
    guests: null,
    notes: "",
    eventType: undefined,
    decorationType: undefined,
  });

  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [timeSelectorOpen, setTimeSelectorOpen] = useState(false);
  const [timeRangeSelectorOpen, setTimeRangeSelectorOpen] = useState(false);
  const [tablesNumberOpen, setTablesNumberOpen] = useState(false);
  const [eventTypeOpen, setEventTypeOpen] = useState(false);
  const [decorationOpen, setDecorationOpen] = useState(false);
  const [currentTimeSelecting, setCurrentTimeSelecting] = useState<
    "from" | "to"
  >("from");

  const usesTimeRange =
    formData.type === "restaurant" || formData.type === "event";

  const handleTypeChange = (type: ReservationType) => {
    setFormData({
      ...formData,
      type,
      bookingTime: "",
      bookingTimeFrom: "",
      bookingTimeTo: "",
      tablesNumber: null,
      eventType: undefined,
      decorationType: undefined,
    });
  };

  const handleDateSelect = (date: Date) => {
    setFormData({ ...formData, bookingDate: date });
  };

  const handleTimeSelect = (time: string) => {
    setFormData({ ...formData, bookingTime: time });
  };

  const handleTimeRangeSelect = (timeFrom: string, timeTo: string) => {
    setFormData({
      ...formData,
      bookingTimeFrom: timeFrom,
      bookingTimeTo: timeTo,
    });
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "Select Date";
    return date.toLocaleDateString("en-GB");
  };

  const handleSubmit = () => {
    console.log("Reservation Data:", formData);
    // Handle reservation submission
  };

  const openTimeRangeSelector = (type: "from" | "to") => {
    setCurrentTimeSelecting(type);
    setTimeRangeSelectorOpen(true);
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-8">
          <span className="text-red-500">Reserve</span>{" "}
          <span className="text-gray-900">Details</span>
        </h1>

        {/* Reservation Type Selector */}
        <ReservationTypeSelector
          selectedType={formData.type}
          onTypeChange={handleTypeChange}
        />

        {/* Form Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Booking Date */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                Booking date
              </label>
              <button
                onClick={() => setDatePickerOpen(true)}
                className="w-full px-4 py-3 text-left border border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-between bg-white"
              >
                <span
                  className={
                    formData.bookingDate ? "text-gray-900" : "text-gray-400"
                  }
                >
                  {formatDate(formData.bookingDate)}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Booking Time - Single or Range based on type */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                Booking Time
              </label>
              {usesTimeRange ? (
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 font-medium">From</span>
                  <button
                    onClick={() => openTimeRangeSelector("from")}
                    className="flex-1 px-4 py-3 text-left border border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-between bg-white"
                  >
                    <span
                      className={
                        formData.bookingTimeFrom
                          ? "text-gray-900"
                          : "text-gray-400"
                      }
                    >
                      {formData.bookingTimeFrom || "10:00"}
                    </span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>
                  <span className="text-gray-700 font-medium">To</span>
                  <button
                    onClick={() => openTimeRangeSelector("to")}
                    className="flex-1 px-4 py-3 text-left border border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-between bg-white"
                  >
                    <span
                      className={
                        formData.bookingTimeTo
                          ? "text-gray-900"
                          : "text-gray-400"
                      }
                    >
                      {formData.bookingTimeTo || "16:00"}
                    </span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setTimeSelectorOpen(true)}
                  className="w-full px-4 py-3 text-left border border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-between bg-white"
                >
                  <span
                    className={
                      formData.bookingTime ? "text-gray-900" : "text-gray-400"
                    }
                  >
                    {formData.bookingTime || "Select Time"}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
              )}
            </div>

            {formData.type === "multiple" && (
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  Tables number
                </label>
                <button
                  onClick={() => setTablesNumberOpen(true)}
                  className="w-full px-4 py-3 text-left border border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-between bg-white"
                >
                  <span
                    className={
                      formData.tablesNumber ? "text-gray-900" : "text-gray-400"
                    }
                  >
                    {formData.tablesNumber
                      ? `${formData.tablesNumber} tables`
                      : "Select Number"}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            )}

            {formData.type === "event" && (
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  Type of event
                </label>
                <button
                  onClick={() => setEventTypeOpen(true)}
                  className="w-full px-4 py-3 text-left border border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-between bg-white"
                >
                  <span
                    className={
                      formData.eventType ? "text-gray-900" : "text-gray-400"
                    }
                  >
                    {formData.eventType || "Select Event Type"}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            )}

            {formData.type === "event" && (
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  Decoration
                </label>
                <button
                  onClick={() => setDecorationOpen(true)}
                  className="w-full px-4 py-3 text-left border border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-between bg-white"
                >
                  <span
                    className={
                      formData.decorationType
                        ? "text-gray-900"
                        : "text-gray-400"
                    }
                  >
                    {formData.decorationType || "Select Decoration"}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            )}

            {/* Guests */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                Guests
              </label>
              <TextField
                fullWidth
                type="number"
                value={formData.guests || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    guests: Number(e.target.value),
                  })
                }
                placeholder="Enter number"
                variant="outlined"
                inputProps={{ min: 1 }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#d1d5db",
                    },
                    "&:hover fieldset": {
                      borderColor: "#9ca3af",
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Right Column - Notes */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Notes
            </label>
            <TextField
              fullWidth
              multiline
              rows={14}
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              placeholder="Enter your notes, important details or special request"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#d1d5db",
                  },
                  "&:hover fieldset": {
                    borderColor: "#9ca3af",
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Reserve Now Button */}
        <div className="mt-8 flex justify-center">
          <Button
            variant="contained"
            onClick={handleSubmit}
            className="w-full max-w-sm"
            sx={{
              backgroundColor: "#ef4444",
              color: "white",
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "0.5rem",
              "&:hover": {
                backgroundColor: "#dc2626",
              },
            }}
          >
            Reserve Now
          </Button>
        </div>

        {/* Dialogs */}
        <DatePickerDialog
          open={datePickerOpen}
          onClose={() => setDatePickerOpen(false)}
          selectedDate={formData.bookingDate}
          onDateSelect={handleDateSelect}
        />

        <TimeSelector
          open={timeSelectorOpen}
          onClose={() => setTimeSelectorOpen(false)}
          selectedTime={formData.bookingTime}
          onTimeSelect={handleTimeSelect}
        />

        <TimeRangeSelector
          open={timeRangeSelectorOpen}
          onClose={() => setTimeRangeSelectorOpen(false)}
          selectedTimeFrom={formData.bookingTimeFrom || ""}
          selectedTimeTo={formData.bookingTimeTo || ""}
          onTimeSelect={handleTimeRangeSelect}
          currentSelecting={currentTimeSelecting}
          onCurrentSelectingChange={setCurrentTimeSelecting}
        />

        <TablesNumberSelector
          open={tablesNumberOpen}
          onClose={() => setTablesNumberOpen(false)}
          selectedNumber={formData.tablesNumber}
          onNumberSelect={(num) =>
            setFormData({ ...formData, tablesNumber: num })
          }
        />

        <EventTypeSelector
          open={eventTypeOpen}
          onClose={() => setEventTypeOpen(false)}
          selectedType={formData.eventType}
          onTypeSelect={(type) => setFormData({ ...formData, eventType: type })}
        />

        <DecorationSelector
          open={decorationOpen}
          onClose={() => setDecorationOpen(false)}
          selectedDecoration={formData.decorationType}
          onDecorationSelect={(decoration) =>
            setFormData({ ...formData, decorationType: decoration })
          }
        />
      </div>
    </div>
  );
}
