
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, Star, Calendar, CreditCard, ArrowRight } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ScrollAnimation from '@/components/scroll-animation'

export const metadata = {
  title: 'Yoga Classes in Tipaza - Hatha, Vinyasa & Yin Yoga',
  description: 'Join our yoga classes in Tipaza. Offering Hatha, Vinyasa, and Yin yoga for all levels. Drop-in classes and packages available.',
}

export default function ClassesPage() {
  const yogaStyles = [
    {
      name: 'Hatha Yoga',
      description: 'A gentle, slower-paced practice focusing on basic postures and breathing techniques. Perfect for beginners.',
      duration: '75 minutes',
      level: 'All Levels',
      imageUrl: 'https://static.abacusaicdn.net/images/8cd63427-3a09-4ebc-b1ed-2f6c5a1509e4.png',
      benefits: ['Builds strength', 'Improves flexibility', 'Reduces stress', 'Better sleep']
    },
    {
      name: 'Vinyasa Flow',
      description: 'Dynamic sequences that link breath with movement in a flowing, dance-like practice.',
      duration: '60 minutes',
      level: 'Beginner to Advanced',
      imageUrl: 'https://static.abacusaicdn.net/images/30b54120-eec6-4e9b-b336-019f22436ecd.png',
      benefits: ['Builds stamina', 'Improves balance', 'Increases focus', 'Full body workout']
    },
    {
      name: 'Yin Yoga',
      description: 'A meditative practice with longer-held poses using props to support deep relaxation.',
      duration: '90 minutes',
      level: 'All Levels',
      imageUrl: 'https://static.abacusaicdn.net/images/f31ceec9-e75c-476d-9717-b11dc23a0810.png',
      benefits: ['Deep relaxation', 'Increased flexibility', 'Stress relief', 'Inner peace']
    }
  ]

  const schedule = [
    { day: 'Monday', time: '09:00', class: 'Hatha Yoga', instructor: 'Sarah' },
    { day: 'Monday', time: '18:30', class: 'Vinyasa Flow', instructor: 'Sarah' },
    { day: 'Wednesday', time: '09:00', class: 'Yin Yoga', instructor: 'Sarah' },
    { day: 'Wednesday', time: '18:00', class: 'Hatha Yoga', instructor: 'Sarah' },
    { day: 'Friday', time: '09:00', class: 'Vinyasa Flow', instructor: 'Sarah' },
    { day: 'Friday', time: '18:30', class: 'Yin Yoga', instructor: 'Sarah' },
    { day: 'Saturday', time: '10:00', class: 'All Levels Flow', instructor: 'Sarah' }
  ]

  const pricing = {
    dropIn: { name: 'Drop-in Class', price: '2000', description: 'Perfect for trying out classes' },
    pack5: { name: '5-Class Pack', price: '8500', description: 'Valid for 6 weeks', savings: '15% savings' },
    pack10: { name: '10-Class Pack', price: '16000', description: 'Valid for 10 weeks', savings: '20% savings' },
    unlimited: { name: 'Monthly Unlimited', price: '12000', description: '30-day unlimited access', savings: 'Best value' }
  }

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full bg-gray-200">
            <Image
              src="https://static.abacusaicdn.net/images/e275c1b2-e42c-4705-b267-f4de5188982c.png"
              alt="Group yoga class in Tipaza studio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
        
        <div className="relative z-10 container-max section-padding">
          <ScrollAnimation>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6">
                Find Your Perfect <span className="text-sage">Yoga Class</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl text-balance">
                Explore different yoga styles and find the practice that resonates with your body and soul.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Yoga Styles Section */}
      <section className="py-20 bg-light-beige">
        <div className="container-max section-padding">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage mb-6">
                Our Yoga Styles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-balance">
                Each style offers unique benefits and approaches to mindful movement. All levels are welcome in every class.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {yogaStyles?.map?.((style, index) => (
              <ScrollAnimation key={style?.name} delay={index * 0.1}>
                <div className="card overflow-hidden h-full">
                  <div className="relative aspect-[16/9] bg-gray-200">
                    <Image
                      src={style?.imageUrl || ''}
                      alt={`${style?.name} class`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-serif font-semibold text-sage">
                        {style?.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{style?.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{style?.level}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {style?.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-dark-sage mb-3">Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {style?.benefits?.map?.((benefit) => (
                          <div key={benefit} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-sage rounded-full"></div>
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage mb-6">
                Weekly Schedule
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                All classes are held at our peaceful studio in Tipaza. Arrive 10 minutes early for a calm transition into practice.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="card overflow-hidden">
                <div className="hidden md:grid grid-cols-4 gap-4 bg-sage text-white p-6">
                  <div className="font-semibold">Day</div>
                  <div className="font-semibold">Time</div>
                  <div className="font-semibold">Class</div>
                  <div className="font-semibold">Instructor</div>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {schedule?.map?.((session, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 hover:bg-light-beige/50 transition-colors">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-sage md:hidden" />
                        <span className="font-medium text-dark-sage">{session?.day}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-sage md:hidden" />
                        <span className="text-gray-600">{session?.time}</span>
                      </div>
                      <div className="font-medium text-gray-800">{session?.class}</div>
                      <div className="text-gray-600">{session?.instructor}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-light-beige">
        <div className="container-max section-padding">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage mb-6">
                Flexible Pricing Options
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the option that works best for your schedule and budget. All prices are in Algerian Dinars (DZD).
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object?.entries?.(pricing)?.map?.(([key, option], index) => (
              <ScrollAnimation key={key} delay={index * 0.1}>
                <div className={`card p-8 text-center h-full relative ${
                  key === 'unlimited' ? 'ring-2 ring-sage shadow-lg' : ''
                }`}>
                  {key === 'unlimited' && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-sage text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center w-16 h-16 bg-sage rounded-full mb-6 mx-auto">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-serif font-semibold text-lg text-dark-sage mb-3">
                    {option?.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-sage">{option?.price}</span>
                    <span className="text-gray-600"> DZD</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{option?.description}</p>
                  
                  {'savings' in option && option?.savings && (
                    <div className="bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-medium mb-6">
                      {option?.savings}
                    </div>
                  )}
                  
                  <Link 
                    href="/classes/book" 
                    className={`w-full ${key === 'unlimited' ? 'btn-primary' : 'btn-secondary'} inline-flex items-center justify-center space-x-2 group`}
                  >
                    <span>Select Plan</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container-max section-padding">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-gray-600 mb-8 text-balance">
                Join our welcoming community and discover the transformative power of mindful movement. 
                Your first class is always a gentle introduction to the practice.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/classes/book" className="btn-primary inline-flex items-center space-x-2 group">
                  <span>Reserve Your Spot</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-secondary inline-flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Ask Questions</span>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </>
  )
}
