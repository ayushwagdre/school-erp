import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Droplet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { getStudentById } from '../data/studentsData';
import { attendanceData } from '../data/attendanceData';
import { feePayments } from '../data/feesData';
import { examResults } from '../data/examsData';

export default function StudentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = getStudentById(id);

  if (!student) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Student not found</p>
      </div>
    );
  }

  const studentAttendance = attendanceData.find(a => a.studentId === student.id);
  const studentFees = feePayments.find(f => f.studentId === student.id);
  const studentExams = examResults.find(e => e.studentId === student.id);

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate('/students')}>
        <ArrowLeft className="w-4 h-4" />
        Back to Students
      </Button>

      {/* Student Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={student.photo}
              alt={student.name}
              className="w-32 h-32 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{student.name}</h1>
                  <p className="text-gray-600 mt-1">
                    Class {student.class}-{student.section} • Roll No. {student.roll}
                  </p>
                </div>
                <Badge variant={student.attendancePercentage >= 90 ? 'success' : 'warning'}>
                  {student.attendancePercentage}% Attendance
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{student.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{student.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{student.dateOfBirth}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Droplet className="w-4 h-4" />
                  <span className="text-sm">Blood Group: {student.bloodGroup}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{student.address}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="personal">
        {({ activeTab, setActiveTab }) => (
          <>
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="personal" activeTab={activeTab} setActiveTab={setActiveTab}>
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="attendance" activeTab={activeTab} setActiveTab={setActiveTab}>
                Attendance
              </TabsTrigger>
              <TabsTrigger value="fees" activeTab={activeTab} setActiveTab={setActiveTab}>
                Fees
              </TabsTrigger>
              <TabsTrigger value="exams" activeTab={activeTab} setActiveTab={setActiveTab}>
                Exams
              </TabsTrigger>
            </TabsList>

            {/* Personal Info Tab */}
            <TabsContent value="personal" activeTab={activeTab}>
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Full Name</label>
                      <p className="text-gray-900 mt-1">{student.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Date of Birth</label>
                      <p className="text-gray-900 mt-1">{student.dateOfBirth}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Blood Group</label>
                      <p className="text-gray-900 mt-1">{student.bloodGroup}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <p className="text-gray-900 mt-1">{student.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Phone</label>
                      <p className="text-gray-900 mt-1">{student.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Parent Name</label>
                      <p className="text-gray-900 mt-1">{student.parentName}</p>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium text-gray-600">Address</label>
                      <p className="text-gray-900 mt-1">{student.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Attendance Tab */}
            <TabsContent value="attendance" activeTab={activeTab}>
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Records</CardTitle>
                </CardHeader>
                <CardContent>
                  {studentAttendance ? (
                    <>
                      {/* Desktop Table */}
                      <Table className="hidden sm:table">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {studentAttendance.records.map((record, index) => (
                            <TableRow key={index}>
                              <TableCell>{record.date}</TableCell>
                              <TableCell>
                                <Badge variant={record.status === 'Present' ? 'success' : 'danger'}>
                                  {record.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>

                      {/* Mobile List */}
                      <div className="sm:hidden space-y-2">
                        {studentAttendance.records.map((record, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                            <span className="text-sm text-gray-900">{record.date}</span>
                            <Badge variant={record.status === 'Present' ? 'success' : 'danger'}>
                              {record.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-600">No attendance records found.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Fees Tab */}
            <TabsContent value="fees" activeTab={activeTab}>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fee Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {studentFees ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-600">Total Fees</label>
                            <p className="text-2xl font-bold text-gray-900 mt-1">₹{studentFees.totalFees.toLocaleString()}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Paid</label>
                            <p className="text-2xl font-bold text-green-600 mt-1">₹{studentFees.paidAmount.toLocaleString()}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Due</label>
                            <p className="text-2xl font-bold text-red-600 mt-1">₹{studentFees.dueAmount.toLocaleString()}</p>
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <h4 className="font-semibold text-gray-900 mb-3">Payment History</h4>

                          {/* Desktop Table */}
                          <Table className="hidden sm:table">
                            <TableHeader>
                              <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead>Receipt</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {studentFees.payments.map((payment, index) => (
                                <TableRow key={index}>
                                  <TableCell>{payment.date}</TableCell>
                                  <TableCell className="font-medium">₹{payment.amount.toLocaleString()}</TableCell>
                                  <TableCell>{payment.method}</TableCell>
                                  <TableCell>
                                    <Badge variant="secondary">{payment.receiptNo}</Badge>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>

                          {/* Mobile List */}
                          <div className="sm:hidden space-y-3">
                            {studentFees.payments.map((payment, index) => (
                              <div key={index} className="p-3 border border-gray-200 rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <p className="font-semibold text-gray-900">₹{payment.amount.toLocaleString()}</p>
                                    <p className="text-sm text-gray-600">{payment.date}</p>
                                  </div>
                                  <Badge variant="secondary">{payment.receiptNo}</Badge>
                                </div>
                                <p className="text-sm text-gray-600">via {payment.method}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-600">No fee records found.</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Exams Tab */}
            <TabsContent value="exams" activeTab={activeTab}>
              <Card>
                <CardHeader>
                  <CardTitle>Exam Results</CardTitle>
                </CardHeader>
                <CardContent>
                  {studentExams ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900">{studentExams.examName}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                          <div>
                            <label className="text-sm text-gray-600">Total Marks</label>
                            <p className="text-lg font-bold text-gray-900">{studentExams.obtainedMarks}/{studentExams.totalMarks}</p>
                          </div>
                          <div>
                            <label className="text-sm text-gray-600">Percentage</label>
                            <p className="text-lg font-bold text-gray-900">{studentExams.percentage}%</p>
                          </div>
                          <div>
                            <label className="text-sm text-gray-600">Grade</label>
                            <p className="text-lg font-bold text-blue-600">{studentExams.grade}</p>
                          </div>
                          <div>
                            <label className="text-sm text-gray-600">Rank</label>
                            <p className="text-lg font-bold text-gray-900">#{studentExams.rank}</p>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Table */}
                      <Table className="hidden sm:table">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Subject</TableHead>
                            <TableHead>Max Marks</TableHead>
                            <TableHead>Obtained</TableHead>
                            <TableHead>Grade</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {studentExams.subjects.map((subject, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{subject.subject}</TableCell>
                              <TableCell>{subject.maxMarks}</TableCell>
                              <TableCell className="font-medium">{subject.obtained}</TableCell>
                              <TableCell>
                                <Badge variant={subject.obtained >= 90 ? 'success' : subject.obtained >= 75 ? 'info' : 'warning'}>
                                  {subject.grade}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>

                      {/* Mobile List */}
                      <div className="sm:hidden space-y-3">
                        {studentExams.subjects.map((subject, index) => (
                          <div key={index} className="p-3 border border-gray-200 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-semibold text-gray-900">{subject.subject}</h5>
                              <Badge variant={subject.obtained >= 90 ? 'success' : subject.obtained >= 75 ? 'info' : 'warning'}>
                                {subject.grade}
                              </Badge>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Marks:</span>
                              <span className="font-medium">{subject.obtained} / {subject.maxMarks}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600">No exam results found.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
}
