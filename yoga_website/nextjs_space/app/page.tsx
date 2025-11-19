
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Users, Clock, Star } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ScrollAnimation from '@/components/scroll-animation'

export default function HomePage() {
  const blogPosts = [
    {
      title: 'Simple Morning Stretches for a Calm Start',
      excerpt: 'Begin your day with gentle movements that awaken your body and center your mind.',
      slug: 'morning-stretches-calm-start',
      imageUrl: 'https://static.abacusaicdn.net/images/63abb3b3-5a45-475d-975b-84cd5261a4d0.png'
    },
    {
      title: 'Breathing Techniques for Stress Relief',
      excerpt: 'Discover powerful pranayama practices that bring instant calm to your nervous system.',
      slug: 'breathing-techniques-stress-relief',
      imageUrl: 'https://static.abacusaicdn.net/images/a0d6e2a2-7ccd-4028-98e7-d4bf639532b1.png'
    },
    {
      title: 'Why Consistency in Yoga Matters',
      excerpt: 'Learn how regular practice, even just a few minutes daily, transforms your well-being.',
      slug: 'consistency-yoga-matters',
      imageUrl: 'https://static.abacusaicdn.net/images/a8bb115e-3517-4226-85fb-773dac3d96c4.png'
    }
  ]

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full bg-gray-200">
            <Image
              src="https://static.abacusaicdn.net/images/d42c7398-9d65-4dd1-9d5d-701533572331.png"
              alt="Peaceful yoga practice by the sea in Tipaza"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
        
        <div className="relative z-10 container-max section-padding">
          <div className="max-w-3xl">
            <ScrollAnimation>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-white mb-6 text-balance leading-tight">
                Breathe. Move. <br />
                <span className="text-sage">Find Balance.</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl text-balance">
                Join our yoga community in Tipaza for mindful movement and inner calm.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/classes" className="btn-primary inline-flex items-center space-x-2 group">
                  <span>Book a Class</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="btn-secondary inline-flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Learn More</span>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Instructor Preview Section */}
      <section className="py-20 bg-light-beige">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="relative aspect-[4/5] bg-warm-beige rounded-sm overflow-hidden shadow-lg">
                <Image
                  src="https://static.abacusaicdn.net/images/7fe27f2e-1624-4dce-b2d9-e5c6aecf6a45.png"
                  alt="Yoga instructor portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage mb-4">
                    Meet Your Instructor
                  </h2>
                  <h3 className="text-xl text-dark-sage mb-6">Sarah Benali</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  With over 8 years of dedicated practice and teaching, Sarah brings a gentle yet transformative approach 
                  to yoga. Trained in Hatha, Vinyasa, and Yin styles, she creates a welcoming space where students of 
                  all levels can explore their practice with confidence.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Sarah believes that yoga is not about perfection, but about connection—to your breath, your body, 
                  and your inner wisdom. Join her in discovering the peace that lies within mindful movement.
                </p>
                
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-sage rounded-full mb-2 mx-auto">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-600">500+ Students</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-sage rounded-full mb-2 mx-auto">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-600">8 Years Teaching</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-sage rounded-full mb-2 mx-auto">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-600">3 Yoga Styles</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage mb-4">
                Mindful Insights
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-balance">
                Discover practical wisdom and gentle guidance for deepening your yoga practice and cultivating inner peace.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts?.map?.((post, index) => (
              <ScrollAnimation key={post?.slug} delay={index * 0.1}>
                <Link href={`/blog/${post?.slug}`} className="group">
                  <article className="card p-0 overflow-hidden h-full">
                    <div className="relative aspect-[16/9] bg-gray-200">
                      <Image
                        src={post?.imageUrl || ''}
                        alt={post?.title || ''}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif font-semibold text-lg text-sage mb-3 group-hover:text-dark-sage transition-colors">
                        {post?.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {post?.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
          
          <ScrollAnimation delay={0.4}>
            <div className="text-center mt-12">
              <Link href="/blog" className="btn-primary inline-flex items-center space-x-2 group">
                <span>Read All Posts</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </>
  )
}
