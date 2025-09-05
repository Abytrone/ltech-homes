'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Home, 
  Settings, 
  Shield, 
  Users, 
  Star,
  ArrowRight,
  Phone,
  DollarSign,
  FileText,
  Search,
  Wrench,
  TrendingUp,
  BarChart3,
  CheckCircle
} from 'lucide-react'
import { ThemeProvider } from '@/lib/theme-context'

export default function PropertyManagementPage() {
  const features = [
    {
      icon: Users,
      title: 'Tenant Management',
      description: 'Complete tenant screening, onboarding, and ongoing relationship management services.'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: '24/7 maintenance support with a network of trusted contractors and service providers.'
    },
    {
      icon: DollarSign,
      title: 'Rent Collection',
      description: 'Automated rent collection, late payment handling, and financial reporting systems.'
    },
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Ensure full compliance with local rental laws and property regulations.'
    }
  ]

  const services = [
    {
      title: 'Full Property Management',
      description: 'Complete end-to-end property management including tenant relations, maintenance, and financial management',
      icon: Settings,
      features: ['Tenant Screening', 'Rent Collection', 'Maintenance', 'Legal Compliance']
    },
    {
      title: 'Maintenance Services',
      description: 'Comprehensive maintenance and repair services to keep your property in excellent condition',
      icon: Wrench,
      features: ['24/7 Support', 'Preventive Maintenance', 'Emergency Repairs', 'Quality Control']
    },
    {
      title: 'Financial Management',
      description: 'Professional financial management including rent collection, expense tracking, and reporting',
      icon: BarChart3,
      features: ['Rent Collection', 'Expense Tracking', 'Financial Reports', 'Tax Preparation']
    },
    {
      title: 'Tenant Relations',
      description: 'Dedicated tenant support services to maintain positive relationships and reduce turnover',
      icon: Users,
      features: ['Tenant Screening', 'Lease Management', 'Conflict Resolution', 'Renewal Services']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Property Assessment',
      description: 'Comprehensive evaluation of your property and current management needs.',
      icon: Search
    },
    {
      step: '02',
      title: 'Management Agreement',
      description: 'Customized management agreement tailored to your specific requirements.',
      icon: FileText
    },
    {
      step: '03',
      title: 'Tenant Transition',
      description: 'Smooth transition of existing tenants or new tenant acquisition.',
      icon: Users
    },
    {
      step: '04',
      title: 'Ongoing Management',
      description: 'Continuous property management with regular updates and reporting.',
      icon: Settings
    },
    {
      step: '05',
      title: 'Maintenance Coordination',
      description: 'Proactive maintenance scheduling and emergency response services.',
      icon: Wrench
    },
    {
      step: '06',
      title: 'Financial Reporting',
      description: 'Regular financial reports and performance analytics for your property.',
      icon: BarChart3
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Maximize Returns',
      description: 'Optimize rental income and property value through professional management.'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Free up your time by delegating all property management responsibilities to experts.'
    },
    {
      icon: Shield,
      title: 'Reduce Risk',
      description: 'Minimize legal and financial risks with professional property management.'
    },
    {
      icon: Star,
      title: 'Quality Service',
      description: 'Maintain high property standards and tenant satisfaction levels.'
    }
  ]

  const managementStats = [
    {
      title: 'Properties Managed',
      value: '500+',
      icon: Home
    },
    {
      title: 'Tenant Satisfaction',
      value: '98%',
      icon: Star
    },
    {
      title: 'Rent Collection Rate',
      value: '99.5%',
      icon: DollarSign
    },
    {
      title: 'Response Time',
      value: '< 2hrs',
      icon: Clock
    }
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-200 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#DC2626]/10 to-[#F87171]/10 dark:from-[#DC2626]/20 dark:to-[#F87171]/20 border border-[#DC2626]/20 dark:border-[#DC2626]/30 backdrop-blur-sm mb-8"
              >
                <Settings className="w-5 h-5 text-[#DC2626] dark:text-[#F87171] mr-3" />
                <span className="text-sm font-medium text-gray-700 dark:text-white/90">Property Management</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                Professional
                <span className="bg-gradient-to-r from-[#DC2626] to-[#F87171] bg-clip-text text-transparent ml-4">
                  Property Management
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Maximize your property investment with our comprehensive management services. 
                From tenant relations to maintenance, we handle everything so you don&apos;t have to.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#DC2626] to-[#F87171] text-white rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Management Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-lg hover:border-[#DC2626] hover:text-[#DC2626] dark:hover:border-[#F87171] dark:hover:text-[#F87171] transition-all duration-300"
                >
                  <Settings className="w-5 h-5 mr-2" />
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Management Stats */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Our Management Performance
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Proven results and exceptional performance in property management across Ghana
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {managementStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#DC2626] dark:text-[#F87171] mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {stat.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Management Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive property management solutions tailored to your investment goals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#DC2626] dark:text-[#F87171] mr-3" />
                        <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Why Choose Our Management Service?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional property management that maximizes your investment returns
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Our Management Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A systematic approach to professional property management
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <step.icon className="w-6 h-6 text-[#DC2626] dark:text-[#F87171]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Experience the advantages of professional property management
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#DC2626] to-[#F87171]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Maximize Your Property Investment?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Let our professional team manage your property and maximize your returns with minimal effort on your part.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#DC2626] rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Management Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-[#DC2626] transition-all duration-300"
                >
                  <Settings className="w-5 h-5 mr-2" />
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  )
}
