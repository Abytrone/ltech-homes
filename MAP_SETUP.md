# 🗺️ Interactive Map Implementation

## What's Been Implemented

### ✅ Features:
- **Interactive OpenStreetMap** using Leaflet (completely free, no API key needed)
- **Custom branded markers** with your LTech Homes colors (#DC2626, #F87171)
- **Interactive popups** with full office information
- **"Get Directions" button** that opens Google Maps for navigation
- **Dark mode support** for the map interface
- **Responsive design** - works great on mobile and desktop
- **Loading state** with smooth animation
- **Server-side rendering disabled** for optimal performance

### 📍 Current Office Location:
- **City:** Tamale
- **Address:** Tech Hostels, UDS, Tamale
- **Coordinates:** 9.4034°N, 0.8424°W (University for Development Studies area)

---

## 🎨 Map Features

### Custom Marker Design:
- Red gradient pin with house icon
- Rotation animation on hover (via Leaflet)
- White border for visibility
- Shadow for depth

### Popup Information:
- Office name and city
- Full address
- Phone number (clickable to call)
- Email address (clickable to send email)
- Business hours
- "Get Directions" button (opens Google Maps)

### Styling:
- Matches your LTech Homes branding
- Custom zoom controls in your primary color
- Rounded corners and shadows
- Dark mode compatible popups

---

## 📦 Packages Installed

```json
{
  "dependencies": {
    "leaflet": "^1.9.x",
    "react-leaflet": "^4.2.x"
  },
  "devDependencies": {
    "@types/leaflet": "^1.9.x"
  }
}
```

---

## 📁 Files Created/Modified

### Created:
- `/src/components/ContactMap.tsx` - Main map component

### Modified:
- `/src/app/contact/page.tsx` - Added map to contact page
- `/src/app/layout.tsx` - Added Leaflet CSS import
- `/src/app/globals.css` - Added custom map styles

---

## 🔧 How It Works

1. **Dynamic Import**: Map loads client-side only (using Next.js dynamic import with `ssr: false`)
2. **Loading State**: Shows branded placeholder while map loads
3. **Leaflet Integration**: Uses OpenStreetMap tiles (free, no API key)
4. **Custom Markers**: SVG-based markers with your brand colors
5. **Interactive Popups**: Click marker to see office details

---

## 📍 Adding More Office Locations

To add more offices, edit `/src/components/ContactMap.tsx`:

```typescript
const offices: Office[] = [
  {
    city: 'Tamale',
    address: 'Tech Hostels, UDS, Tamale',
    phone: '+233 24 693 2582',
    email: 'info@ltechhomes.com',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
    lat: 9.4034,
    lng: -0.8424
  },
  // Add more offices here:
  {
    city: 'Accra',
    address: '123 Independence Avenue, Accra',
    phone: '+233 54 933 7820',
    email: 'accra@ltechhomes.com',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
    lat: 5.6037,    // Accra coordinates
    lng: -0.1870
  }
]
```

**How to find coordinates:**
1. Go to [Google Maps](https://www.google.com/maps)
2. Right-click on your office location
3. Click on the coordinates to copy them
4. Use the format: `lat: first_number, lng: second_number`

---

## 🎨 Customization

### Change Map Style:
Replace the TileLayer URL in `ContactMap.tsx`:

```typescript
// Current: Standard OpenStreetMap
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

// Dark mode friendly:
url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"

// Satellite view (requires API):
// Use Google Maps or Mapbox
```

### Adjust Map Zoom:
```typescript
<MapContainer
  center={[offices[0].lat, offices[0].lng]}
  zoom={15}  // Change this (1-18, higher = closer)
  // ...
>
```

### Change Marker Color:
In `customIcon` definition, change the gradient:
```typescript
background: linear-gradient(135deg, #DC2626, #F87171);
// Change to any color you want
```

---

## 🌐 Why Leaflet/OpenStreetMap?

### Advantages:
- ✅ **100% Free** - No API keys, no quotas, no billing
- ✅ **Open Source** - Full control, no vendor lock-in
- ✅ **No Tracking** - Privacy-friendly for your users
- ✅ **Lightweight** - Fast loading, good performance
- ✅ **Customizable** - Full styling control

### Alternatives (if needed):
- **Google Maps** - Better satellite imagery, requires API key, costs money
- **Mapbox** - Modern styling, free tier available, requires API key
- **Apple Maps** - iOS integration, requires API key

---

## 🚀 Testing

1. **Start dev server** (if not running):
   ```bash
   npm run dev
   ```

2. **Visit contact page**:
   ```
   http://localhost:3001/contact
   ```

3. **Test features**:
   - ✅ Map loads and displays
   - ✅ Click marker to see popup
   - ✅ Click phone to call
   - ✅ Click email to compose message
   - ✅ Click "Get Directions" to open Google Maps
   - ✅ Test dark mode toggle
   - ✅ Test on mobile (responsive)

---

## 🎉 You're All Set!

Your interactive map is live and working! Users can now:
- See your exact office location
- Get detailed information
- Get directions with one click
- Contact you directly from the map

Enjoy your new interactive map! 🗺️✨

