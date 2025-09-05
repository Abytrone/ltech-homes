'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Home, 
  TrendingUp, 
  Shield, 
  Users, 
  Star,
  ArrowRight,
  Phone,
  DollarSign,
  FileText,
  Key,
  Search,
  Target,
  Building
} from 'lucide-react'
import { ThemeProvider } from '@/lib/theme-context'

export default function PropertySalesPage() {
  const features = [
    {
      icon: Search,
      title: 'Property Search & Discovery',
      description: 'Advanced search tools and personalized recommendations to find your perfect property match.'
    },
    {
      icon: Target,
      title: 'Market Analysis',
      description: 'Comprehensive market insights and property valuations to ensure you make informed decisions.'
    },
    {
      icon: Shield,
      title: 'Legal Documentation',
      description: 'Complete legal support and documentation handling for secure property transactions.'
    },
    {
      icon: Users,
      title: 'Expert Negotiation',
      description: 'Professional negotiation services to secure the best deals and terms for your purchase.'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your requirements, budget, and preferences to understand your needs.',
      icon: Users
    },
    {
      step: '02',
      title: 'Property Search',
      description: 'Our team searches and presents suitable properties that match your criteria.',
      icon: Search
    },
    {
      step: '03',
      title: 'Property Viewing',
      description: 'Arrange and conduct property viewings with detailed inspections and assessments.',
      icon: Home
    },
    {
      step: '04',
      title: 'Negotiation & Offer',
      description: 'Expert negotiation to secure the best price and terms for your chosen property.',
      icon: TrendingUp
    },
    {
      step: '05',
      title: 'Legal Process',
      description: 'Complete all legal documentation, title searches, and transfer procedures.',
      icon: FileText
    },
    {
      step: '06',
      title: 'Property Handover',
      description: 'Final inspection, key handover, and post-purchase support services.',
      icon: Key
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Access to exclusive deals and market insights for the best property prices.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Comprehensive due diligence and legal protection throughout the buying process.'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Professional support from experienced real estate specialists and legal experts.'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Thorough property inspections and quality checks before purchase completion.'
    }
  ]

  const propertyTypes = [
    {
      title: 'Residential Properties',
      description: 'Luxury homes, apartments, townhouses, and family residences',
      icon: Home,
      count: '200+'
    },
    {
      title: 'Commercial Properties',
      description: 'Office buildings, retail spaces, and commercial complexes',
      icon: Building,
      count: '50+'
    },
    {
      title: 'Investment Properties',
      description: 'High-yield rental properties and development opportunities',
      icon: TrendingUp,
      count: '75+'
    },
    {
      title: 'Luxury Estates',
      description: 'Premium villas, penthouses, and exclusive properties',
      icon: Star,
      count: '25+'
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
                <span className="text-sm font-medium text-gray-700 dark:text-white/90">Property Sales</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                Find Your
                <span className="bg-gradient-to-r from-[#DC2626] to-[#F87171] bg-clip-text text-transparent ml-4">
                  Dream Property
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Discover exceptional properties across Ghana with our comprehensive property sales service. 
                From luxury homes to investment opportunities, we make your property dreams a reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/gallery"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#DC2626] to-[#F87171] text-white rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Browse Properties
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-lg hover:border-[#DC2626] hover:text-[#DC2626] dark:hover:border-[#F87171] dark:hover:text-[#F87171] transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Property Categories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore our diverse range of properties tailored to meet every need and budget
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {propertyTypes.map((type, index) => (
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
                  <div className="text-2xl font-bold text-[#DC2626] dark:text-[#F87171]">
                    {type.count}
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
                Why Choose Our Property Sales Service?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive support and expertise throughout your property buying journey
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
                Our Sales Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A streamlined, transparent process designed to make property buying simple and secure
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
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
                Experience the advantages of working with Ghana&apos;s leading property sales experts
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
                Ready to Find Your Dream Property?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Let our expert team guide you through the property buying process with confidence and ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#DC2626] rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-[#DC2626] transition-all duration-300"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Browse Properties
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  )
}
