import { FileText, Calendar, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import Badge from '../components/ui/Badge';
import { examsData, examResults, examSchedule } from '../data/examsData';

export default function Exams() {
  const averagePercentage = examResults.reduce((sum, result) => sum + result.percentage, 0) / examResults.length;
  const topPerformers = examResults.filter(r => r.percentage >= 90).length;
  const passedStudents = examResults.filter(r => r.percentage >= 40).length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Examinations</h1>
        <p className="text-gray-600 mt-1">Manage exams, schedules, and results</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Exams</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{examsData.length}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Score</p>
                <p className="text-2xl font-bold text-green-600 mt-1">
                  {averagePercentage.toFixed(1)}%
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Top Performers</p>
                <p className="text-2xl font-bold text-purple-600 mt-1">{topPerformers}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pass Rate</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">
                  {Math.round((passedStudents / examResults.length) * 100)}%
                </p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="schedule">
        {({ activeTab, setActiveTab }) => (
          <>
            <TabsList>
              <TabsTrigger value="schedule" activeTab={activeTab} setActiveTab={setActiveTab}>
                Exam Schedule
              </TabsTrigger>
              <TabsTrigger value="results" activeTab={activeTab} setActiveTab={setActiveTab}>
                Results
              </TabsTrigger>
              <TabsTrigger value="list" activeTab={activeTab} setActiveTab={setActiveTab}>
                Exam List
              </TabsTrigger>
            </TabsList>

            {/* Exam Schedule Tab */}
            <TabsContent value="schedule" activeTab={activeTab}>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Exam Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  {examSchedule.map((schedule) => (
                    <div key={schedule.examId} className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <div>
                          <h3 className="font-semibold text-gray-900">{schedule.examName}</h3>
                          <p className="text-sm text-gray-600">Class {schedule.class}</p>
                        </div>
                        <Badge variant="info">Upcoming</Badge>
                      </div>

                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Day</TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead>Time</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {schedule.schedule.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{item.date}</TableCell>
                              <TableCell>{item.day}</TableCell>
                              <TableCell>{item.subject}</TableCell>
                              <TableCell>{item.time}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Results Tab */}
            <TabsContent value="results" activeTab={activeTab}>
              <Card>
                <CardHeader>
                  <CardTitle>Exam Results - Mid Term Examination</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Rank</TableHead>
                        <TableHead>Roll No.</TableHead>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead>Total Marks</TableHead>
                        <TableHead>Obtained</TableHead>
                        <TableHead>Percentage</TableHead>
                        <TableHead>Grade</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {examResults.map((result) => (
                        <TableRow key={result.studentId}>
                          <TableCell>
                            <Badge variant={result.rank <= 3 ? 'success' : 'secondary'}>
                              #{result.rank}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium">{result.roll}</TableCell>
                          <TableCell>{result.studentName}</TableCell>
                          <TableCell>Class {result.class}</TableCell>
                          <TableCell>{result.totalMarks}</TableCell>
                          <TableCell className="font-medium">{result.obtainedMarks}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                result.percentage >= 90
                                  ? 'success'
                                  : result.percentage >= 75
                                  ? 'info'
                                  : 'warning'
                              }
                            >
                              {result.percentage}%
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span className="font-semibold text-blue-600">{result.grade}</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Exam List Tab */}
            <TabsContent value="list" activeTab={activeTab}>
              <Card>
                <CardHeader>
                  <CardTitle>All Examinations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {examsData.map((exam) => (
                      <div
                        key={exam.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{exam.name}</h3>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <span>Class {exam.class}</span>
                            <span>•</span>
                            <span>{exam.startDate} to {exam.endDate}</span>
                          </div>
                        </div>
                        <Badge
                          variant={
                            exam.status === 'Completed'
                              ? 'success'
                              : exam.status === 'Upcoming'
                              ? 'info'
                              : 'warning'
                          }
                        >
                          {exam.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
}
