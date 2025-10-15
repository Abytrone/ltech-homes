'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  service: string
}

interface PropertyInquiryData {
  name: string
  email: string
  phone: string
  message: string
  propertyTitle: string
  propertyPrice: string
  propertyLocation: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { name, email, phone, subject, message, service } = formData

    if (!name || !email || !message) {
      return { success: false, error: 'Please fill in all required fields' }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Please enter a valid email address' }
    }

    const { data, error } = await resend.emails.send({
      from: 'LTech Homes <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'info@ltechhomes.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #DC2626, #F87171); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #DC2626; display: block; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-left: 3px solid #DC2626; border-radius: 4px; }
              .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🏠 New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${phone ? `
                <div class="field">
                  <span class="label">Phone:</span>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                ` : ''}
                ${service ? `
                <div class="field">
                  <span class="label">Service Interest:</span>
                  <div class="value">${service}</div>
                </div>
                ` : ''}
                <div class="field">
                  <span class="label">Subject:</span>
                  <div class="value">${subject || 'General Inquiry'}</div>
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the LTech Homes contact form</p>
                <p>Please respond to ${email} as soon as possible</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error: 'Failed to send email. Please try again.' }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error: 'An unexpected error occurred. Please try again.' }
  }
}

export async function sendPropertyInquiry(inquiryData: PropertyInquiryData) {
  try {
    const { name, email, phone, message, propertyTitle, propertyPrice, propertyLocation } = inquiryData

    if (!name || !email || !message) {
      return { success: false, error: 'Please fill in all required fields' }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Please enter a valid email address' }
    }

    const { data, error } = await resend.emails.send({
      from: 'LTech Homes <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'info@ltechhomes.com',
      replyTo: email,
      subject: `Property Inquiry: ${propertyTitle}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #DC2626, #F87171); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .property-card { background: white; border: 2px solid #DC2626; padding: 20px; margin: 20px 0; border-radius: 8px; }
              .property-title { color: #DC2626; font-size: 24px; font-weight: bold; margin-bottom: 10px; }
              .property-details { color: #666; margin-bottom: 5px; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #DC2626; display: block; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-left: 3px solid #DC2626; border-radius: 4px; }
              .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🏡 New Property Inquiry</h1>
              </div>
              <div class="content">
                <div class="property-card">
                  <div class="property-title">${propertyTitle}</div>
                  <div class="property-details">📍 ${propertyLocation}</div>
                  <div class="property-details">💰 ${propertyPrice}</div>
                </div>
                
                <div class="field">
                  <span class="label">Customer Name:</span>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${phone ? `
                <div class="field">
                  <span class="label">Phone:</span>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                ` : ''}
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This is a property inquiry from the LTech Homes website</p>
                <p>Please respond to ${email} as soon as possible</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error: 'Failed to send inquiry. Please try again.' }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error: 'An unexpected error occurred. Please try again.' }
  }
}

