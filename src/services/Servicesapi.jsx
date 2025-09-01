import toast from "react-hot-toast";

const studentsData = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  roll: i + 1,
  name: `Student ${i + 1}`,
}));

import React from 'react'

const Servicesapi =  {
  login: async ({ email, password }) => {
    if (email === "Teacher@gmail.com" && password === "Teacher@123") {
      toast.success("Login successful!");
      return { teacher: { name: "Teacher" } };
    } else {
      toast.error("Invalid credentials");
      throw new Error("Login failed");
    }
  },

  fetchStudents: async () => {
    return studentsData;
  },

  submitAttendance: async (attendance) => {
    localStorage.setItem("attendance", JSON.stringify(attendance));
    toast.success("Attendance submitted!");
  },

  fetchSummary: async () => {
    const attendance = JSON.parse(localStorage.getItem("attendance") || "[]");
    const total = attendance.length || 1;
    const presentCount = attendance.filter((s) => s.present).length;
    return [{ classId: "Btech-Attendence", percentage: Math.round((presentCount / total) * 100) }];
  },
};


export default Servicesapi