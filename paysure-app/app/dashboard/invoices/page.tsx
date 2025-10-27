'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Search, Filter, Download, Send, Eye, Edit, Trash2, PlusCircle, CheckCircle, Clock, XCircle } from 'lucide-react'

const invoices = [
  { id: 'INV-2024-159', customer: 'XYZ Enterprises', amount: 67500, date: '2024-01-15', dueDate: '2024-02-15', status: 'pending', paysuregProtected: true },
  { id: 'INV-2024-158', customer: 'ABC Corp', amount: 125000, date: '2024-01-14', dueDate: '2024-02-14', status: 'paid', paysuregProtected: true },
  { id: 'INV-2024-157', customer: 'LMN Industries', amount: 45000, date: '2024-01-13', dueDate: '2024-02-13', status: 'overdue', paysuregProtected: false },
  { id: 'INV-2024-156', customer: 'PQR Suppliers', amount: 89000, date: '2024-01-12', dueDate: '2024-02-12', status: 'pending', paysuregProtected: true },
  { id: 'INV-2024-155', customer: 'DEF Solutions', amount: 52000, date: '2024-01-11', dueDate: '2024-02-11', status: 'paid', paysuregProtected: false },
]

export default function InvoicesPage() {
  const [filter, setFilter] = useState('all')

  const filteredInvoices = invoices.filter(inv =>
    filter === 'all' || inv.status === filter
  )

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>
          <p className="text-gray-600">Manage all your sales invoices</p>
        </div>
        <Link href="/dashboard/invoices/new" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2">
          <PlusCircle className="h-5 w-5" />
          <span className="font-semibold">Create Invoice</span>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Invoices" value="159" icon={<FileText className="h-5 w-5 text-blue-600" />} />
        <StatCard title="Paid" value="₹8.5L" icon={<CheckCircle className="h-5 w-5 text-green-600" />} />
        <StatCard title="Pending" value="₹4.2L" icon={<Clock className="h-5 w-5 text-yellow-600" />} />
        <StatCard title="Overdue" value="₹1.1L" icon={<XCircle className="h-5 w-5 text-red-600" />} />
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search invoices..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <Download className="h-5 w-5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Invoice ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Customer</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Due Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredInvoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-900">{invoice.id}</span>
                    {invoice.paysuregProtected && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Protected
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">{invoice.customer}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">₹{invoice.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-gray-600">{invoice.date}</td>
                <td className="px-6 py-4 text-gray-600">{invoice.dueDate}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={invoice.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg" title="View">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg" title="Send">
                      <Send className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg" title="Download">
                      <Download className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg" title="Edit">
                      <Edit className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon }: any) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">{icon}</div>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    paid: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    overdue: 'bg-red-100 text-red-800',
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status as keyof typeof styles]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}
