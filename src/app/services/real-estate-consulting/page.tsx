'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Home, 
  TrendingUp, 
  Shield, 
  Users, 
  MapPin, 
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  DollarSign,
  Search,
  Building,
  Wrench,
  BarChart3,
  Lightbulb,
  Target,
  Award,
  BookOpen,
  Presentation
} from 'lucide-react'
import { ThemeProvider } from '@/lib/theme-context'

export default function RealEstateConsultingPage() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Strategic Planning',
      description: 'Comprehensive real estate strategies tailored to your investment goals and market conditions.'
    },
    {
      icon: BarChart3,
      title: 'Market Analysis',
      description: 'In-depth market research and analysis to identify the best investment opportunities.'
    },
    {
      icon: Target,
      title: 'Investment Advisory',
      description: 'Expert guidance on property investments, portfolio diversification, and risk management.'
    },
    {
      icon: Award,
      title: 'Due Diligence',
      description: 'Thorough property evaluation and risk assessment before making investment decisions.'
    }
  ]

  const consultingServices = [
    {
      title: 'Investment Advisory',
      description: 'Strategic investment planning and portfolio optimization for maximum returns',
      icon: TrendingUp,
      features: ['Market Analysis', 'Investment Strategy', 'Risk Assessment', 'Portfolio Management'],
      duration: 'Ongoing'
    },
    {
      title: 'Property Valuation',
      description: 'Professional property valuation services for buying, selling, and investment decisions',
      icon: DollarSign,
      features: ['Market Valuation', 'Investment Analysis', 'Comparative Analysis', 'Future Projections'],
      duration: '1-3 Days'
    },
    {
      title: 'Market Research',
      description: 'Comprehensive market research and trend analysis for informed decision making',
      icon: BarChart3,
      features: ['Market Trends', 'Price Analysis', 'Demand Forecasting', 'Competition Analysis'],
      duration: '1-2 Weeks'
    },
    {
      title: 'Development Consulting',
      description: 'Expert guidance for property development projects from concept to completion',
      icon: Building,
      features: ['Feasibility Studies', 'Project Planning', 'Cost Analysis', 'Risk Management'],
      duration: 'Project-based'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Comprehensive discussion of your goals, requirements, and investment objectives.',
      icon: Users
    },
    {
      step: '02',
      title: 'Market Research',
      description: 'In-depth analysis of market conditions, trends, and opportunities in your target area.',
      icon: Search
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'Customized strategy development based on research findings and your specific needs.',
      icon: Lightbulb
    },
    {
      step: '04',
      title: 'Implementation Support',
      description: 'Ongoing support and guidance throughout the implementation of your real estate strategy.',
      icon: Target
    },
    {
      step: '05',
      title: 'Performance Monitoring',
      description: 'Regular monitoring and evaluation of your investment performance and market conditions.',
      icon: BarChart3
    },
    {
      step: '06',
      title: 'Strategy Optimization',
      description: 'Continuous optimization and adjustment of strategies based on market changes and results.',
      icon: TrendingUp
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Maximize Returns',
      description: 'Strategic insights to optimize your real estate investment returns and minimize risks.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Comprehensive risk assessment and mitigation strategies for secure investments.'
    },
    {
      icon: Lightbulb,
      title: 'Expert Insights',
      description: 'Access to deep market knowledge and professional expertise in real estate.'
    },
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Clear strategic direction and actionable recommendations for your investments.'
    }
  ]

  const expertiseAreas = [
    {
      title: 'Residential Real Estate',
      description: 'Expertise in residential property markets, trends, and investment strategies',
      icon: Home,
      markets: ['Accra', 'Kumasi', 'Tamale', 'Takoradi']
    },
    {
      title: 'Commercial Real Estate',
      description: 'Specialized knowledge in commercial property investments and development',
      icon: Building,
      markets: ['Office Buildings', 'Retail Spaces', 'Industrial Properties', 'Mixed-Use']
    },
    {
      title: 'Investment Properties',
      description: 'Strategic guidance for rental properties and income-generating real estate',
      icon: DollarSign,
      markets: ['Rental Properties', 'REITs', 'Property Funds', 'Portfolio Management']
    },
    {
      title: 'Development Projects',
      description: 'Comprehensive consulting for property development and construction projects',
      icon: Wrench,
      markets: ['Residential Development', 'Commercial Development', 'Infrastructure', 'Urban Planning']
    }
  ]

  const consultingStats = [
    {
      title: 'Years of Experience',
      value: '15+',
      icon: Award
    },
    {
      title: 'Projects Consulted',
      value: '500+',
      icon: Target
    },
    {
      title: 'Client Satisfaction',
      value: '99%',
      icon: Star
    },
    {
      title: 'Market Coverage',
      value: '100%',
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
                <Lightbulb className="w-5 h-5 text-[#DC2626] dark:text-[#F87171] mr-3" />
                <span className="text-sm font-medium text-gray-700 dark:text-white/90">Real Estate Consulting</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                Expert
                <span className="bg-gradient-to-r from-[#DC2626] to-[#F87171] bg-clip-text text-transparent ml-4">
                  Real Estate Consulting
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Make informed real estate decisions with our expert consulting services. 
                Strategic insights, market analysis, and professional guidance for all your property investments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#DC2626] to-[#F87171] text-white rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-lg hover:border-[#DC2626] hover:text-[#DC2626] dark:hover:border-[#F87171] dark:hover:text-[#F87171] transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Consulting Stats */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Our Consulting Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Proven track record of delivering exceptional consulting results across Ghana&apos;s real estate market
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultingStats.map((stat, index) => (
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

        {/* Consulting Services */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Consulting Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive consulting solutions tailored to your real estate investment needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingServices.map((service, index) => (
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
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#DC2626] dark:text-[#F87171] font-medium">
                        Duration: {service.duration}
                      </p>
                    </div>
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

        {/* Expertise Areas */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Areas of Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Specialized knowledge across all sectors of Ghana&apos;s real estate market
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.markets.map((market, marketIndex) => (
                      <span
                        key={marketIndex}
                        className="px-3 py-1 bg-gradient-to-r from-[#DC2626]/10 to-[#F87171]/10 dark:from-[#DC2626]/20 dark:to-[#F87171]/20 text-[#DC2626] dark:text-[#F87171] rounded-full text-sm font-medium"
                      >
                        {market}
                      </span>
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
                Why Choose Our Consulting Service?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional consulting that delivers strategic insights and measurable results
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
                Our Consulting Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A systematic approach to delivering exceptional consulting results
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
                Experience the advantages of professional real estate consulting
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
                Ready to Make Informed Real Estate Decisions?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Get expert consulting services to maximize your real estate investments and minimize risks.
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
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-[#DC2626] transition-all duration-300"
                >
                  <Presentation className="w-5 h-5 mr-2" />
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
