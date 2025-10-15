'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  Home, 
  Shield, 
  Users, 
  MapPin, 
  Star,
  Bed,
  Bath,
  Square,
  Car,
  Eye,
  Phone,
  Mail
} from 'lucide-react'

interface Property {
  id: number
  title: string
  location: string
  price: string
  type: string
  category: string
  bedrooms: number
  bathrooms: number
  area: string
  parking: number
  image: string
  description: string
  features: string[]
  agent: string
  agentPhone: string
  agentEmail: string
}

export default function HomePage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const features = [
    {
      icon: Home,
      title: 'Premium Properties',
      description: 'Discover luxury homes and commercial properties across Ghana&apos;s major cities.'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'All our property transactions are legally verified and secure with full documentation.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced real estate professionals provide personalized service and guidance.'
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Properties in the best neighborhoods of Accra, Kumasi, Tamale, and Takoradi.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Properties Sold' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Awards Won' }
  ]

  const testimonials = [
    {
      name: 'Kwame Asante',
      location: 'Accra',
      text: 'LTech Homes made my dream of owning a home in Accra a reality. Their professionalism and attention to detail is unmatched.',
      rating: 5
    },
    {
      name: 'Ama Serwaa',
      location: 'Kumasi',
      text: 'The team at LTech Homes guided me through every step of the buying process. I couldn\'t be happier with my new property.',
      rating: 5
    },
    {
      name: 'Kofi Mensah',
      location: 'Tamale',
      text: 'Excellent service from start to finish. They found me the perfect investment property in Tamale.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Ultra Modern Hero Section */}
      <section className="relative h-screen min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800">
        {/* Dynamic Mesh Background */}
        <div className="absolute inset-0 opacity-20 dark:opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626]/30 via-transparent to-[#F87171]/30"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(248, 113, 113, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(220, 38, 38, 0.2) 0%, transparent 50%)
            `,
          }}></div>
        </div>
        
        {/* 3D Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Rotating Cube */}
          <motion.div
            animate={{ 
              rotateX: [0, 360],
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/4 left-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-gradient-to-br from-[#DC2626] to-[#F87171] opacity-10 sm:opacity-15 md:opacity-20"
            style={{
              transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
          
          {/* Floating Hexagons */}
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 120, 240, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/3 right-1/4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-gradient-to-r from-[#F87171] to-[#DC2626] opacity-15 sm:opacity-20 md:opacity-30"
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
            }}
          />
          
          {/* Spinning Diamond */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 0.8, 1],
              x: [0, 20, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute bottom-1/3 left-1/3 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 bg-gradient-to-br from-[#DC2626] to-[#F87171] opacity-15 sm:opacity-20 md:opacity-25"
            style={{
              transform: 'rotate(45deg)',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
            }}
          />
        </div>

        {/* Particle System */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-[#DC2626] to-[#F87171] rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10 py-8 sm:py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="space-y-6 sm:space-y-8 md:space-y-12"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#DC2626]/10 to-[#F87171]/10 dark:from-[#DC2626]/20 dark:to-[#F87171]/20 border border-[#DC2626]/20 dark:border-[#DC2626]/30 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 bg-gradient-to-r from-[#DC2626] to-[#F87171] rounded-full mr-3"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-white/90">Premium Real Estate Solutions</span>
            </motion.div>

            {/* Main Heading with 3D Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight px-4"
              style={{
                textShadow: '0 0 30px rgba(220, 38, 38, 0.3), 0 0 60px rgba(248, 113, 113, 0.2)'
              }}
            >
              <motion.span 
                className="bg-gradient-to-r from-[#DC2626] via-[#F87171] to-[#DC2626] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '300% 300%',
                  filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.5))'
                }}
              >
                FIND YOUR
              </motion.span>
              <br />
              <motion.span 
                className="text-gray-800 dark:text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                style={{
                  textShadow: '0 0 40px rgba(0, 0, 0, 0.1)'
                }}
              >
                DREAM HOME
              </motion.span>
            </motion.h1>
            
            {/* Subtitle with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="max-w-4xl mx-auto px-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Experience the future of real estate with
              </p>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#F87171] to-[#DC2626] bg-clip-text text-transparent"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                LTech Homes Ghana
            </motion.p>
            </motion.div>
            
            {/* Modern CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-6 md:pt-8 px-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/gallery"
                  className="group relative inline-flex items-center px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg text-white overflow-hidden w-full sm:w-auto justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #DC2626 0%, #F87171 100%)',
                    boxShadow: '0 20px 40px rgba(220, 38, 38, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#F87171] to-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center space-x-3">
                <span>Explore Properties</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
              </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
              <Link
                href="/contact"
                  className="group relative inline-flex items-center px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg text-gray-700 dark:text-white border-2 border-gray-300 dark:border-white/20 backdrop-blur-sm hover:border-[#DC2626] dark:hover:border-white transition-all duration-300 w-full sm:w-auto justify-center"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <span className="flex items-center space-x-3">
                    <span>Get in Touch</span>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-current rounded-full"
                      style={{ borderTopColor: 'transparent' }}
                    />
                  </span>
              </Link>
              </motion.div>
            </motion.div>

            {/* Stats Counter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto pt-4 sm:pt-6 md:pt-8 px-4"
            >
              {[
                { number: "500+", label: "Properties" },
                { number: "50+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#DC2626] to-[#F87171] bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-2 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-white/30 rounded-full flex justify-center"
          >
        <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-r from-[#DC2626] to-[#F87171] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Why Choose LTech Homes?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine technology, expertise, and local knowledge to deliver exceptional real estate experiences.
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#DC2626] to-[#F87171]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Showcase Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover our handpicked selection of premium properties across Ghana
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Luxury Villa in Accra",
                location: "East Legon, Accra",
                price: "GHS 2,500,000",
                type: "Villa",
                category: "residential",
                bedrooms: 5,
                bathrooms: 4,
                area: "450 sqm",
                parking: 2,
                image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&crop=center",
                description: "Stunning modern villa with contemporary design, premium finishes, and beautiful landscaping. Perfect for families seeking luxury and comfort.",
                features: ["Swimming Pool", "Garden", "Security System", "Modern Kitchen", "Master Suite", "5 Bedrooms", "4 Bathrooms"],
                agent: "Kwame Asante",
                agentPhone: "+233 24 123 4567",
                agentEmail: "kwame@ltechhomes.com"
              },
              {
                id: 2,
                title: "Modern Apartment Complex",
                location: "Cantonments, Accra",
                price: "GHS 1,200,000",
                type: "Apartment",
                category: "residential",
                bedrooms: 3,
                bathrooms: 2,
                area: "280 sqm",
                parking: 2,
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center",
                description: "Contemporary apartment with modern amenities and excellent location. Ideal for young professionals and small families.",
                features: ["Balcony", "Parking", "Modern Design", "Security", "Gym Access", "3 Bedrooms", "2 Bathrooms"],
                agent: "Ama Serwaa",
                agentPhone: "+233 24 123 4568",
                agentEmail: "ama@ltechhomes.com"
              },
              {
                id: 3,
                title: "Family Home in Kumasi",
                location: "Ahodwo, Kumasi",
                price: "GHS 800,000",
                type: "House",
                category: "residential",
                bedrooms: 4,
                bathrooms: 3,
                area: "320 sqm",
                parking: 2,
                image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=center",
                description: "Beautiful family home in a quiet neighborhood with excellent schools nearby. Perfect for growing families.",
                features: ["Garden", "Garage", "Modern Kitchen", "Living Room", "Study Room", "4 Bedrooms", "3 Bathrooms"],
                agent: "Kofi Mensah",
                agentPhone: "+233 24 123 4569",
                agentEmail: "kofi@ltechhomes.com"
              }
            ].map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800"
              >
                {/* Property Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#DC2626] to-[#F87171] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 flex items-center">
                    <span className="mr-2">📍</span>
                    {property.location}
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#DC2626] to-[#F87171] bg-clip-text text-transparent mb-4">
                    {property.price}
                  </p>
                  
                  {/* Property Details */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          <span>{property.bedrooms}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        <span>{property.area}</span>
                      </div>
                      {property.parking > 0 && (
                        <div className="flex items-center">
                          <Car className="w-4 h-4 mr-1" />
                          <span>{property.parking}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {property.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-gradient-to-r from-[#DC2626] to-[#F87171] rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => setSelectedProperty(property)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#DC2626] to-[#F87171] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Properties Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#DC2626] to-[#F87171] text-white rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>View All Properties</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don&apos;t just take our word for it - hear from our satisfied clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-full flex items-center justify-center text-white font-semibold mr-3 shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-gray-200">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Find Your Perfect Property?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let our expert team help you discover the perfect home or investment property in Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#DC2626] to-[#F87171] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Your Search
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-[#DC2626] hover:text-[#DC2626] dark:hover:border-[#F87171] dark:hover:text-[#F87171] transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-80 overflow-hidden">
                  <Image
                    src={selectedProperty.image}
                    alt={selectedProperty.title}
                    width={500}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-4 right-4 w-10 h-10 text-gray-800 dark:text-white bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:bg-gray-900 transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {selectedProperty.title}
                      </h2>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{selectedProperty.location}</span>
                      </div>
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold text-[#DC2626] dark:text-[#F87171] sm:ml-4">
                      {selectedProperty.price}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {selectedProperty.bedrooms > 0 && (
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                      <Bed className="w-6 h-6 text-[#DC2626] dark:text-[#F87171] mx-auto mb-2" />
                      <div className="font-semibold text-gray-800 dark:text-gray-200">{selectedProperty.bedrooms}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Bedrooms</div>
                    </div>
                  )}
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                    <Bath className="w-6 h-6 text-[#DC2626] dark:text-[#F87171] mx-auto mb-2" />
                    <div className="font-semibold text-gray-800 dark:text-gray-200">{selectedProperty.bathrooms}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Bathrooms</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                    <Square className="w-6 h-6 text-[#DC2626] dark:text-[#F87171] mx-auto mb-2" />
                    <div className="font-semibold text-gray-800 dark:text-gray-200">{selectedProperty.area}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Area</div>
                  </div>
                  {selectedProperty.parking > 0 && (
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                      <Car className="w-6 h-6 text-[#DC2626] dark:text-[#F87171] mx-auto mb-2" />
                      <div className="font-semibold text-gray-800 dark:text-gray-200">{selectedProperty.parking}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Parking</div>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Description</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProperty.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {selectedProperty.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-[#DC2626] rounded-full mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Contact Agent</h3>
                  <div className="mb-4">
                    <div className="font-semibold text-gray-800 dark:text-gray-200">{selectedProperty.agent}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{selectedProperty.agentEmail}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`tel:${selectedProperty.agentPhone}`}
                      className="bg-[#DC2626] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#B91C1C] transition-colors flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </a>
                    <a
                      href={`mailto:${selectedProperty.agentEmail}`}
                      className="bg-gray-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
