'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Shield, Menu, Bell, User, Search, TrendingUp, TrendingDown,
  FileText, CreditCard, Package, Users, Settings, LogOut,
  PlusCircle, AlertCircle, Clock, CheckCircle2, DollarSign
} from 'lucide-react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const salesData = [
  { month: 'Jan', sales: 45000, purchases: 32000 },
  { month: 'Feb', sales: 52000, purchases: 35000 },
  { month: 'Mar', sales: 48000, purchases: 30000 },
  { month: 'Apr', sales: 61000, purchases: 42000 },
  { month: 'May', sales: 55000, purchases: 38000 },
  { month: 'Jun', sales: 67000, purchases: 45000 },
]

const cashflowData = [
  { name: 'Receivables', value: 450000 },
  { name: 'Payables', value: 280000 },
  { name: 'Cash', value: 125000 },
]

const COLORS = ['#3b82f6', '#ef4444', '#10b981']

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          {sidebarOpen && (
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PaySure</span>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <NavItem icon={<TrendingUp />} label="Dashboard" active sidebarOpen={sidebarOpen} href="/dashboard" />
          <NavItem icon={<FileText />} label="Invoices" sidebarOpen={sidebarOpen} href="/dashboard/invoices" />
          <NavItem icon={<CreditCard />} label="Payments" sidebarOpen={sidebarOpen} href="/dashboard/payments" />
          <NavItem icon={<Shield />} label="PaySure Deals" sidebarOpen={sidebarOpen} href="/dashboard/paysure" />
          <NavItem icon={<Package />} label="Inventory" sidebarOpen={sidebarOpen} href="/dashboard/inventory" />
          <NavItem icon={<Users />} label="Customers" sidebarOpen={sidebarOpen} href="/dashboard/customers" />
          <NavItem icon={<FileText />} label="Reports" sidebarOpen={sidebarOpen} href="/dashboard/reports" />
          <NavItem icon={<Settings />} label="Settings" sidebarOpen={sidebarOpen} href="/dashboard/settings" />
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <NavItem icon={<LogOut />} label="Logout" sidebarOpen={sidebarOpen} href="/" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search invoices, customers, transactions..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Acme Corp</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <StatCard
              icon={<TrendingUp className="h-6 w-6 text-green-600" />}
              title="Total Receivables"
              value="₹4,50,000"
              change="+12.5%"
              positive
            />
            <StatCard
              icon={<TrendingDown className="h-6 w-6 text-red-600" />}
              title="Total Payables"
              value="₹2,80,000"
              change="-5.2%"
              positive={false}
            />
            <StatCard
              icon={<DollarSign className="h-6 w-6 text-blue-600" />}
              title="Cash Balance"
              value="₹1,25,000"
              change="+8.1%"
              positive
            />
            <StatCard
              icon={<Shield className="h-6 w-6 text-purple-600" />}
              title="PaySure Protected"
              value="₹3,20,000"
              change="+15.3%"
              positive
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales & Purchases</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#3b82f6" name="Sales" />
                  <Bar dataKey="purchases" fill="#ef4444" name="Purchases" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cash Flow</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={cashflowData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {cashflowData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Link href="/dashboard/invoices/new" className="bg-blue-600 text-white rounded-xl p-4 hover:bg-blue-700 transition flex items-center justify-center space-x-2">
              <PlusCircle className="h-5 w-5" />
              <span className="font-semibold">Create Invoice</span>
            </Link>
            <Link href="/dashboard/payments/new" className="bg-green-600 text-white rounded-xl p-4 hover:bg-green-700 transition flex items-center justify-center space-x-2">
              <PlusCircle className="h-5 w-5" />
              <span className="font-semibold">Record Payment</span>
            </Link>
            <Link href="/dashboard/paysure/new" className="bg-purple-600 text-white rounded-xl p-4 hover:bg-purple-700 transition flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">New PaySure Deal</span>
            </Link>
            <Link href="/dashboard/expenses/new" className="bg-orange-600 text-white rounded-xl p-4 hover:bg-orange-700 transition flex items-center justify-center space-x-2">
              <PlusCircle className="h-5 w-5" />
              <span className="font-semibold">Add Expense</span>
            </Link>
          </div>

          {/* Alerts & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Alerts & Notifications</h3>
              <div className="space-y-3">
                <Alert
                  icon={<AlertCircle className="h-5 w-5 text-red-600" />}
                  title="3 Overdue Invoices"
                  description="Total amount: ₹85,000"
                  type="error"
                />
                <Alert
                  icon={<Clock className="h-5 w-5 text-yellow-600" />}
                  title="Payment Due Tomorrow"
                  description="INV-2024-156 - ₹45,000"
                  type="warning"
                />
                <Alert
                  icon={<CheckCircle2 className="h-5 w-5 text-green-600" />}
                  title="Payment Received"
                  description="INV-2024-148 - ₹32,500"
                  type="success"
                />
                <Alert
                  icon={<Shield className="h-5 w-5 text-blue-600" />}
                  title="PaySure Deal Approved"
                  description="DEAL-2024-089 - ₹1,20,000"
                  type="info"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
              <div className="space-y-3">
                <Transaction
                  type="invoice"
                  title="INV-2024-159"
                  customer="XYZ Enterprises"
                  amount="₹67,500"
                  date="Today, 2:30 PM"
                  status="pending"
                />
                <Transaction
                  type="payment"
                  title="Payment Received"
                  customer="ABC Corp"
                  amount="₹45,000"
                  date="Today, 11:15 AM"
                  status="completed"
                />
                <Transaction
                  type="invoice"
                  title="INV-2024-158"
                  customer="LMN Industries"
                  amount="₹1,25,000"
                  date="Yesterday"
                  status="paid"
                />
                <Transaction
                  type="payment"
                  title="Supplier Payment"
                  customer="PQR Suppliers"
                  amount="₹32,000"
                  date="2 days ago"
                  status="completed"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function NavItem({ icon, label, active = false, sidebarOpen, href }: any) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
        active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <div className="h-5 w-5">{icon}</div>
      {sidebarOpen && <span className="font-medium">{label}</span>}
    </Link>
  )
}

function StatCard({ icon, title, value, change, positive }: any) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <span className={`text-sm font-semibold ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  )
}

function Alert({ icon, title, description, type }: any) {
  const colors = {
    error: 'bg-red-50 border-red-200',
    warning: 'bg-yellow-50 border-yellow-200',
    success: 'bg-green-50 border-green-200',
    info: 'bg-blue-50 border-blue-200',
  }

  return (
    <div className={`border rounded-lg p-3 ${colors[type as keyof typeof colors]}`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900">{title}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

function Transaction({ type, title, customer, amount, date, status }: any) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800',
    paid: 'bg-blue-100 text-blue-800',
  }

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${type === 'invoice' ? 'bg-blue-50' : 'bg-green-50'}`}>
          {type === 'invoice' ? (
            <FileText className="h-5 w-5 text-blue-600" />
          ) : (
            <CreditCard className="h-5 w-5 text-green-600" />
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{title}</p>
          <p className="text-xs text-gray-500">{customer} • {date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-gray-900">{amount}</p>
        <span className={`text-xs px-2 py-1 rounded-full ${statusColors[status as keyof typeof statusColors]}`}>
          {status}
        </span>
      </div>
    </div>
  )
}
