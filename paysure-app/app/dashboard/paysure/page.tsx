'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, Search, Filter, Eye, CheckCircle, Clock, AlertCircle, PlusCircle, TrendingUp } from 'lucide-react'

const deals = [
  { id: 'DEAL-2024-089', buyer: 'XYZ Enterprises', amount: 120000, status: 'active', date: '2024-01-15', dueDate: '2024-02-15', paid: 0, score: 85 },
  { id: 'DEAL-2024-088', buyer: 'ABC Corp', amount: 75000, status: 'completed', date: '2024-01-14', dueDate: '2024-02-14', paid: 75000, score: 92 },
  { id: 'DEAL-2024-087', buyer: 'LMN Industries', amount: 95000, status: 'pending', date: '2024-01-13', dueDate: '2024-02-13', paid: 0, score: 78 },
  { id: 'DEAL-2024-086', buyer: 'PQR Suppliers', amount: 150000, status: 'escalated', date: '2024-01-12', dueDate: '2024-01-27', paid: 50000, score: 65 },
]

export default function PaySurePage() {
  const [filter, setFilter] = useState('all')

  const filteredDeals = deals.filter(deal =>
    filter === 'all' || deal.status === filter
  )

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center mb-2">
            <Shield className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">PaySure Transactions</h1>
          </div>
          <p className="text-gray-600">Manage protected B2B payment deals with guarantee</p>
        </div>
        <Link href="/dashboard/paysure/new" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2">
          <PlusCircle className="h-5 w-5" />
          <span className="font-semibold">New PaySure Deal</span>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Active Deals" value="24" icon={<Shield className="h-5 w-5 text-blue-600" />} color="blue" />
        <StatCard title="Protected Amount" value="₹32L" icon={<TrendingUp className="h-5 w-5 text-green-600" />} color="green" />
        <StatCard title="Avg. PaySure Score" value="82" icon={<CheckCircle className="h-5 w-5 text-purple-600" />} color="purple" />
        <StatCard title="Escalated Cases" value="3" icon={<AlertCircle className="h-5 w-5 text-red-600" />} color="red" />
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search deals..."
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
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending Approval</option>
                <option value="escalated">Escalated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Deals Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Deal ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Buyer</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Paid</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Due Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">PaySure Score</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredDeals.map((deal) => (
              <tr key={deal.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <span className="font-semibold text-gray-900">{deal.id}</span>
                </td>
                <td className="px-6 py-4 text-gray-700">{deal.buyer}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">₹{deal.amount.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-gray-900">₹{deal.paid.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{Math.round((deal.paid / deal.amount) * 100)}% paid</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{deal.dueDate}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[60px]">
                      <div
                        className={`h-2 rounded-full ${
                          deal.score >= 80 ? 'bg-green-500' : deal.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${deal.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{deal.score}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={deal.status} />
                </td>
                <td className="px-6 py-4">
                  <Link href={`/dashboard/paysure/${deal.id}`}>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Info Card */}
      <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 p-6">
        <div className="flex items-start">
          <Shield className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is PaySure Protection?</h3>
            <p className="text-gray-700 mb-4">
              PaySure provides complete payment security for B2B transactions with escrow protection, automated monitoring,
              AI-powered reminders, and legal escalation support. Your payments are guaranteed with our trust layer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Payment Guarantee</p>
                  <p className="text-sm text-gray-600">Escrow protection for transactions</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Smart Monitoring</p>
                  <p className="text-sm text-gray-600">AI reminders and tracking</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Legal Support</p>
                  <p className="text-sm text-gray-600">Escalation and recovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon, color }: any) {
  const colorStyles = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    purple: 'bg-purple-50',
    red: 'bg-red-50',
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 ${colorStyles[color as keyof typeof colorStyles]} rounded-lg`}>{icon}</div>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    active: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    escalated: 'bg-red-100 text-red-800',
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status as keyof typeof styles]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}
