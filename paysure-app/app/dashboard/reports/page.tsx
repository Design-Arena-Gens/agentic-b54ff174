'use client'

import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { FileText, Download, TrendingUp, DollarSign, Users, Package } from 'lucide-react'

const monthlyData = [
  { month: 'Jan', revenue: 450000, expenses: 320000, profit: 130000 },
  { month: 'Feb', revenue: 520000, expenses: 350000, profit: 170000 },
  { month: 'Mar', revenue: 480000, expenses: 300000, profit: 180000 },
  { month: 'Apr', revenue: 610000, expenses: 420000, profit: 190000 },
  { month: 'May', revenue: 550000, expenses: 380000, profit: 170000 },
  { month: 'Jun', revenue: 670000, expenses: 450000, profit: 220000 },
]

const categoryData = [
  { name: 'Sales', value: 3280000 },
  { name: 'Services', value: 1500000 },
  { name: 'Consulting', value: 800000 },
  { name: 'Other', value: 200000 },
]

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']

const reports = [
  { name: 'Balance Sheet', description: 'Assets, Liabilities & Equity', icon: <FileText className="h-5 w-5 text-blue-600" /> },
  { name: 'Profit & Loss', description: 'Revenue & Expense Summary', icon: <TrendingUp className="h-5 w-5 text-green-600" /> },
  { name: 'Cash Flow Statement', description: 'Cash Inflow & Outflow', icon: <DollarSign className="h-5 w-5 text-purple-600" /> },
  { name: 'Trial Balance', description: 'All Ledger Balances', icon: <FileText className="h-5 w-5 text-orange-600" /> },
  { name: 'GST Reports', description: 'GSTR-1, 3B, HSN Summary', icon: <FileText className="h-5 w-5 text-red-600" /> },
  { name: 'Receivables Aging', description: 'Outstanding Customer Dues', icon: <Users className="h-5 w-5 text-indigo-600" /> },
  { name: 'Payables Aging', description: 'Outstanding Supplier Dues', icon: <Users className="h-5 w-5 text-pink-600" /> },
  { name: 'Stock Summary', description: 'Inventory Valuation', icon: <Package className="h-5 w-5 text-teal-600" /> },
]

export default function ReportsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Financial Reports</h1>
        <p className="text-gray-600">Comprehensive business analytics and reports</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <MetricCard title="Total Revenue" value="₹57.8L" change="+15.2%" positive />
        <MetricCard title="Total Expenses" value="₹42.2L" change="+8.1%" positive={false} />
        <MetricCard title="Net Profit" value="₹15.6L" change="+24.3%" positive />
        <MetricCard title="Profit Margin" value="27%" change="+2.1%" positive />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Revenue vs Expenses</h3>
            <button className="text-gray-600 hover:text-gray-900">
              <Download className="h-5 w-5" />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
              <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Profit Trend</h3>
            <button className="text-gray-600 hover:text-gray-900">
              <Download className="h-5 w-5" />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} name="Profit" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Revenue by Category</h3>
            <button className="text-gray-600 hover:text-gray-900">
              <Download className="h-5 w-5" />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Ratios</h3>
          <div className="space-y-4">
            <RatioItem label="Current Ratio" value="2.8" description="Liquidity strength" />
            <RatioItem label="Quick Ratio" value="1.9" description="Short-term liquidity" />
            <RatioItem label="Debt to Equity" value="0.4" description="Financial leverage" />
            <RatioItem label="ROE" value="18.5%" description="Return on equity" />
            <RatioItem label="Receivable Days" value="45" description="Collection period" />
            <RatioItem label="Payable Days" value="30" description="Payment period" />
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reports.map((report, idx) => (
            <button
              key={idx}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition text-left"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="p-2 bg-gray-50 rounded-lg">{report.icon}</div>
                <Download className="h-4 w-4 text-gray-400" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{report.name}</h4>
              <p className="text-sm text-gray-600">{report.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function MetricCard({ title, value, change, positive }: any) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <p className="text-sm text-gray-600 mb-1">{title}</p>
      <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
      <p className={`text-sm font-semibold ${positive ? 'text-green-600' : 'text-red-600'}`}>
        {change}
      </p>
    </div>
  )
}

function RatioItem({ label, value, description }: any) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <div>
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <span className="text-lg font-bold text-blue-600">{value}</span>
    </div>
  )
}
