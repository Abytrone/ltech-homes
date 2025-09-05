'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Home, 
  Calendar, 
  Shield, 
  Users, 
  MapPin, 
  Star,
  ArrowRight,
  Phone,
  DollarSign,
  FileText,
  Key,
  Search,
  Clock,
  Building
} from 'lucide-react'
import { ThemeProvider } from '@/lib/theme-context'

export default function PropertyRentalsPage() {
  const features = [
    {
      icon: Search,
      title: 'Extensive Rental Portfolio',
      description: 'Access to hundreds of verified rental properties across Ghana\'s major cities.'
    },
    {
      icon: Calendar,
      title: 'Flexible Lease Terms',
      description: 'Short-term and long-term rental options to suit your lifestyle and needs.'
    },
    {
      icon: Shield,
      title: 'Verified Properties',
      description: 'All properties undergo thorough inspection and verification for quality assurance.'
    },
    {
      icon: Users,
      title: 'Tenant Support',
      description: 'Dedicated support team to assist with maintenance and rental-related queries.'
    }
  ]

  const rentalTypes = [
    {
      title: 'Residential Rentals',
      description: 'Apartments, houses, and condos for individuals and families',
      icon: Home,
      count: '300+',
      duration: '1-24 months'
    },
    {
      title: 'Commercial Rentals',
      description: 'Office spaces, retail shops, and commercial buildings',
      icon: Building,
      count: '80+',
      duration: '6-60 months'
    },
    {
      title: 'Short-term Rentals',
      description: 'Furnished apartments and houses for temporary stays',
      icon: Clock,
      count: '120+',
      duration: '1-6 months'
    },
    {
      title: 'Luxury Rentals',
      description: 'Premium properties with high-end amenities and services',
      icon: Star,
      count: '50+',
      duration: '3-24 months'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Property Search',
      description: 'Browse our extensive rental portfolio and filter by location, budget, and preferences.',
      icon: Search
    },
    {
      step: '02',
      title: 'Property Viewing',
      description: 'Schedule and attend property viewings with our rental specialists.',
      icon: Home
    },
    {
      step: '03',
      title: 'Application Process',
      description: 'Complete rental application with required documentation and references.',
      icon: FileText
    },
    {
      step: '04',
      title: 'Background Check',
      description: 'Quick and efficient tenant screening and background verification.',
      icon: UserCheck
    },
    {
      step: '05',
      title: 'Lease Agreement',
      description: 'Review and sign lease agreement with clear terms and conditions.',
      icon: FileText
    },
    {
      step: '06',
      title: 'Move-in & Support',
      description: 'Smooth move-in process with ongoing tenant support services.',
      icon: Key
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Rates',
      description: 'Access to the best rental rates in the market with transparent pricing.'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Safe and secure rental process with proper legal documentation.'
    },
    {
      icon: Users,
      title: 'Expert Assistance',
      description: 'Professional rental specialists to guide you through the entire process.'
    },
    {
      icon: Star,
      title: 'Quality Properties',
      description: 'Carefully selected properties that meet our high quality standards.'
    }
  ]

  const locations = [
    {
      city: 'Accra',
      properties: '200+',
      avgRent: 'GHS 2,500',
      icon: MapPin
    },
    {
      city: 'Kumasi',
      properties: '150+',
      avgRent: 'GHS 1,800',
      icon: MapPin
    },
    {
      city: 'Tamale',
      properties: '80+',
      avgRent: 'GHS 1,200',
      icon: MapPin
    },
    {
      city: 'Takoradi',
      properties: '60+',
      avgRent: 'GHS 1,500',
      icon: MapPin
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
                <Home className="w-5 h-5 text-[#DC2626] dark:text-[#F87171] mr-3" />
                <span className="text-sm font-medium text-gray-700 dark:text-white/90">Property Rentals</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                Find Your Perfect
                <span className="bg-gradient-to-r from-[#DC2626] to-[#F87171] bg-clip-text text-transparent ml-4">
                  Rental Home
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Discover exceptional rental properties across Ghana with flexible lease terms, 
                competitive rates, and comprehensive tenant support services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/gallery"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#DC2626] to-[#F87171] text-white rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Browse Rentals
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-lg hover:border-[#DC2626] hover:text-[#DC2626] dark:hover:border-[#F87171] dark:hover:text-[#F87171] transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Rental Help
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rental Types */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Rental Categories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Choose from our diverse range of rental properties to suit every need and budget
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rentalTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-[#DC2626] dark:text-[#F87171]">
                      {type.count}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {type.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Why Choose Our Rental Service?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive rental solutions designed to make finding and securing your ideal rental property effortless
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
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Our Rental Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A simple, transparent process to secure your ideal rental property quickly and efficiently
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

        {/* Locations */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Rental Locations
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Find rental properties in Ghana&apos;s most desirable cities and neighborhoods
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <location.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {location.city}
                  </h3>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-[#DC2626] dark:text-[#F87171]">
                      {location.properties}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Average Rent: {location.avgRent}
                    </div>
                  </div>
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
                Experience the advantages of working with Ghana&apos;s leading rental property specialists
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
                Ready to Find Your Rental Home?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Start your rental journey today with our expert team and extensive property portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#DC2626] rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Rental Assistance
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-[#DC2626] transition-all duration-300"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Browse Rentals
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  )
}
