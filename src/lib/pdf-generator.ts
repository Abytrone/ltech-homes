import jsPDF from 'jspdf'

export interface NailService {
  name: string
  price: string
  category?: string
}

export const nailServices: NailService[] = [
  { name: 'Pedicure', price: '120', category: 'Nail Care' },
  { name: 'Manicure', price: '70', category: 'Nail Care' },
  { name: 'Acrylic Short', price: '100', category: 'Acrylic Nails' },
  { name: 'Acrylic Long', price: '130', category: 'Acrylic Nails' },
  { name: 'Normal Nails with Gel (Hands)', price: '70', category: 'Gel Services' },
  { name: 'Normal Nails with Gel (Toes)', price: '50', category: 'Gel Services' },
  { name: 'Gel Polish (Hands)', price: '35', category: 'Gel Services' },
  { name: 'Gel Polish (Toes)', price: '25', category: 'Gel Services' },
  { name: 'Normal Nails without Gel (Hands)', price: '40', category: 'Basic Services' },
  { name: 'Normal Nails without Gel (Toes)', price: '25', category: 'Basic Services' },
  { name: 'Normal Polish (Hands)', price: '15', category: 'Basic Services' },
  { name: 'Normal Polish (Toes)', price: '15', category: 'Basic Services' },
  { name: 'Nails Trimming Gel', price: '20', category: 'Maintenance' },
  { name: 'Nails Trimming Top Coat', price: '10', category: 'Maintenance' },
  { name: 'Lash Strips', price: '25', category: 'Lash Services' },
  { name: 'Lash Singles', price: '50', category: 'Lash Services' },
  { name: 'Brows Trimming', price: '10', category: 'Brow Services' },
]

export const generatePriceListPDF = () => {
  const doc = new jsPDF()
  
  // Set up colors
  const primaryColor: [number, number, number] = [220, 38, 38] // Red color matching the theme
  const secondaryColor: [number, number, number] = [248, 113, 113] // Light red
  const textColor: [number, number, number] = [55, 65, 81] // Gray-700
  
  // Header
  doc.setFillColor(...primaryColor)
  doc.rect(0, 0, 210, 35, 'F')
  
  // Logo/Title
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.setFont('times', 'bold')
  doc.text('Nails by Design Studio', 20, 22)
  
  // Subtitle
  doc.setFontSize(12)
  doc.setFont('times', 'normal')
  doc.text('Professional Nail & Beauty Services', 20, 28)
  
  // Date
//   const currentDate = new Date().toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   })
//   doc.text(`Price List - ${currentDate}`, 20, 33)
  
  let yPosition = 50
  
  // Group services by category
  const categories = [...new Set(nailServices.map(service => service.category))]
  
  categories.forEach((category) => {
    const categoryServices = nailServices.filter(service => service.category === category)
    
    // Category header
    doc.setFillColor(...secondaryColor)
    doc.rect(15, yPosition - 5, 180, 8, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(12)
    doc.setFont('times', 'bold')
    doc.text(category || 'Other Services', 20, yPosition)
    
    yPosition += 10
    
    // Services in category
    categoryServices.forEach((service, serviceIndex) => {
      // Check if we need a new page
      if (yPosition > 270) {
        doc.addPage()
        yPosition = 20
      }
      
      // Service row
      doc.setTextColor(...textColor)
      doc.setFontSize(10)
      doc.setFont('times', 'normal')
      
      // Service name
      doc.text(service.name, 20, yPosition)
      
      // Price
      doc.setFont('times', 'bold')
      doc.text(`GHS ${service.price}`, 170, yPosition)
      
      yPosition += 6
      
      // Add subtle line between services
      if (serviceIndex < categoryServices.length - 1) {
        doc.setDrawColor(200, 200, 200)
        doc.line(20, yPosition - 4, 190, yPosition - 4)
      }
    })
    
    yPosition += 8
  })
  
  // Footer
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFillColor(...primaryColor)
    doc.rect(0, 280, 210, 20, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(8)
    doc.setFont('times', 'normal')
    doc.text('Thank you for choosing Nails by Design Studio!', 20, 290)
    // doc.text(`Page ${i} of ${pageCount}`, 180, 290)
  }
  
  // view the PDF in the browser in a new tab
  doc.save('Nails-by-Design-Studio-Price-List.pdf')
}

export default generatePriceListPDF
