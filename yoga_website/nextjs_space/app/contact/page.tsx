
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ScrollAnimation from '@/components/scroll-animation'
import ContactForm from '@/components/contact-form'

export const metadata = {
  title: 'Contact Yoga Studio Tipaza - Get in Touch',
  description: 'Contact our yoga studio in Tipaza. Find our location, class times, and send us a message. We\'re here to support your yoga journey.',
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-light-beige">
        <div className="container-max section-padding">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-sage mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                Have questions about our classes? Want to book a private session? 
                We'd love to hear from you and support your yoga journey.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <ScrollAnimation>
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-serif font-semibold text-sage mb-8">
                    Visit Our Studio
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-sage rounded-full flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-sage mb-2">Studio Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                          123 Meditation Street<br />
                          Near the Archaeological Park<br />
                          Tipaza 42000, Algeria
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-sage rounded-full flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-sage mb-2">Phone</h3>
                        <p className="text-gray-600">+213 555 123 456</p>
                        <p className="text-sm text-gray-500 mt-1">Call or WhatsApp</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-sage rounded-full flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-sage mb-2">Email</h3>
                        <p className="text-gray-600">hello@yogatipaza.dz</p>
                        <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-sage rounded-full flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-sage mb-2">Studio Hours</h3>
                        <div className="text-gray-600 space-y-1 text-sm">
                          <p>Monday: 8:30 AM - 8:00 PM</p>
                          <p>Wednesday: 8:30 AM - 7:30 PM</p>
                          <p>Friday: 8:30 AM - 8:00 PM</p>
                          <p>Saturday: 9:30 AM - 12:00 PM</p>
                          <p className="text-gray-500 mt-2">Closed Tuesday, Thursday & Sunday</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="relative">
                  <h3 className="text-xl font-serif font-semibold text-sage mb-4">Find Us</h3>
                  <div className="relative aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-sage mx-auto mb-2" />
                        <p className="text-gray-600 font-medium">Yoga Studio Tipaza</p>
                        <p className="text-sm text-gray-500">123 Meditation Street, Tipaza</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Located in the peaceful heart of Tipaza, just minutes from the archaeological sites.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Contact Form */}
            <ScrollAnimation delay={0.2}>
              <div className="card p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <Heart className="w-6 h-6 text-sage" />
                  <h2 className="text-2xl font-serif font-semibold text-sage">
                    Send us a Message
                  </h2>
                </div>
                
                <ContactForm />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-beige">
        <div className="container-max section-padding">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-semibold text-sage mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions about our classes and studio.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollAnimation delay={0.1}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-dark-sage mb-2">Do I need to book in advance?</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    While drop-ins are welcome, we recommend booking to ensure your spot, 
                    especially for popular evening classes.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-dark-sage mb-2">What should I bring?</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Just bring yourself and water. We provide mats, blocks, and all other props. 
                    Wear comfortable clothes that allow for movement.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-dark-sage mb-2">Are beginners welcome?</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Absolutely! All our classes are designed to accommodate different levels. 
                    We offer modifications for every pose.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-dark-sage mb-2">Can I try a class first?</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Yes! Your first class is always a gentle introduction. Come 15 minutes early 
                    so we can chat and help you feel comfortable.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-dark-sage mb-2">Do you offer private sessions?</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We offer one-on-one sessions tailored to your needs and goals. 
                    Contact us to discuss scheduling and pricing.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-dark-sage mb-2">What if I need to cancel?</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Please cancel at least 2 hours before class. For class packs, 
                    we can reschedule your session without penalty.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
