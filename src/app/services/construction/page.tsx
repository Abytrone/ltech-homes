'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Home, 
  Shield, 
  Users, 
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  DollarSign,
  FileText,
  Key,
  Search,
  Clock,
  Building,
  Wrench,
  Hammer,
  Award,
  BarChart3,
  Truck,
  HardHat
} from 'lucide-react'

export default function ConstructionPage() {
  const features = [
    {
      icon: HardHat,
      title: 'Professional Construction',
      description: 'Expert construction services with skilled craftsmen and modern building techniques.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and safety standards throughout the construction process.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'On-time project completion with efficient project management and scheduling.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Transparent pricing with no hidden costs and value-for-money construction solutions.'
    }
  ]

  const constructionTypes = [
    {
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and residential complexes',
      icon: Home,
      count: '200+',
      duration: '3-12 months'
    },
    {
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial facilities',
      icon: Building,
      count: '50+',
      duration: '6-24 months'
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Home renovations, office upgrades, and property improvements',
      icon: Wrench,
      count: '150+',
      duration: '1-6 months'
    },
    {
      title: 'Infrastructure Projects',
      description: 'Roads, bridges, and public infrastructure development',
      icon: Truck,
      count: '25+',
      duration: '12-36 months'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Project Planning',
      description: 'Detailed project assessment, design, and planning with architectural consultation.',
      icon: FileText
    },
    {
      step: '02',
      title: 'Permits & Approvals',
      description: 'Obtain all necessary permits and regulatory approvals for construction.',
      icon: Shield
    },
    {
      step: '03',
      title: 'Site Preparation',
      description: 'Site clearing, foundation work, and preparation for construction activities.',
      icon: Wrench
    },
    {
      step: '04',
      title: 'Construction Phase',
      description: 'Main construction work with regular progress updates and quality checks.',
      icon: Hammer
    },
    {
      step: '05',
      title: 'Finishing & Inspection',
      description: 'Final finishing work, inspections, and quality assurance testing.',
      icon: CheckCircle
    },
    {
      step: '06',
      title: 'Project Handover',
      description: 'Final walkthrough, documentation, and project handover to client.',
      icon: Key
    }
  ]

  const benefits = [
    {
      icon: Award,
      title: 'Licensed & Insured',
      description: 'Fully licensed contractors with comprehensive insurance coverage.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced architects, engineers, and skilled construction workers.'
    },
    {
      icon: BarChart3,
      title: 'Project Management',
      description: 'Professional project management with regular updates and communication.'
    },
    {
      icon: Star,
      title: 'Quality Materials',
      description: 'High-quality materials and modern construction techniques for lasting results.'
    }
  ]

  const specialties = [
    {
      title: 'Green Building',
      description: 'Sustainable construction practices and eco-friendly building solutions',
      icon: Home,
      features: ['Energy Efficiency', 'Sustainable Materials', 'LEED Certification', 'Solar Integration']
    },
    {
      title: 'Smart Homes',
      description: 'Modern smart home technology integration and automation systems',
      icon: Building,
      features: ['Home Automation', 'Security Systems', 'Energy Management', 'IoT Integration']
    },
    {
      title: 'Luxury Construction',
      description: 'High-end residential and commercial construction with premium finishes',
      icon: Star,
      features: ['Premium Materials', 'Custom Design', 'Luxury Finishes', 'Exclusive Features']
    },
    {
      title: 'Affordable Housing',
      description: 'Cost-effective construction solutions for affordable housing projects',
      icon: DollarSign,
      features: ['Cost Optimization', 'Efficient Design', 'Quality Materials', 'Quick Delivery']
    }
  ]

  const constructionStats = [
    {
      title: 'Projects Completed',
      value: '400+',
      icon: Home
    },
    {
      title: 'Years Experience',
      value: '20+',
      icon: Award
    },
    {
      title: 'Client Satisfaction',
      value: '99%',
      icon: Star
    },
    {
      title: 'On-Time Delivery',
      value: '98%',
      icon: Clock
    }
  ]

  return (
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
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#E8A001]/10 to-[#E8A001]/10 dark:from-[#E8A001]/20 dark:to-[#E8A001]/20 border border-[#E8A001]/20 dark:border-[#E8A001]/30 backdrop-blur-sm mb-8"
              >
                <Hammer className="w-5 h-5 text-[#E8A001] dark:text-[#E8A001] mr-3" />
                <span className="text-sm font-medium text-gray-700 dark:text-white/90">Construction Services</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                Professional
                <span className="bg-[#E8A001] bg-clip-text text-transparent ml-4">
                  Construction
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Building dreams into reality with expert construction services. From residential homes to commercial 
                buildings, we deliver quality construction projects on time and within budget.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#E8A001] text-white rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Construction Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-lg hover:border-[#E8A001] hover:text-[#E8A001] dark:hover:border-[#E8A001] dark:hover:text-[#E8A001] transition-all duration-300"
                >
                  <Search className="w-5 h-5 mr-2" />
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Construction Stats */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Our Construction Track Record
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Proven expertise and exceptional results in construction across Ghana
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {constructionStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-16 h-16 bg-[#E8A001] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#E8A001] dark:text-[#E8A001] mb-2">
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

        {/* Construction Types */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Construction Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive construction solutions for all your building needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {constructionTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-16 h-16 bg-[#E8A001] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-[#E8A001] dark:text-[#E8A001]">
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

        {/* Specialties */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Construction Specialties
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Specialized construction expertise for unique project requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#E8A001] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <specialty.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                      {specialty.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {specialty.description}
                  </p>
                  <div className="space-y-2">
                    {specialty.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#E8A001] dark:text-[#E8A001] mr-3" />
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
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Why Choose Our Construction Service?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional construction services that deliver exceptional results
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
                  <div className="w-16 h-16 bg-[#E8A001] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                Our Construction Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A systematic approach to delivering quality construction projects
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
                    <div className="w-12 h-12 bg-[#E8A001] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <step.icon className="w-6 h-6 text-[#E8A001] dark:text-[#E8A001]" />
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
                Experience the advantages of working with Ghana&apos;s leading construction experts
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
                  <div className="w-16 h-16 bg-[#E8A001] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
        <section className="py-20 bg-[#E8A001]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Your Dream Project?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Let our expert construction team bring your vision to life with quality, efficiency, and professionalism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#E8A001] rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Construction Quote
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-[#E8A001] transition-all duration-300"
                >
                  <Search className="w-5 h-5 mr-2" />
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
    </div>
  )
}
