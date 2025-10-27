'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, PlusCircle, Trash2, Shield, Send } from 'lucide-react'
import Link from 'next/link'

export default function NewInvoicePage() {
  const router = useRouter()
  const [paysuregProtected, setPaysuregProtected] = useState(false)
  const [items, setItems] = useState([
    { description: '', quantity: 1, rate: 0, gst: 18, amount: 0 }
  ])

  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, rate: 0, gst: 18, amount: 0 }])
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const calculateTotal = () => {
    return items.reduce((sum, item) => {
      const baseAmount = item.quantity * item.rate
      const gstAmount = (baseAmount * item.gst) / 100
      return sum + baseAmount + gstAmount
    }, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/dashboard/invoices')
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <Link href="/dashboard/invoices" className="flex items-center text-gray-600 hover:text-gray-900 mb-4">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Invoices
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Create Sales Invoice</h1>
        <p className="text-gray-600">Generate a new invoice for your customer</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select Customer</option>
                    <option>XYZ Enterprises</option>
                    <option>ABC Corp</option>
                    <option>LMN Industries</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Date</label>
                  <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                  <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Terms</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Net 30</option>
                    <option>Net 15</option>
                    <option>Net 45</option>
                    <option>Due on Receipt</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Line Items</h3>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="grid grid-cols-12 gap-4 items-end">
                    <div className="col-span-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => {
                          const newItems = [...items]
                          newItems[index].description = e.target.value
                          setItems(newItems)
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Item description"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Qty</label>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => {
                          const newItems = [...items]
                          newItems[index].quantity = Number(e.target.value)
                          setItems(newItems)
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Rate</label>
                      <input
                        type="number"
                        value={item.rate}
                        onChange={(e) => {
                          const newItems = [...items]
                          newItems[index].rate = Number(e.target.value)
                          setItems(newItems)
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">GST %</label>
                      <select
                        value={item.gst}
                        onChange={(e) => {
                          const newItems = [...items]
                          newItems[index].gst = Number(e.target.value)
                          setItems(newItems)
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="0">0%</option>
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <button
                        type="button"
                        onClick={() => removeItem(index)}
                        className="w-full p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="h-5 w-5 mx-auto" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addItem}
                className="mt-4 w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition flex items-center justify-center"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                Add Line Item
              </button>
            </div>

            {/* Notes & Terms */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Additional notes for the customer..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Terms & Conditions</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Payment terms and conditions..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* PaySure Protection */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">PaySure Protection</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Activate payment guarantee to secure this transaction with escrow protection and legal escalation support.
              </p>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={paysuregProtected}
                  onChange={(e) => setPaysuregProtected(e.target.checked)}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-sm font-semibold text-gray-900">
                  Protect with PaySure Guarantee
                </span>
              </label>
            </div>

            {/* Total Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Invoice Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    ₹{items.reduce((sum, item) => sum + (item.quantity * item.rate), 0).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">GST</span>
                  <span className="font-semibold text-gray-900">
                    ₹{items.reduce((sum, item) => sum + ((item.quantity * item.rate * item.gst) / 100), 0).toLocaleString()}
                  </span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ₹{calculateTotal().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Save & Send Invoice
              </button>
              <button
                type="button"
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Save as Draft
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
