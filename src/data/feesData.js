export const feesStructure = [
  {
    class: "8",
    tuitionFee: 15000,
    labFee: 3000,
    libraryFee: 2000,
    sportsFee: 2000,
    examFee: 3000,
    miscFee: 1000,
    total: 26000
  },
  {
    class: "9",
    tuitionFee: 18000,
    labFee: 4000,
    libraryFee: 2500,
    sportsFee: 2500,
    examFee: 3500,
    miscFee: 1500,
    total: 32000
  },
  {
    class: "10",
    tuitionFee: 20000,
    labFee: 5000,
    libraryFee: 3000,
    sportsFee: 3000,
    examFee: 4000,
    miscFee: 2000,
    total: 37000
  },
  {
    class: "11",
    tuitionFee: 25000,
    labFee: 6000,
    libraryFee: 3500,
    sportsFee: 3500,
    examFee: 5000,
    miscFee: 2000,
    total: 45000
  },
  {
    class: "12",
    tuitionFee: 28000,
    labFee: 7000,
    libraryFee: 4000,
    sportsFee: 4000,
    examFee: 6000,
    miscFee: 3000,
    total: 52000
  }
];

export const feePayments = [
  {
    studentId: 1,
    studentName: "Aarav Sharma",
    class: "10",
    totalFees: 50000,
    paidAmount: 45000,
    dueAmount: 5000,
    status: "Partial",
    payments: [
      { date: "2025-04-15", amount: 25000, method: "UPI", receiptNo: "REC001" },
      { date: "2025-07-20", amount: 20000, method: "Card", receiptNo: "REC025" }
    ]
  },
  {
    studentId: 2,
    studentName: "Diya Patel",
    class: "10",
    totalFees: 50000,
    paidAmount: 50000,
    dueAmount: 0,
    status: "Paid",
    payments: [
      { date: "2025-04-10", amount: 50000, method: "Bank Transfer", receiptNo: "REC002" }
    ]
  },
  {
    studentId: 3,
    studentName: "Arjun Kumar",
    class: "10",
    totalFees: 50000,
    paidAmount: 35000,
    dueAmount: 15000,
    status: "Partial",
    payments: [
      { date: "2025-04-18", amount: 20000, method: "Cash", receiptNo: "REC003" },
      { date: "2025-08-10", amount: 15000, method: "UPI", receiptNo: "REC045" }
    ]
  },
  {
    studentId: 4,
    studentName: "Ananya Singh",
    class: "9",
    totalFees: 45000,
    paidAmount: 45000,
    dueAmount: 0,
    status: "Paid",
    payments: [
      { date: "2025-04-12", amount: 45000, method: "Card", receiptNo: "REC004" }
    ]
  },
  {
    studentId: 5,
    studentName: "Rohan Verma",
    class: "9",
    totalFees: 45000,
    paidAmount: 35000,
    dueAmount: 10000,
    status: "Partial",
    payments: [
      { date: "2025-04-20", amount: 25000, method: "UPI", receiptNo: "REC005" },
      { date: "2025-07-15", amount: 10000, method: "Cash", receiptNo: "REC030" }
    ]
  },
  {
    studentId: 6,
    studentName: "Ishita Reddy",
    class: "11",
    totalFees: 55000,
    paidAmount: 47000,
    dueAmount: 8000,
    status: "Partial",
    payments: [
      { date: "2025-04-14", amount: 30000, method: "Bank Transfer", receiptNo: "REC006" },
      { date: "2025-08-20", amount: 17000, method: "Card", receiptNo: "REC050" }
    ]
  },
  {
    studentId: 7,
    studentName: "Kabir Joshi",
    class: "11",
    totalFees: 55000,
    paidAmount: 35000,
    dueAmount: 20000,
    status: "Partial",
    payments: [
      { date: "2025-04-25", amount: 25000, method: "UPI", receiptNo: "REC007" },
      { date: "2025-07-30", amount: 10000, method: "Cash", receiptNo: "REC040" }
    ]
  },
  {
    studentId: 8,
    studentName: "Myra Desai",
    class: "12",
    totalFees: 60000,
    paidAmount: 60000,
    dueAmount: 0,
    status: "Paid",
    payments: [
      { date: "2025-04-08", amount: 60000, method: "Bank Transfer", receiptNo: "REC008" }
    ]
  },
  {
    studentId: 9,
    studentName: "Aditya Kapoor",
    class: "12",
    totalFees: 60000,
    paidAmount: 48000,
    dueAmount: 12000,
    status: "Partial",
    payments: [
      { date: "2025-04-16", amount: 30000, method: "Card", receiptNo: "REC009" },
      { date: "2025-08-05", amount: 18000, method: "UPI", receiptNo: "REC048" }
    ]
  },
  {
    studentId: 10,
    studentName: "Sara Khan",
    class: "8",
    totalFees: 40000,
    paidAmount: 35000,
    dueAmount: 5000,
    status: "Partial",
    payments: [
      { date: "2025-04-22", amount: 20000, method: "Cash", receiptNo: "REC010" },
      { date: "2025-07-25", amount: 15000, method: "UPI", receiptNo: "REC035" }
    ]
  }
];
