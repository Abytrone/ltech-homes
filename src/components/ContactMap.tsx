'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import { MapPin } from 'lucide-react'
import { useTheme } from '@/lib/theme-context'

interface Office {
  city: string
  address: string
  phone: string
  email: string
  hours: string
  lat: number
  lng: number
}

const offices: Office[] = [
  {
    city: 'Tamale',
    address: 'Tech Hostels, UDS, Tamale',
    phone: '+233 24 693 2582',
    email: 'info@ltechhomes.com',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
    lat: 9.372097552183547,
    lng: -0.8950745683481605
  }
]

const customIcon = L.divIcon({
  className: 'custom-marker',
  html: `
    <div style="
      background: linear-gradient(135deg, #DC2626, #F87171);
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      border: 3px solid white;
    ">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(45deg);">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
})

export default function ContactMap() {
  const [isMounted, setIsMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-[#DC2626] dark:text-[#F87171] mx-auto mb-2 animate-pulse" />
          <p className="text-gray-600 dark:text-gray-300 font-semibold">Loading Map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-96 rounded-lg overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-700">
      <MapContainer
        center={[offices[0].lat, offices[0].lng]}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {offices.map((office, index) => (
          <Marker
            key={index}
            position={[office.lat, office.lng]}
            icon={customIcon}
          >
            <Tooltip 
              permanent 
              direction="right" 
              offset={[15, -10]}
              className="custom-tooltip"
            >
              <span className="font-semibold">Tech Hostels - UDS,{office.city}</span>
            </Tooltip>
            <Popup className="custom-popup">
              <div className={`p-2 min-w-[200px] ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                <h3 className={`text-lg font-bold mb-2 flex items-center gap-2 ${theme === 'dark' ? 'text-[#F87171]' : 'text-[#DC2626]'}`}>
                  <MapPin className="w-5 h-5" />
                  Tech Hostels - UDS, {office.city}
                </h3>
                <div className="space-y-1 text-sm">
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>📍 Address:</strong><br />
                    {office.address}
                  </p>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>📞 Phone:</strong><br />
                    <a 
                      href={`tel:${office.phone}`} 
                      className={`hover:underline ${theme === 'dark' ? 'text-[#F87171]' : 'text-[#DC2626]'}`}
                    >
                      {office.phone}
                    </a>
                  </p>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>📧 Email:</strong><br />
                    <a 
                      href={`mailto:${office.email}`} 
                      className={`hover:underline ${theme === 'dark' ? 'text-[#F87171]' : 'text-[#DC2626]'}`}
                    >
                      {office.email}
                    </a>
                  </p>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>🕐 Hours:</strong><br />
                    {office.hours}
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${office.lat},${office.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block w-full bg-gradient-to-r from-[#DC2626] to-[#F87171] text-white text-center py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Get Directions
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

