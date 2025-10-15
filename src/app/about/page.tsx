'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  Calendar
} from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and transparency in all our dealings.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every property transaction and client interaction.'
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Our clients\' needs and satisfaction are at the center of everything we do.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace technology and innovative solutions to enhance the real estate experience.'
    }
  ]

  const team = [
    {
      name: 'Kwame Asante',
      position: 'CEO & Founder',
      experience: '15+ years',
      description: 'Visionary leader with extensive experience in Ghana\'s real estate market.'
    },
    {
      name: 'Ama Serwaa',
      position: 'Head of Sales',
      experience: '12+ years',
      description: 'Expert in property sales with a track record of successful transactions.'
    },
    {
      name: 'Kofi Mensah',
      position: 'Property Manager',
      experience: '10+ years',
      description: 'Specializes in property management and client relations.'
    },
    {
      name: 'Efua Boateng',
      position: 'Legal Advisor',
      experience: '8+ years',
      description: 'Ensures all transactions are legally compliant and secure.'
    }
  ]

  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'LTech Homes was established with a vision to revolutionize real estate in Ghana.'
    },
    {
      year: '2012',
      title: 'First 100 Properties',
      description: 'Successfully completed our first 100 property transactions across major cities.'
    },
    {
      year: '2016',
      title: 'Digital Platform Launch',
      description: 'Launched our online platform to enhance property search and client experience.'
    },
    {
      year: '2020',
      title: '500+ Properties Sold',
      description: 'Reached a major milestone of 500+ successful property transactions.'
    },
    {
      year: '2023',
      title: 'Award Recognition',
      description: 'Received the Best Real Estate Company award from Ghana Property Awards.'
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
              About <span className="bg-gradient-to-r from-[#DC2626] to-[#F87171] bg-clip-text text-transparent">LTech Homes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in Ghana&apos;s real estate market for over 15 years. 
              We combine local expertise with innovative technology to deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                <p>
                  Founded in 2008, LTech Homes began as a small real estate agency with a big dream: 
                  to transform how people buy, sell, and rent properties in Ghana. What started as a 
                  local business in Accra has grown into one of Ghana&apos;s most trusted real estate companies.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, from being among the first to 
                  embrace digital property listings to implementing cutting-edge virtual tour technology. 
                  We&apos;ve helped over 1,000 families find their dream homes and assisted countless investors 
                  in building their property portfolios.
                </p>
                <p>
                  Today, we operate across Ghana&apos;s major cities - Accra, Kumasi, Tamale, and Takoradi - 
                  with a team of dedicated professionals who share our commitment to excellence and 
                  client satisfaction.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1000+</div>
                    <div className="text-sm opacity-90">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">Properties Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">4</div>
                    <div className="text-sm opacity-90">Major Cities</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These values guide everything we do and shape our relationships with clients, partners, and the community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to helping you achieve your real estate goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800"
              >
                <div className="h-48 bg-gradient-to-br from-[#DC2626] to-[#F87171] flex items-center justify-center">
                  <div className="w-24 h-24 bg-white dark:bg-gray-900/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-800 dark:text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#DC2626] dark:text-[#F87171] font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {member.experience} experience
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#DC2626] to-[#F87171] rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-5 h-5 text-[#DC2626] dark:text-[#F87171]" />
                        <span className="text-[#DC2626] dark:text-[#F87171] font-semibold">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-[#DC2626] to-[#F87171]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              To provide exceptional real estate services that help our clients achieve their 
              property dreams while contributing to the growth and development of Ghana&apos;s 
              real estate market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 dark:bg-gray-900/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
              >
                <span className="font-semibold">Integrity First</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 dark:bg-gray-900/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
              >
                <span className="font-semibold">Client Success</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 dark:bg-gray-900/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
              >
                <span className="font-semibold">Innovation</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
