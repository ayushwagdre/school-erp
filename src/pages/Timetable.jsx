import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { timetableData } from '../data/timetableData';

function PeriodCard({ period }) {
  const isBreak = period.subject === 'Break' || period.subject === 'Lunch Break';

  return (
    <div
      className={`p-3 rounded-lg border ${
        isBreak
          ? 'bg-gray-50 border-gray-200'
          : 'bg-white border-blue-200 hover:shadow-md transition-shadow'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className={`font-semibold text-sm ${isBreak ? 'text-gray-500' : 'text-gray-900'}`}>
            {period.subject}
          </p>
          {!isBreak && (
            <>
              <p className="text-xs text-gray-600 mt-1">{period.teacher}</p>
              <div className="flex items-center gap-1 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {period.room}
                </Badge>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500 flex-shrink-0">
          <Clock className="w-3 h-3" />
          <span className="whitespace-nowrap">{period.time}</span>
        </div>
      </div>
    </div>
  );
}

export default function Timetable() {
  const [selectedClass, setSelectedClass] = useState('10-A');
  const classes = ['8-A', '9-A', '9-B', '10-A', '10-B', '11-A', '11-B', '12-A'];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Timetable</h1>
          <p className="text-gray-600 mt-1">Weekly class schedule and periods</p>
        </div>

        {/* Class Selector */}
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="h-10 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                Class {cls}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Info Card */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600">Class</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">{selectedClass}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Periods</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                {timetableData.timetable[0].periods.length}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Start Time</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">8:00 AM</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">End Time</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">1:30 PM</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Desktop Timetable Grid */}
      <div className="hidden lg:block">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-3 text-left font-semibold text-gray-700 w-32">
                      Time
                    </th>
                    {timetableData.timetable.map((day) => (
                      <th
                        key={day.day}
                        className="border border-gray-200 p-3 text-center font-semibold text-gray-700"
                      >
                        {day.day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timetableData.timetable[0].periods.map((_, periodIndex) => (
                    <tr key={periodIndex}>
                      <td className="border border-gray-200 p-3 bg-gray-50 font-medium text-sm text-gray-600 align-top">
                        {timetableData.timetable[0].periods[periodIndex].time}
                      </td>
                      {timetableData.timetable.map((day) => {
                        const period = day.periods[periodIndex];
                        const isBreak = period.subject === 'Break' || period.subject === 'Lunch Break';

                        return (
                          <td
                            key={day.day}
                            className={`border border-gray-200 p-3 align-top ${
                              isBreak ? 'bg-gray-50' : ''
                            }`}
                          >
                            <div>
                              <p className={`font-semibold text-sm ${isBreak ? 'text-gray-500' : 'text-gray-900'}`}>
                                {period.subject}
                              </p>
                              {!isBreak && (
                                <>
                                  <p className="text-xs text-gray-600 mt-1">{period.teacher}</p>
                                  <Badge variant="secondary" className="text-xs mt-1">
                                    {period.room}
                                  </Badge>
                                </>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile/Tablet Timetable */}
      <div className="lg:hidden space-y-4">
        {timetableData.timetable.map((day) => (
          <Card key={day.day}>
            <CardHeader>
              <CardTitle className="text-lg">{day.day}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {day.periods.map((period, index) => (
                  <PeriodCard key={index} period={period} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
