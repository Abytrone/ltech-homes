# Email Setup Guide for LTech Homes

## 🚀 Quick Setup

### 1. Get Your Resend API Key

1. Go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Sign in to your Resend account
3. Click "Create API Key"
4. Give it a name (e.g., "LTech Homes Production")
5. Copy the API key (it starts with `re_`)

### 2. Create Environment File

Create a file named `.env.local` in the root of your project with:

```env
# Resend API Configuration
RESEND_API_KEY=re_your_actual_api_key_here

# Email Configuration
CONTACT_EMAIL=info@ltechhomes.com
```

**Important:** Replace `re_your_actual_api_key_here` with your actual API key from Resend.

### 3. Verify Domain (For Production)

**Free Tier:** You can use `onboarding@resend.dev` as the sender (already configured). This works for testing.

**Production:** To use your own domain (e.g., `info@ltechhomes.com`):
1. Go to [https://resend.com/domains](https://resend.com/domains)
2. Add your domain
3. Add the DNS records to your domain provider
4. Once verified, update the `from` field in `/src/app/actions/email.ts`:
   ```typescript
   from: 'LTech Homes <info@ltechhomes.com>',
   ```

## 📧 What's Implemented

### 1. Contact Form Email
- Located at `/contact` page
- Sends beautiful HTML emails to your CONTACT_EMAIL
- Includes all form fields (name, email, phone, subject, message, service)
- Shows loading state while sending
- Displays success/error messages
- Auto-resets after successful submission

### 2. Property Inquiry Modal
- Reusable modal component for property inquiries
- Pre-fills property details (title, location, price)
- Custom inquiry form for each property
- Sleek animated UI with dark mode support

## 🎨 Using the Property Inquiry Modal

### In Your Property Cards (e.g., Home Page, Gallery Page)

```tsx
import { useState } from 'react'
import PropertyInquiryModal from '@/components/PropertyInquiryModal'

function PropertyCard({ property }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="property-card">
        {/* Your property card content */}
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="email-button"
        >
          <Mail className="w-5 h-5" />
          Inquire Now
        </button>
      </div>

      <PropertyInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        property={{
          title: property.title,
          price: property.price,
          location: property.location
        }}
      />
    </>
  )
}
```

## 📊 Email Limits (Free Tier)

- **Sending Limit:** 3,000 emails per month
- **Daily Limit:** 100 emails per day
- **Rate Limit:** 10 emails per second

For most real estate websites, the free tier is more than enough!

## 🛠️ Testing

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Test the contact form:**
   - Go to http://localhost:3001/contact
   - Fill out the form
   - Click "Send Message"
   - Check your CONTACT_EMAIL inbox

3. **Test property inquiries:**
   - Open any property card
   - Click the email/inquiry button
   - Fill out the modal form
   - Submit and check your inbox

## 🔒 Security Notes

- ✅ `.env.local` is in `.gitignore` (never committed to Git)
- ✅ Email sending happens on the server (API keys are safe)
- ✅ Form validation on both client and server
- ✅ Email regex validation
- ✅ Error handling for failed sends

## 🎯 Next Steps (Optional)

### Add Auto-Responder
Send a confirmation email to customers when they submit:

```typescript
// In email.ts, after successful send:
await resend.emails.send({
  from: 'LTech Homes <info@ltechhomes.com>',
  to: email, // customer's email
  subject: 'Thank you for contacting LTech Homes',
  html: `Thank you ${name}, we'll get back to you soon!`
})
```

### Add Rate Limiting
Prevent spam by limiting submissions per IP:
- Install `rate-limiter-flexible`
- Add rate limiting middleware
- Block excessive submissions

### Add CAPTCHA
Prevent bots from submitting forms:
- Use Google reCAPTCHA or hCaptcha
- Add to both contact form and property inquiry modal

## 📞 Support

If you have any issues:
1. Check your `.env.local` file exists and has the correct API key
2. Verify your Resend account is active
3. Check the browser console for errors
4. Check the server logs in your terminal

## 🎉 You're All Set!

Your contact form and property inquiry system is now fully functional with professional email delivery via Resend!

