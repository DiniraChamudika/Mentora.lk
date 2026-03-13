"use client";

import { useState } from "react";

export default function EnrollPage() {
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const bookingData = {
      studentName: formData.get("studentName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      time: selectedTime,
    };

    console.log("Booking Data:", bookingData);
    alert("Enrollment submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-32 flex justify-center px-4">
      {/* Main card */}
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
          Enroll in Class
        </h1>

        {/* Tutor Information */}
        <div className="mb-6 border-b pb-4">
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            Tutor Information
          </h2>
          <p className="text-green-900"><span className="font-medium">Name:</span> John Silva</p>
          <p className="text-green-900"><span className="font-medium">Subject:</span> Mathematics</p>
          <p className="text-green-900"><span className="font-medium">Price:</span> Rs. 1500 / hour</p>
        </div>

        {/* Enrollment Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Date Selection */}
          <div>
            <label className="block font-medium text-green-800 mb-2">Select Date</label>
            <input
              type="date"
              name="date"
              required
              className="w-full border border-green-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Time Slot Radio Buttons */}
          <div>
            <label className="block font-medium text-green-800 mb-2">Select Time Slot</label>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((slot, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 border border-green-300 p-3 rounded-lg cursor-pointer hover:bg-green-50 transition-colors"
                >
                  <input
                    type="radio"
                    name="timeSlot"
                    value={slot}
                    onChange={() => setSelectedTime(slot)}
                    required
                    className="accent-green-600"
                  />
                  <span className="text-green-900">{slot}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Student Information */}
          <div>
            <label className="block font-medium text-green-800 mb-2">Student Name</label>
            <input
              type="text"
              name="studentName"
              required
              className="w-full border border-green-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-green-800 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-green-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-green-800 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-green-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            Confirm Enrollment
          </button>

        </form>
      </div>
    </div>
  );
}