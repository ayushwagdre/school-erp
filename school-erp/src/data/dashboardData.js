export const dashboardStats = {
  totalStudents: 850,
  totalTeachers: 65,
  attendancePercentage: 92.5,
  feesCollected: 3850000,
  totalFeesExpected: 4250000,
  feesPercentage: 90.6
};

export const announcements = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    description: "Parent-Teacher meeting scheduled for all classes on December 15th, 2025. Please ensure your attendance.",
    date: "2025-11-20",
    type: "important",
    author: "Principal"
  },
  {
    id: 2,
    title: "Annual Sports Day",
    description: "Annual Sports Day will be held on December 10th, 2025. All students must participate.",
    date: "2025-11-18",
    type: "event",
    author: "Sports Department"
  },
  {
    id: 3,
    title: "Winter Break Notice",
    description: "School will remain closed from December 24th to January 2nd for winter break.",
    date: "2025-11-15",
    type: "holiday",
    author: "Administration"
  },
  {
    id: 4,
    title: "Final Term Examination",
    description: "Final Term Examinations will commence from March 15th, 2026. Exam schedule has been uploaded.",
    date: "2025-11-12",
    type: "exam",
    author: "Examination Department"
  },
  {
    id: 5,
    title: "Science Exhibition",
    description: "Science Exhibition on December 5th. Students are encouraged to showcase their projects.",
    date: "2025-11-10",
    type: "event",
    author: "Science Department"
  }
];

export const chartData = [
  { month: "Jan", attendance: 88, fees: 750000 },
  { month: "Feb", attendance: 90, fees: 820000 },
  { month: "Mar", attendance: 89, fees: 780000 },
  { month: "Apr", attendance: 92, fees: 850000 },
  { month: "May", attendance: 91, fees: 800000 },
  { month: "Jun", attendance: 87, fees: 720000 },
  { month: "Jul", attendance: 93, fees: 880000 },
  { month: "Aug", attendance: 94, fees: 900000 },
  { month: "Sep", attendance: 92, fees: 870000 },
  { month: "Oct", attendance: 91, fees: 840000 },
  { month: "Nov", attendance: 93, fees: 890000 }
];

export const classWiseStats = [
  { class: "8", students: 120, avgAttendance: 91, feesCollected: 90 },
  { class: "9", students: 180, avgAttendance: 92, feesCollected: 88 },
  { class: "10", students: 200, avgAttendance: 93, feesCollected: 92 },
  { class: "11", students: 175, avgAttendance: 90, feesCollected: 89 },
  { class: "12", students: 175, avgAttendance: 94, feesCollected: 95 }
];
