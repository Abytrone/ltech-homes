'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car,
  Eye,
  Heart,
  Share2,
  Phone,
  Mail
} from 'lucide-react'
import { ThemeProvider } from '@/lib/theme-context'

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

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  const categories = [
    { id: 'all', label: 'All Properties' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'investment', label: 'Investment' }
  ]

  const properties = [
    {
      id: 1,
      title: 'Modern Villa in East Legon',
      location: 'East Legon, Accra',
      price: 'GHS 2,500,000',
      type: 'luxury',
      category: 'residential',
      bedrooms: 5,
      bathrooms: 4,
      area: '450 sqm',
      parking: 2,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop&crop=center',
      description: 'Stunning modern villa with contemporary design, premium finishes, and beautiful landscaping.',
      features: ['Swimming Pool', 'Garden', 'Security System', 'Modern Kitchen', 'Master Suite'],
      agent: 'Kwame Asante',
      agentPhone: '+233 24 123 4567',
      agentEmail: 'kwame@ltechhomes.com'
    },
    {
      id: 2,
      title: 'Commercial Office Space',
      location: 'Airport City, Accra',
      price: 'GHS 1,200,000',
      type: 'commercial',
      category: 'commercial',
      bedrooms: 0,
      bathrooms: 3,
      area: '800 sqm',
      parking: 10,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center',
      description: 'Prime commercial office space in the heart of Airport City with modern amenities.',
      features: ['Air Conditioning', 'Parking', 'Security', 'Reception Area', 'Meeting Rooms'],
      agent: 'Ama Serwaa',
      agentPhone: '+233 24 123 4568',
      agentEmail: 'ama@ltechhomes.com'
    },
    {
      id: 3,
      title: 'Family Home in Kumasi',
      location: 'Ahodwo, Kumasi',
      price: 'GHS 850,000',
      type: 'residential',
      category: 'residential',
      bedrooms: 4,
      bathrooms: 3,
      area: '320 sqm',
      parking: 2,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&crop=center',
      description: 'Beautiful family home in a quiet neighborhood with excellent schools nearby.',
      features: ['Garden', 'Garage', 'Modern Kitchen', 'Living Room', 'Study Room'],
      agent: 'Kofi Mensah',
      agentPhone: '+233 24 123 4569',
      agentEmail: 'kofi@ltechhomes.com'
    },
    {
      id: 4,
      title: 'Luxury Apartment',
      location: 'Labone, Accra',
      price: 'GHS 1,800,000',
      type: 'luxury',
      category: 'residential',
      bedrooms: 3,
      bathrooms: 3,
      area: '280 sqm',
      parking: 2,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center',
      description: 'High-end apartment with panoramic city views and premium amenities.',
      features: ['City Views', 'Balcony', 'Modern Design', 'Security', 'Gym Access'],
      agent: 'Efua Boateng',
      agentPhone: '+233 24 123 4570',
      agentEmail: 'efua@ltechhomes.com'
    },
    {
      id: 5,
      title: 'Investment Property',
      location: 'Tamale',
      price: 'GHS 450,000',
      type: 'investment',
      category: 'residential',
      bedrooms: 3,
      bathrooms: 2,
      area: '200 sqm',
      parking: 1,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&crop=center',
      description: 'Great investment opportunity with high rental potential in growing area.',
      features: ['Rental Ready', 'Good Location', 'Affordable', 'Growth Potential', 'Easy Access'],
      agent: 'Kwame Asante',
      agentPhone: '+233 24 123 4567',
      agentEmail: 'kwame@ltechhomes.com'
    },
    {
      id: 6,
      title: 'Retail Space',
      location: 'Osu, Accra',
      price: 'GHS 950,000',
      type: 'commercial',
      category: 'commercial',
      bedrooms: 0,
      bathrooms: 2,
      area: '300 sqm',
      parking: 5,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center',
      description: 'Prime retail space in bustling Osu with high foot traffic.',
      features: ['High Traffic', 'Parking', 'Storage', 'Display Windows', 'Air Conditioning'],
      agent: 'Ama Serwaa',
      agentPhone: '+233 24 123 4568',
      agentEmail: 'ama@ltechhomes.com'
    }
  ]

  const filteredProperties = selectedCategory === 'all' 
    ? properties 
    : properties.filter(property => property.category === selectedCategory)

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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Property <span className="bg-gradient-to-r from-[#DC2626] to-[#F87171] bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our curated collection of premium properties across Ghana. 
              From luxury homes to commercial spaces, find your perfect match.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#DC2626] to-[#F87171] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:bg-gray-900 transition-colors text-gray-800 dark:text-white">
                        <Heart className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </button>
                      <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:bg-gray-900 transition-colors text-gray-800 dark:text-white ">
                        <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 line-clamp-1 mb-2">
                        {property.title}
                      </h3>
                      <span className="text-2xl font-bold text-[#DC2626] dark:text-[#F87171]">
                        {property.price}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    
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
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {property.description}
                    </p>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedProperty(property)}
                        className="flex-1 bg-gradient-to-r from-[#DC2626] to-[#F87171] text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                      <a
                        href={`tel:${property.agentPhone}`}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors inline-flex items-center justify-center"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
                  <img
                    src={selectedProperty.image}
                    alt={selectedProperty.title}
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
    </ThemeProvider>
  )
}
