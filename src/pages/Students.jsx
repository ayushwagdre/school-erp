import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Plus, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import Modal from '../components/ui/Modal';
import { studentsData } from '../data/studentsData';

export default function Students() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const classes = ['all', '8', '9', '10', '11', '12'];

  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll.includes(searchTerm) ||
      student.parentName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesClass = selectedClass === 'all' || student.class === selectedClass;

    return matchesSearch && matchesClass;
  });

  const handleViewProfile = (studentId) => {
    navigate(`/students/${studentId}`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-600 mt-1">Manage student information and records</p>
        </div>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4" />
          Add Student
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by name, roll number, or parent name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Class Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="h-10 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {classes.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls === 'all' ? 'All Classes' : `Class ${cls}`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <span>Showing {filteredStudents.length} of {studentsData.length} students</span>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>Student List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Roll No.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Parent Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.roll}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={student.photo}
                        alt={student.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="font-medium">{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.section}</TableCell>
                  <TableCell>{student.parentName}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>
                    <Badge variant={student.attendancePercentage >= 90 ? 'success' : student.attendancePercentage >= 75 ? 'warning' : 'danger'}>
                      {student.attendancePercentage}%
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleViewProfile(student.id)}
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Student Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Student"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Student Name
            </label>
            <Input placeholder="Enter student name" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Class
              </label>
              <select className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Section
              </label>
              <select className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Parent Name
            </label>
            <Input placeholder="Enter parent name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <Input placeholder="Enter phone number" />
          </div>
          <div className="flex gap-3 pt-4">
            <Button className="flex-1" variant="outline" onClick={() => setShowAddModal(false)}>
              Cancel
            </Button>
            <Button className="flex-1" onClick={() => setShowAddModal(false)}>
              Add Student
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
