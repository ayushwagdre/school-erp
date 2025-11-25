import { Users, GraduationCap, TrendingUp, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { LineChartComponent, BarChartComponent } from '../components/ui/Chart';
import Badge from '../components/ui/Badge';
import { dashboardStats, announcements, chartData, classWiseStats } from '../data/dashboardData';

function StatCard({ icon: Icon, title, value, subtitle, trend, color }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {subtitle && (
              <p className="text-sm text-gray-500">{subtitle}</p>
            )}
          </div>
          <div className={`p-4 rounded-full ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        {trend && (
          <div className="mt-4 flex items-center gap-1 text-sm">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-medium">{trend}</span>
            <span className="text-gray-500">from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function AnnouncementCard({ announcement }) {
  const typeColors = {
    important: 'danger',
    event: 'info',
    holiday: 'warning',
    exam: 'success'
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={typeColors[announcement.type]}>
              {announcement.type}
            </Badge>
            <span className="text-xs text-gray-500">{announcement.date}</span>
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">
            {announcement.title}
          </h4>
          <p className="text-sm text-gray-600">{announcement.description}</p>
          <p className="text-xs text-gray-500 mt-2">Posted by: {announcement.author}</p>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="Total Students"
          value={dashboardStats.totalStudents}
          trend="+5.2%"
          color="bg-blue-600"
        />
        <StatCard
          icon={GraduationCap}
          title="Total Teachers"
          value={dashboardStats.totalTeachers}
          subtitle="Active staff members"
          color="bg-green-600"
        />
        <StatCard
          icon={TrendingUp}
          title="Attendance"
          value={`${dashboardStats.attendancePercentage}%`}
          trend="+2.1%"
          color="bg-purple-600"
        />
        <StatCard
          icon={DollarSign}
          title="Fees Collected"
          value={`₹${(dashboardStats.feesCollected / 100000).toFixed(1)}L`}
          subtitle={`${dashboardStats.feesPercentage}% of ₹${(dashboardStats.totalFeesExpected / 100000).toFixed(1)}L`}
          color="bg-orange-600"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Attendance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChartComponent
              data={chartData}
              xKey="month"
              yKey="attendance"
              title="Attendance %"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Class-wise Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChartComponent
              data={classWiseStats}
              xKey="class"
              bars={["students", "avgAttendance"]}
              title="Students & Attendance"
            />
          </CardContent>
        </Card>
      </div>

      {/* Announcements */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Announcements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {announcements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
