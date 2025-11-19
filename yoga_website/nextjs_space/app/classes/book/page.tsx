
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, Clock, Users, CreditCard, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ScrollAnimation from '@/components/scroll-animation'
import { toast } from 'sonner'

interface BookingFormData {
  customerName: string
  customerEmail: string
  customerPhone: string
  classType: string
  packageType: string
  bookingDate: string
  notes: string
}

const BookingPage = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<BookingFormData>({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    classType: '',
    packageType: '',
    bookingDate: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const packageOptions = [
    {
      id: 'drop-in',
      name: 'Drop-in Class',
      price: 2000,
      description: 'Perfect for trying out classes',
      classes: 1,
      validDays: 1
    },
    {
      id: 'pack-5',
      name: '5-Class Pack',
      price: 8500,
      description: 'Valid for 6 weeks',
      classes: 5,
      validDays: 42,
      savings: '15% savings'
    },
    {
      id: 'pack-10',
      name: '10-Class Pack',
      price: 16000,
      description: 'Valid for 10 weeks',
      classes: 10,
      validDays: 70,
      savings: '20% savings'
    },
    {
      id: 'unlimited',
      name: 'Monthly Unlimited',
      price: 12000,
      description: '30-day unlimited access',
      classes: null,
      validDays: 30,
      savings: 'Best value'
    }
  ]

  const classOptions = [
    {
      id: 'hatha',
      name: 'Hatha Yoga',
      duration: '75 minutes',
      level: 'All Levels',
      description: 'Gentle, slower-paced practice focusing on basic postures'
    },
    {
      id: 'vinyasa',
      name: 'Vinyasa Flow',
      duration: '60 minutes',
      level: 'Beginner to Advanced',
      description: 'Dynamic sequences linking breath with movement'
    },
    {
      id: 'yin',
      name: 'Yin Yoga',
      duration: '90 minutes',
      level: 'All Levels',
      description: 'Meditative practice with longer-held poses'
    }
  ]

  const upcomingClasses = [
    { date: '2024-11-18', day: 'Monday', time: '09:00', class: 'Hatha Yoga', spots: 8 },
    { date: '2024-11-18', day: 'Monday', time: '18:30', class: 'Vinyasa Flow', spots: 5 },
    { date: '2024-11-20', day: 'Wednesday', time: '09:00', class: 'Yin Yoga', spots: 10 },
    { date: '2024-11-20', day: 'Wednesday', time: '18:00', class: 'Hatha Yoga', spots: 7 },
    { date: '2024-11-22', day: 'Friday', time: '09:00', class: 'Vinyasa Flow', spots: 6 },
    { date: '2024-11-22', day: 'Friday', time: '18:30', class: 'Yin Yoga', spots: 9 }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e?.target ?? {}
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    if (step === 1 && !formData?.packageType) {
      toast.error('Please select a package option')
      return
    }
    if (step === 2 && (!formData?.classType || !formData?.bookingDate)) {
      toast.error('Please select a class and date')
      return
    }
    if (step === 3 && (!formData?.customerName || !formData?.customerEmail)) {
      toast.error('Please fill in your name and email')
      return
    }
    setStep(step + 1)
  }

  const handleBookingSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate booking process (no actual Stripe integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Booking confirmed! We\'ll send you a confirmation email shortly.')
      setStep(5)
    } catch (error) {
      toast.error('Booking failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedPackage = packageOptions?.find?.(pkg => pkg?.id === formData?.packageType)
  const selectedClass = classOptions?.find?.(cls => cls?.id === formData?.classType)
  const selectedDate = upcomingClasses?.find?.(cls => 
    cls?.date === formData?.bookingDate && cls?.class === selectedClass?.name
  )

  return (
    <>
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8 bg-light-beige">
        <div className="container-max section-padding">
          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={() => window?.history?.back?.()}
              className="flex items-center space-x-2 text-sage hover:text-dark-sage transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Classes</span>
            </button>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-sage mb-4">
            Book Your Class
          </h1>
          
          {/* Progress Indicator */}
          <div className="flex items-center space-x-2 max-w-md">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum ? 'bg-sage text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 4 && (
                  <div className={`w-8 h-0.5 ${step > stepNum ? 'bg-sage' : 'bg-gray-200'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-20">
        <div className="container-max section-padding">
          {/* Step 1: Package Selection */}
          {step === 1 && (
            <ScrollAnimation>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-serif font-semibold text-sage mb-4">
                    Choose Your Package
                  </h2>
                  <p className="text-gray-600">Select the option that works best for your practice.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {packageOptions?.map?.((pkg) => (
                    <button
                      key={pkg?.id}
                      onClick={() => setFormData(prev => ({ ...prev, packageType: pkg?.id }))}
                      className={`card p-6 text-center transition-all ${
                        formData?.packageType === pkg?.id 
                          ? 'ring-2 ring-sage shadow-lg' 
                          : 'hover:shadow-md'
                      }`}
                    >
                      {pkg?.savings && (
                        <div className="bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
                          {pkg?.savings}
                        </div>
                      )}
                      
                      <h3 className="font-serif font-semibold text-lg text-dark-sage mb-3">
                        {pkg?.name}
                      </h3>
                      
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-sage">{pkg?.price}</span>
                        <span className="text-gray-600"> DZD</span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">{pkg?.description}</p>
                      
                      <div className="text-xs text-gray-500">
                        {pkg?.classes ? `${pkg?.classes} classes` : 'Unlimited classes'} • 
                        {pkg?.validDays === 1 ? ' 1 day' : ` ${pkg?.validDays} days validity`}
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <button
                    onClick={handleNextStep}
                    disabled={!formData?.packageType}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Class Selection
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          )}

          {/* Step 2: Class & Date Selection */}
          {step === 2 && (
            <ScrollAnimation>
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-serif font-semibold text-sage mb-4">
                    Choose Your Class
                  </h2>
                  <p className="text-gray-600">Select a class type and available time slot.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Class Types */}
                  <div>
                    <h3 className="text-lg font-semibold text-dark-sage mb-6">Class Types</h3>
                    <div className="space-y-4">
                      {classOptions?.map?.((cls) => (
                        <button
                          key={cls?.id}
                          onClick={() => setFormData(prev => ({ ...prev, classType: cls?.id }))}
                          className={`card p-6 text-left w-full transition-all ${
                            formData?.classType === cls?.id 
                              ? 'ring-2 ring-sage shadow-lg' 
                              : 'hover:shadow-md'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-serif font-semibold text-sage">{cls?.name}</h4>
                            <div className="text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{cls?.duration}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{cls?.description}</p>
                          <p className="text-xs text-sage font-medium">Level: {cls?.level}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Available Times */}
                  <div>
                    <h3 className="text-lg font-semibold text-dark-sage mb-6">Available Times</h3>
                    {formData?.classType ? (
                      <div className="space-y-3">
                        {upcomingClasses
                          ?.filter?.(cls => cls?.class === selectedClass?.name)
                          ?.map?.((cls, index) => (
                          <button
                            key={index}
                            onClick={() => setFormData(prev => ({ ...prev, bookingDate: cls?.date }))}
                            className={`card p-4 w-full text-left transition-all ${
                              formData?.bookingDate === cls?.date 
                                ? 'ring-2 ring-sage shadow-lg' 
                                : 'hover:shadow-md'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-gray-800">
                                  {cls?.day}, {new Date(cls?.date)?.toLocaleDateString?.('en-US', { 
                                    month: 'short', 
                                    day: 'numeric' 
                                  })}
                                </div>
                                <div className="text-sage font-medium">{cls?.time}</div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center space-x-1 text-gray-600">
                                  <Users className="w-4 h-4" />
                                  <span className="text-sm">{cls?.spots} spots left</span>
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Please select a class type first
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between mt-12">
                  <button
                    onClick={() => setStep(1)}
                    className="btn-secondary"
                  >
                    Back to Packages
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!formData?.classType || !formData?.bookingDate}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Details
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          )}

          {/* Step 3: Personal Details */}
          {step === 3 && (
            <ScrollAnimation>
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-serif font-semibold text-sage mb-4">
                    Your Details
                  </h2>
                  <p className="text-gray-600">We need some basic information to complete your booking.</p>
                </div>
                
                <div className="card p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="customerName"
                          value={formData?.customerName ?? ''}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="customerEmail"
                          value={formData?.customerEmail ?? ''}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="customerPhone"
                        value={formData?.customerPhone ?? ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                        placeholder="+213 555 123 456"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Notes (Optional)
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData?.notes ?? ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                        placeholder="Any injuries, experience level, or special requests..."
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-secondary"
                  >
                    Back to Class Selection
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!formData?.customerName || !formData?.customerEmail}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Review Booking
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          )}

          {/* Step 4: Review & Payment */}
          {step === 4 && (
            <ScrollAnimation>
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-serif font-semibold text-sage mb-4">
                    Review Your Booking
                  </h2>
                  <p className="text-gray-600">Please review your details before completing payment.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Booking Summary */}
                  <div className="card p-8">
                    <h3 className="text-lg font-semibold text-dark-sage mb-6">Booking Summary</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Package:</span>
                        <span className="font-medium">{selectedPackage?.name}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Class:</span>
                        <span className="font-medium">{selectedClass?.name}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date & Time:</span>
                        <span className="font-medium">
                          {selectedDate?.day}, {new Date(selectedDate?.date || '').toLocaleDateString?.('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })} at {selectedDate?.time}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{selectedClass?.duration}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-medium">{formData?.customerName}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-medium">{formData?.customerEmail}</span>
                      </div>
                      
                      <div className="border-t pt-4 mt-6">
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total:</span>
                          <span className="text-sage">{selectedPackage?.price} DZD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Form (Mock) */}
                  <div className="card p-8">
                    <h3 className="text-lg font-semibold text-dark-sage mb-6 flex items-center space-x-2">
                      <CreditCard className="w-5 h-5" />
                      <span>Payment Details</span>
                    </h3>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-sm p-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-yellow-800">
                          <p className="font-medium mb-1">Payment Integration Coming Soon</p>
                          <p>Online payment processing will be available shortly. For now, please pay in cash at the studio before your first class.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 opacity-50">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          disabled
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-gray-100"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            disabled
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-gray-100"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVC
                          </label>
                          <input
                            type="text"
                            disabled
                            placeholder="123"
                            className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-gray-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setStep(3)}
                    className="btn-secondary"
                  >
                    Back to Details
                  </button>
                  <button
                    onClick={handleBookingSubmit}
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <span>Confirm Booking</span>
                    )}
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <ScrollAnimation>
              <div className="max-w-2xl mx-auto text-center">
                <div className="card p-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  
                  <h2 className="text-3xl font-serif font-semibold text-sage mb-6">
                    Booking Confirmed!
                  </h2>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Thank you for booking with us! We've sent a confirmation email to {formData?.customerEmail} with all the details. 
                    Please arrive 10 minutes early for your first class.
                  </p>
                  
                  <div className="bg-light-beige p-6 rounded-sm mb-8">
                    <div className="text-sm text-gray-600 space-y-2">
                      <p><strong>Next Steps:</strong></p>
                      <p>• Check your email for confirmation and studio guidelines</p>
                      <p>• Bring water and wear comfortable clothes</p>
                      <p>• We provide mats and all necessary props</p>
                      <p>• Pay in cash at the studio before your first class</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => window?.location?.assign?.('/contact')}
                      className="btn-secondary"
                    >
                      Contact Us
                    </button>
                    <button
                      onClick={() => window?.location?.assign?.('/classes')}
                      className="btn-primary"
                    >
                      Browse Classes
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default BookingPage
