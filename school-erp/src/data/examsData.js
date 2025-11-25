export const examsData = [
  {
    id: 1,
    name: "First Term Examination",
    class: "10",
    startDate: "2025-09-15",
    endDate: "2025-09-25",
    status: "Completed"
  },
  {
    id: 2,
    name: "Mid Term Examination",
    class: "10",
    startDate: "2025-11-10",
    endDate: "2025-11-20",
    status: "Completed"
  },
  {
    id: 3,
    name: "Final Term Examination",
    class: "10",
    startDate: "2026-03-15",
    endDate: "2026-03-25",
    status: "Upcoming"
  }
];

export const examResults = [
  {
    studentId: 1,
    studentName: "Aarav Sharma",
    class: "10",
    roll: "001",
    examId: 2,
    examName: "Mid Term Examination",
    subjects: [
      { subject: "Mathematics", maxMarks: 100, obtained: 85, grade: "A" },
      { subject: "Physics", maxMarks: 100, obtained: 78, grade: "B+" },
      { subject: "Chemistry", maxMarks: 100, obtained: 82, grade: "A-" },
      { subject: "English", maxMarks: 100, obtained: 88, grade: "A" },
      { subject: "Computer Science", maxMarks: 100, obtained: 92, grade: "A+" }
    ],
    totalMarks: 500,
    obtainedMarks: 425,
    percentage: 85.0,
    grade: "A",
    rank: 3
  },
  {
    studentId: 2,
    studentName: "Diya Patel",
    class: "10",
    roll: "002",
    examId: 2,
    examName: "Mid Term Examination",
    subjects: [
      { subject: "Mathematics", maxMarks: 100, obtained: 95, grade: "A+" },
      { subject: "Physics", maxMarks: 100, obtained: 92, grade: "A+" },
      { subject: "Chemistry", maxMarks: 100, obtained: 90, grade: "A+" },
      { subject: "English", maxMarks: 100, obtained: 94, grade: "A+" },
      { subject: "Computer Science", maxMarks: 100, obtained: 96, grade: "A+" }
    ],
    totalMarks: 500,
    obtainedMarks: 467,
    percentage: 93.4,
    grade: "A+",
    rank: 1
  },
  {
    studentId: 3,
    studentName: "Arjun Kumar",
    class: "10",
    roll: "003",
    examId: 2,
    examName: "Mid Term Examination",
    subjects: [
      { subject: "Mathematics", maxMarks: 100, obtained: 72, grade: "B" },
      { subject: "Physics", maxMarks: 100, obtained: 68, grade: "B-" },
      { subject: "Chemistry", maxMarks: 100, obtained: 75, grade: "B+" },
      { subject: "English", maxMarks: 100, obtained: 80, grade: "A-" },
      { subject: "Computer Science", maxMarks: 100, obtained: 85, grade: "A" }
    ],
    totalMarks: 500,
    obtainedMarks: 380,
    percentage: 76.0,
    grade: "B+",
    rank: 8
  },
  {
    studentId: 4,
    studentName: "Ananya Singh",
    class: "9",
    roll: "001",
    examId: 2,
    examName: "Mid Term Examination",
    subjects: [
      { subject: "Mathematics", maxMarks: 100, obtained: 96, grade: "A+" },
      { subject: "Physics", maxMarks: 100, obtained: 94, grade: "A+" },
      { subject: "Chemistry", maxMarks: 100, obtained: 93, grade: "A+" },
      { subject: "English", maxMarks: 100, obtained: 95, grade: "A+" },
      { subject: "Biology", maxMarks: 100, obtained: 97, grade: "A+" }
    ],
    totalMarks: 500,
    obtainedMarks: 475,
    percentage: 95.0,
    grade: "A+",
    rank: 1
  },
  {
    studentId: 5,
    studentName: "Rohan Verma",
    class: "9",
    roll: "002",
    examId: 2,
    examName: "Mid Term Examination",
    subjects: [
      { subject: "Mathematics", maxMarks: 100, obtained: 80, grade: "A-" },
      { subject: "Physics", maxMarks: 100, obtained: 76, grade: "B+" },
      { subject: "Chemistry", maxMarks: 100, obtained: 82, grade: "A-" },
      { subject: "English", maxMarks: 100, obtained: 85, grade: "A" },
      { subject: "Biology", maxMarks: 100, obtained: 88, grade: "A" }
    ],
    totalMarks: 500,
    obtainedMarks: 411,
    percentage: 82.2,
    grade: "A-",
    rank: 5
  }
];

export const examSchedule = [
  {
    examId: 3,
    examName: "Final Term Examination",
    class: "10",
    schedule: [
      { date: "2026-03-15", day: "Monday", subject: "English", time: "9:00 AM - 12:00 PM" },
      { date: "2026-03-17", day: "Wednesday", subject: "Mathematics", time: "9:00 AM - 12:00 PM" },
      { date: "2026-03-19", day: "Friday", subject: "Physics", time: "9:00 AM - 12:00 PM" },
      { date: "2026-03-21", day: "Sunday", subject: "Chemistry", time: "9:00 AM - 12:00 PM" },
      { date: "2026-03-23", day: "Tuesday", subject: "Computer Science", time: "9:00 AM - 12:00 PM" }
    ]
  }
];
