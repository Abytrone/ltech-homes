'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Home, 
  Building, 
  Key, 
  Calculator,
  Shield,
  Users,
  MapPin,
  Phone,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  FileText,
  Search,
  Handshake
} from 'lucide-react'

export default function Services() {
  const mainServices = [
    {
      icon: Home,
      title: 'Property Sales',
      description: 'Find your dream home or investment property with our comprehensive sales service.',
      features: [
        'Extensive property database',
        'Professional property valuation',
        'Negotiation support',
        'Legal documentation assistance',
        'Post-sale support'
      ],
      price: 'From 2% commission',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Building,
      title: 'Property Rentals',
      description: 'Discover the perfect rental property or list your property for rent.',
      features: [
        'Tenant screening services',
        'Rental agreement preparation',
        'Property maintenance coordination',
        'Rent collection management',
        'Tenant-landlord mediation'
      ],
      price: 'From 1 month rent',
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: Key,
      title: 'Property Management',
      description: 'Professional property management services for landlords and property owners.',
      features: [
        '24/7 property monitoring',
        'Maintenance coordination',
        'Financial reporting',
        'Tenant relations',
        'Property marketing'
      ],
      price: 'From 8% monthly',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: Calculator,
      title: 'Property Valuation',
      description: 'Get accurate property valuations for sales, insurance, or investment purposes.',
      features: [
        'Market analysis',
        'Comparative market analysis',
        'Detailed valuation reports',
        'Investment potential assessment',
        'Legal compliance verification'
      ],
      price: 'From GHS 500',
      color: 'from-orange-600 to-orange-700'
    }
  ]

  const additionalServices = [
    {
      icon: Search,
      title: 'Property Search',
      description: 'Personalized property search based on your specific requirements and budget.'
    },
    {
      icon: FileText,
      title: 'Legal Documentation',
      description: 'Complete legal documentation support for all property transactions.'
    },
    {
      icon: Handshake,
      title: 'Investment Consulting',
      description: 'Expert advice on real estate investment opportunities and strategies.'
    },
    {
      icon: Shield,
      title: 'Insurance Services',
      description: 'Property insurance consultation and policy management services.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We meet with you to understand your needs, budget, and preferences.',
      icon: Users
    },
    {
      step: '02',
      title: 'Property Search',
      description: 'Our team searches our extensive database and market listings.',
      icon: Search
    },
    {
      step: '03',
      title: 'Property Viewing',
      description: 'We arrange and accompany you to view selected properties.',
      icon: MapPin
    },
    {
      step: '04',
      title: 'Negotiation',
      description: 'We handle all negotiations to get you the best possible deal.',
      icon: Handshake
    },
    {
      step: '05',
      title: 'Documentation',
      description: 'We ensure all legal documentation is properly prepared and filed.',
      icon: FileText
    },
    {
      step: '06',
      title: 'Completion',
      description: 'We guide you through the final steps to complete your transaction.',
      icon: CheckCircle
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Our <span className="text-[#E8A001]">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive real estate services designed to meet all your property needs. 
              From buying and selling to management and investment consulting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional real estate services tailored to your specific needs and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-[#E8A001] font-semibold">
                        {service.price}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/contact"
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Supporting services to ensure a complete and seamless real estate experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-[#E8A001] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A structured approach to ensure your real estate journey is smooth and successful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#E8A001] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <div className="w-12 h-12 bg-[#E8A001] rounded-2xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#E8A001]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We combine local expertise with modern technology to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Expertise</h3>
              <p className="opacity-90">
                15+ years of experience in Ghana&apos;s real estate market with deep local knowledge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="opacity-90">
                All transactions are legally verified and secure with comprehensive documentation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="opacity-90">
                Dedicated support throughout your entire real estate journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Contact us today to discuss your real estate needs and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#E8A001] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-[#E8A001] hover:text-[#E8A001] dark:hover:border-[#E8A001] dark:hover:text-[#E8A001] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>View Properties</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
