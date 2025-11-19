
import Image from 'next/image'
import { Heart, Award, Users, Calendar } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ScrollAnimation from '@/components/scroll-animation'

export const metadata = {
  title: 'About Sarah - Yoga Instructor in Tipaza',
  description: 'Learn about Sarah Benali, your dedicated yoga instructor in Tipaza. With 8+ years of experience in Hatha, Vinyasa, and Yin yoga.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-light-beige">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-semibold text-sage mb-6">
                  About Your Instructor
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Meet Sarah Benali, a passionate yoga teacher dedicated to guiding you on your journey 
                  toward inner peace and physical well-being in the beautiful setting of Tipaza.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="relative aspect-square bg-gray-200 rounded-sm overflow-hidden shadow-lg">
                <Image
                  src="https://static.abacusaicdn.net/images/7fe27f2e-1624-4dce-b2d9-e5c6aecf6a45.png"
                  alt="Sarah Benali - Yoga Instructor in Tipaza"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Background Image Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full bg-gray-200">
            <Image
              src="https://static.abacusaicdn.net/images/73afe97a-363a-4352-bd6c-24473bfefcdb.png"
              alt="Peaceful yoga studio with nature view"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/80"></div>
          </div>
        </div>
        
        <div className="relative z-10 container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage mb-6">
                  My Journey with Yoga
                </h2>
              </div>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollAnimation delay={0.1}>
                <div className="space-y-6">
                  <h3 className="text-xl font-serif font-semibold text-dark-sage">The Beginning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    My relationship with yoga began over a decade ago during a particularly stressful period 
                    in my corporate career. What started as a way to manage stress quickly blossomed into 
                    a deep love for the practice and its transformative power.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    I discovered that yoga wasn't just about physical poses—it was a complete system 
                    for living with greater awareness, compassion, and joy. This realization changed the 
                    course of my life forever.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.2}>
                <div className="space-y-6">
                  <h3 className="text-xl font-serif font-semibold text-dark-sage">Teaching Philosophy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I believe that yoga is accessible to everyone, regardless of age, flexibility, or experience. 
                    My classes focus on creating a safe, non-judgmental space where you can explore your 
                    practice at your own pace.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Through mindful movement, breathwork, and meditation, we'll work together to cultivate 
                    strength, flexibility, and inner peace. My goal is to help you develop a sustainable 
                    practice that supports your life both on and off the mat.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-light-beige">
        <div className="container-max section-padding">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage mb-6">
                Training & Experience
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                My commitment to ongoing learning ensures that I bring the most authentic and 
                effective teachings to every class.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={0.1}>
              <div className="card p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-sage rounded-full mb-6 mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-dark-sage mb-3">
                  200-Hour RYT
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Registered Yoga Teacher with Yoga Alliance, specializing in Hatha and Vinyasa styles.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="card p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-sage rounded-full mb-6 mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-dark-sage mb-3">
                  Yin Certification
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Advanced training in Yin Yoga and restorative practices for deep healing.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.3}>
              <div className="card p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-sage rounded-full mb-6 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-dark-sage mb-3">
                  500+ Students
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Taught workshops and regular classes to students of all ages and abilities.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.4}>
              <div className="card p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-sage rounded-full mb-6 mx-auto">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-dark-sage mb-3">
                  8+ Years Teaching
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Extensive experience guiding students through their yoga journey with compassion.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage mb-8">
                Beyond the Mat
              </h2>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.1}>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  When I'm not teaching, you'll find me exploring the beautiful coastal paths of Tipaza, 
                  practicing meditation at sunrise, or enjoying quiet moments with a good book and herbal tea.
                </p>
                <p className="text-lg">
                  I'm passionate about sustainable living, supporting local artisans, and creating community 
                  connections through the shared language of mindful movement. I believe that yoga has the 
                  power to create positive change, both within ourselves and in the world around us.
                </p>
                <p className="text-lg">
                  I look forward to sharing this beautiful practice with you and supporting you on your 
                  unique journey toward greater health, happiness, and inner peace.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="mt-12">
                <p className="font-serif text-xl text-sage italic">
                  "Yoga is not about touching your toes. It is about what you learn on the way down."
                </p>
                <p className="mt-4 text-gray-600">— Sarah Benali</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
