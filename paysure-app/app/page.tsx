'use client'

import Link from 'next/link'
import { Shield, TrendingUp, FileText, CreditCard, Users, Lock, CheckCircle, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">PaySure</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-blue-600">Features</Link>
              <Link href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
              <Link href="/signup" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Trusted B2B Payments + <br />
            <span className="text-blue-600">Smart Accounting</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Complete payment protection with integrated accounting. Secure your transactions, automate bookkeeping, and resolve disputes with legal escalation.
          </p>
          <Link href="/signup" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          {[
            { label: 'Protected Transactions', value: '₹500Cr+' },
            { label: 'Active Businesses', value: '10,000+' },
            { label: 'Payment Success Rate', value: '99.8%' },
            { label: 'Dispute Resolution', value: '< 7 days' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Business Solution</h2>
            <p className="text-xl text-gray-600">Everything you need to manage B2B payments and accounting</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-blue-600" />}
              title="Smart Accounting"
              description="Tally-grade double-entry bookkeeping with automated vouchers, GST compliance, and real-time financial reports"
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-blue-600" />}
              title="Payment Guarantee"
              description="Escrow protection, payment verification, and smart contracts ensure you get paid on time, every time"
            />
            <FeatureCard
              icon={<Lock className="h-10 w-10 text-blue-600" />}
              title="Legal Escalation"
              description="Automated reminders, digital legal notices, and partner law firms for quick dispute resolution"
            />
            <FeatureCard
              icon={<CreditCard className="h-10 w-10 text-blue-600" />}
              title="Multi-Gateway Payments"
              description="Accept payments via Razorpay, Stripe, bank transfer, UPI, cards with automated reconciliation"
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10 text-blue-600" />}
              title="Business Intelligence"
              description="AI-powered cashflow forecasting, payment analytics, and actionable insights to grow your business"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-blue-600" />}
              title="Team Collaboration"
              description="Role-based access, approval workflows, and multi-branch management for enterprise teams"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How PaySure Works</h2>
            <p className="text-xl text-gray-600">Simple, secure, and automated</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Sign Up', desc: 'Create account and verify business' },
              { step: '2', title: 'Create Invoice', desc: 'Generate PaySure-protected invoices' },
              { step: '3', title: 'Track Payment', desc: 'Auto-reminders and monitoring' },
              { step: '4', title: 'Get Paid', desc: 'Secure payment with dispute protection' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              name="Basic"
              price="₹999"
              period="/month"
              features={[
                'Up to 100 invoices/month',
                'Basic accounting features',
                'Payment gateway integration',
                'Email support',
                'GST compliance',
                'Mobile app access',
              ]}
            />
            <PricingCard
              name="Pro"
              price="₹2,999"
              period="/month"
              featured
              features={[
                'Unlimited invoices',
                'Full accounting suite',
                'PaySure payment guarantee',
                'Legal escalation support',
                'Priority support',
                'Advanced analytics',
                'Multi-branch management',
                'API access',
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Payments?</h2>
            <p className="text-xl mb-8 opacity-90">Join 10,000+ businesses that trust PaySure</p>
            <Link href="/signup" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">PaySure</span>
              </div>
              <p className="text-gray-400">Trusted B2B payments and smart accounting platform</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features">Features</Link></li>
                <li><Link href="#pricing">Pricing</Link></li>
                <li><Link href="/integrations">Integrations</Link></li>
                <li><Link href="/api">API Docs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/security">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PaySure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function PricingCard({ name, price, period, features, featured = false }: { name: string; price: string; period: string; features: string[]; featured?: boolean }) {
  return (
    <div className={`p-8 rounded-xl border-2 ${featured ? 'border-blue-600 shadow-xl' : 'border-gray-200'}`}>
      {featured && (
        <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/signup" className={`block text-center py-3 rounded-lg font-semibold transition ${featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
        Get Started
      </Link>
    </div>
  )
}
