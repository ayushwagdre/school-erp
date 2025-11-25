import { useState } from 'react';
import { Calendar, TrendingUp, Users, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';
import { attendanceData, classAttendanceStats } from '../data/attendanceData';

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState('2025-11-25');
  const [selectedClass, setSelectedClass] = useState('10-A');

  const classes = ['10-A', '10-B', '9-A', '9-B', '11-A', '11-B'];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
        <p className="text-gray-600 mt-1">Track and manage student attendance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {classAttendanceStats.totalStudents}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Present</p>
                <p className="text-2xl font-bold text-green-600 mt-1">
                  {classAttendanceStats.present}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Absent</p>
                <p className="text-2xl font-bold text-red-600 mt-1">
                  {classAttendanceStats.absent}
                </p>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <Users className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Attendance %</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">
                  {classAttendanceStats.percentage}%
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Class
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {classes.map((cls) => (
                  <option key={cls} value={cls}>
                    Class {cls}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Attendance Record - Class {selectedClass} ({selectedDate})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Roll No.</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Attendance %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((student) => {
                const todayRecord = student.records.find(r => r.date === selectedDate);
                const presentCount = student.records.filter(r => r.status === 'Present').length;
                const attendancePercentage = Math.round((presentCount / student.records.length) * 100);

                return (
                  <TableRow key={student.studentId}>
                    <TableCell className="font-medium">{student.roll}</TableCell>
                    <TableCell>{student.studentName}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          todayRecord?.status === 'Present'
                            ? 'success'
                            : todayRecord?.status === 'Absent'
                            ? 'danger'
                            : 'secondary'
                        }
                      >
                        {todayRecord?.status || 'Not Marked'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2 max-w-[100px]">
                          <div
                            className={`h-2 rounded-full ${
                              attendancePercentage >= 90
                                ? 'bg-green-600'
                                : attendancePercentage >= 75
                                ? 'bg-yellow-600'
                                : 'bg-red-600'
                            }`}
                            style={{ width: `${attendancePercentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{attendancePercentage}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
