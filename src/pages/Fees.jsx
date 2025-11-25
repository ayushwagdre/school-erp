import { useState } from 'react';
import { DollarSign, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import Badge from '../components/ui/Badge';
import { feesStructure, feePayments } from '../data/feesData';

export default function Fees() {
  const totalExpected = feePayments.reduce((sum, fee) => sum + fee.totalFees, 0);
  const totalCollected = feePayments.reduce((sum, fee) => sum + fee.paidAmount, 0);
  const totalDue = feePayments.reduce((sum, fee) => sum + fee.dueAmount, 0);
  const collectionPercentage = Math.round((totalCollected / totalExpected) * 100);

  const paidStudents = feePayments.filter(f => f.status === 'Paid').length;
  const partialStudents = feePayments.filter(f => f.status === 'Partial').length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Fees Management</h1>
        <p className="text-gray-600 mt-1">Track fee collection and payment status</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Expected</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  ₹{(totalExpected / 100000).toFixed(1)}L
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Collected</p>
                <p className="text-2xl font-bold text-green-600 mt-1">
                  ₹{(totalCollected / 100000).toFixed(1)}L
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-red-600 mt-1">
                  ₹{(totalDue / 100000).toFixed(1)}L
                </p>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Collection %</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">
                  {collectionPercentage}%
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="structure">
        {({ activeTab, setActiveTab }) => (
          <>
            <TabsList>
              <TabsTrigger value="structure" activeTab={activeTab} setActiveTab={setActiveTab}>
                Fee Structure
              </TabsTrigger>
              <TabsTrigger value="payments" activeTab={activeTab} setActiveTab={setActiveTab}>
                Payment Status
              </TabsTrigger>
            </TabsList>

            {/* Fee Structure Tab */}
            <TabsContent value="structure" activeTab={activeTab}>
              {/* Desktop Table */}
              <Card className="hidden md:block">
                <CardHeader>
                  <CardTitle>Class-wise Fee Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Class</TableHead>
                        <TableHead>Tuition Fee</TableHead>
                        <TableHead>Lab Fee</TableHead>
                        <TableHead>Library Fee</TableHead>
                        <TableHead>Sports Fee</TableHead>
                        <TableHead>Exam Fee</TableHead>
                        <TableHead>Misc Fee</TableHead>
                        <TableHead className="font-semibold">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {feesStructure.map((fee) => (
                        <TableRow key={fee.class}>
                          <TableCell className="font-medium">Class {fee.class}</TableCell>
                          <TableCell>₹{fee.tuitionFee.toLocaleString()}</TableCell>
                          <TableCell>₹{fee.labFee.toLocaleString()}</TableCell>
                          <TableCell>₹{fee.libraryFee.toLocaleString()}</TableCell>
                          <TableCell>₹{fee.sportsFee.toLocaleString()}</TableCell>
                          <TableCell>₹{fee.examFee.toLocaleString()}</TableCell>
                          <TableCell>₹{fee.miscFee.toLocaleString()}</TableCell>
                          <TableCell className="font-bold">₹{fee.total.toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {feesStructure.map((fee) => (
                  <Card key={fee.class}>
                    <CardHeader>
                      <CardTitle className="text-lg">Class {fee.class}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tuition Fee:</span>
                          <span className="font-medium">₹{fee.tuitionFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lab Fee:</span>
                          <span className="font-medium">₹{fee.labFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Library Fee:</span>
                          <span className="font-medium">₹{fee.libraryFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sports Fee:</span>
                          <span className="font-medium">₹{fee.sportsFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Exam Fee:</span>
                          <span className="font-medium">₹{fee.examFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Misc Fee:</span>
                          <span className="font-medium">₹{fee.miscFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-gray-200">
                          <span className="font-semibold text-gray-900">Total:</span>
                          <span className="font-bold text-lg">₹{fee.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Payment Status Tab */}
            <TabsContent value="payments" activeTab={activeTab}>
              {/* Desktop Table */}
              <Card className="hidden md:block">
                <CardHeader>
                  <CardTitle>Student Payment Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex gap-4 text-sm">
                    <span className="text-gray-600">
                      Fully Paid: <span className="font-semibold text-green-600">{paidStudents}</span>
                    </span>
                    <span className="text-gray-600">
                      Partial Payment: <span className="font-semibold text-yellow-600">{partialStudents}</span>
                    </span>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead>Total Fees</TableHead>
                        <TableHead>Paid Amount</TableHead>
                        <TableHead>Due Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {feePayments.map((payment) => (
                        <TableRow key={payment.studentId}>
                          <TableCell className="font-medium">{payment.studentName}</TableCell>
                          <TableCell>Class {payment.class}</TableCell>
                          <TableCell>₹{payment.totalFees.toLocaleString()}</TableCell>
                          <TableCell className="text-green-600 font-medium">
                            ₹{payment.paidAmount.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-red-600 font-medium">
                            ₹{payment.dueAmount.toLocaleString()}
                          </TableCell>
                          <TableCell>
                            <Badge variant={payment.status === 'Paid' ? 'success' : 'warning'}>
                              {payment.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                <div className="flex gap-4 text-sm mb-4">
                  <span className="text-gray-600">
                    Fully Paid: <span className="font-semibold text-green-600">{paidStudents}</span>
                  </span>
                  <span className="text-gray-600">
                    Partial Payment: <span className="font-semibold text-yellow-600">{partialStudents}</span>
                  </span>
                </div>
                {feePayments.map((payment) => (
                  <Card key={payment.studentId}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{payment.studentName}</h3>
                          <p className="text-sm text-gray-600">Class {payment.class}</p>
                        </div>
                        <Badge variant={payment.status === 'Paid' ? 'success' : 'warning'}>
                          {payment.status}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Fees:</span>
                          <span className="font-medium">₹{payment.totalFees.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Paid Amount:</span>
                          <span className="font-medium text-green-600">₹{payment.paidAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Due Amount:</span>
                          <span className="font-medium text-red-600">₹{payment.dueAmount.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
}
