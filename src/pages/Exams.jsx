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
              {/* Desktop View */}
              <Card className="hidden md:block">
                <CardHeader>
                  <CardTitle>Upcoming Exam Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  {examSchedule.map((schedule) => (
                    <div key={schedule.examId} className="space-y-4 mb-6 last:mb-0">
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

              {/* Mobile View */}
              <div className="md:hidden space-y-6">
                {examSchedule.map((schedule) => (
                  <Card key={schedule.examId}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{schedule.examName}</CardTitle>
                          <p className="text-sm text-gray-600">Class {schedule.class}</p>
                        </div>
                        <Badge variant="info">Upcoming</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {schedule.schedule.map((item, index) => (
                          <div key={index} className="p-3 border border-gray-200 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-semibold text-gray-900">{item.subject}</p>
                                <p className="text-sm text-gray-600">{item.day}</p>
                              </div>
                              <Badge variant="secondary" className="text-xs">{item.time}</Badge>
                            </div>
                            <p className="text-sm text-gray-600">{item.date}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Results Tab */}
            <TabsContent value="results" activeTab={activeTab}>
              {/* Desktop Table */}
              <Card className="hidden md:block">
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

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Mid Term Examination Results</h3>
                {examResults.map((result) => (
                  <Card key={result.studentId}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <Badge variant={result.rank <= 3 ? 'success' : 'secondary'} className="text-base">
                            #{result.rank}
                          </Badge>
                          <div>
                            <h4 className="font-semibold text-gray-900">{result.studentName}</h4>
                            <p className="text-sm text-gray-600">Roll: {result.roll}</p>
                            <p className="text-sm text-gray-600">Class {result.class}</p>
                          </div>
                        </div>
                        <span className="font-bold text-xl text-blue-600">{result.grade}</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Marks Obtained:</span>
                          <span className="font-medium">{result.obtainedMarks} / {result.totalMarks}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Percentage:</span>
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
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
