
'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response?.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const subjects = [
    'General Inquiry',
    'Class Information',
    'Private Sessions',
    'Workshop Requests',
    'Other'
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData?.name ?? ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData?.email ?? ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData?.phone ?? ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
            placeholder="+213 555 123 456"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData?.subject ?? ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-colors bg-white"
          >
            <option value="">Select a subject</option>
            {subjects?.map?.(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData?.message ?? ''}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-colors resize-vertical"
          placeholder="Tell us how we can help you..."
        />
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full sm:w-auto btn-primary inline-flex items-center space-x-2 ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </div>
      
      <div className="bg-light-beige p-4 rounded-sm">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-600">
            <p className="font-medium mb-1">Your privacy matters to us</p>
            <p>We'll store your information securely and use it only to respond to your inquiry. We never share your details with third parties.</p>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
