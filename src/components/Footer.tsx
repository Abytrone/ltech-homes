'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Users,
  Briefcase,
  Image,
  Home,
  Calendar,
  Settings,
  Lightbulb,
  Hammer
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/lib/theme-context'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()

  const footerLinks = {
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/services', label: 'Services' },
      { href: '/gallery', label: 'Gallery' },
      { href: '/contact', label: 'Contact' },
    ],
    services: [
      { href: '/services/property-sales', label: 'Property Sales' },
      { href: '/services/property-rentals', label: 'Property Rentals' },
      { href: '/services/property-management', label: 'Property Management' },
      { href: '/services/real-estate-consulting', label: 'Real Estate Consulting' },
      { href: '/services/construction', label: 'Construction' },
    ],
    locations: [
      { label: 'Accra' },
      { label: 'Kumasi' },
      { label: 'Tamale' },
      { label: 'Takoradi' },
    ]
  }

  return (
    <ThemeProvider>
      <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#DC2626] to-[#F87171] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">LTech Homes</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in Ghana&apos;s real estate market. We provide exceptional 
              property solutions with integrity, innovation, and excellence.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#F87171] hover:to-[#DC2626] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "transition-colors duration-200 flex items-center space-x-2",
                        isActive
                          ? "text-[#F87171]"
                          : "text-gray-300 hover:text-white"
                      )}
                    >
                      {link.href === '/about' && <Users className="w-4 h-4" />}
                      {link.href === '/services' && <Briefcase className="w-4 h-4" />}
                      {link.href === '/gallery' && <Image className="w-4 h-4" />}
                      {link.href === '/contact' && <Phone className="w-4 h-4" />}
                      <span>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => {
                const isActive = pathname === service.href
                return (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className={cn(
                        "transition-colors duration-200 flex items-center space-x-2",
                        isActive
                          ? "text-[#F87171]"
                          : "text-gray-300 hover:text-white"
                      )}
                    >
                      {service.href === '/services/property-sales' && <Home className="w-4 h-4" />}
                      {service.href === '/services/property-rentals' && <Calendar className="w-4 h-4" />}
                      {service.href === '/services/property-management' && <Settings className="w-4 h-4" />}
                      {service.href === '/services/real-estate-consulting' && <Lightbulb className="w-4 h-4" />}
                      {service.href === '/services/construction' && <Hammer className="w-4 h-4" />}
                      <span>{service.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F87171] mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Independence Avenue<br />
                    Accra, Ghana
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F87171]" />
                <span className="text-gray-300 text-sm">+233 24 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F87171]" />
                <span className="text-gray-300 text-sm">info@ltechhomes.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} LTech Homes. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      </footer>
    </ThemeProvider>
  )
}

export default Footer
