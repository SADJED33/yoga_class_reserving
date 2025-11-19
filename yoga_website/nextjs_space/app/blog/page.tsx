
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Heart } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ScrollAnimation from '@/components/scroll-animation'

export const metadata = {
  title: 'Yoga Blog - Mindful Insights from Tipaza',
  description: 'Discover practical yoga tips, mindfulness techniques, and wellness insights from our yoga studio in Tipaza.',
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Simple Morning Stretches for a Calm Start',
      slug: 'morning-stretches-calm-start',
      excerpt: 'Begin your day with gentle movements that awaken your body and center your mind. These simple stretches can be done in just 10 minutes.',
      content: `Starting your day with mindful movement sets a positive tone for everything that follows. Here are five gentle stretches that will help you transition from sleep to wakefulness with grace and intention.

**1. Cat-Cow Pose (Marjaryasana-Bitilasana)**
Begin on hands and knees, moving slowly between arching and rounding your spine. This gentle movement awakens the spine and connects you with your breath.

**2. Child's Pose (Balasana)**
A restful pose that gently stretches the hips, thighs, and ankles while calming the nervous system. Hold for 5-8 breaths.

**3. Gentle Neck Rolls**
Slowly circle your head to release tension from sleep. Move mindfully and listen to your body's needs.

**4. Seated Side Stretch**
Sitting cross-legged, reach one arm overhead and gently lean to the opposite side. Feel the gentle opening along your ribs.

**5. Mountain Pose (Tadasana)**
Stand tall, feeling your connection to the earth below and the sky above. Set an intention for your day.

Remember, the goal isn't perfection—it's presence. Move slowly, breathe deeply, and honor where your body is each morning.`,
      imageUrl: 'https://static.abacusaicdn.net/images/63abb3b3-5a45-475d-975b-84cd5261a4d0.png',
      author: 'Sarah Benali',
      date: '2024-11-10',
      readTime: '4 min read'
    },
    {
      id: 2,
      title: 'Breathing Techniques for Stress Relief',
      slug: 'breathing-techniques-stress-relief',
      excerpt: 'Discover powerful pranayama practices that bring instant calm to your nervous system. Learn techniques you can use anywhere, anytime.',
      content: `In our fast-paced world, stress can feel overwhelming. But you always carry with you the most powerful tool for finding calm: your breath. Here are three simple yet profound breathing techniques that can transform your relationship with stress.

**Three-Part Breath (Dirga Pranayama)**
This foundational technique teaches you to breathe fully and consciously:
- Place one hand on your chest, one on your belly
- Inhale slowly, filling your belly first, then ribs, then chest
- Exhale in reverse order: chest, ribs, belly
- Practice for 5-10 breaths

**4-7-8 Breath**
This technique activates your body's relaxation response:
- Inhale for 4 counts
- Hold for 7 counts  
- Exhale for 8 counts
- Repeat 3-4 times

**Box Breathing (Sama Vritti)**
Equal breathing creates balance and calm:
- Inhale for 4 counts
- Hold for 4 counts
- Exhale for 4 counts
- Hold for 4 counts

The beauty of pranayama is that it's always available to you. Whether you're stuck in traffic, facing a difficult conversation, or simply need to center yourself, these techniques offer immediate relief and long-term benefits for your nervous system.`,
      imageUrl: 'https://static.abacusaicdn.net/images/a0d6e2a2-7ccd-4028-98e7-d4bf639532b1.png',
      author: 'Sarah Benali',
      date: '2024-11-05',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Why Consistency in Yoga Matters',
      slug: 'consistency-yoga-matters',
      excerpt: 'Learn how regular practice, even just a few minutes daily, transforms your well-being more than occasional long sessions.',
      content: `One of the most common questions I receive is: "How often should I practice yoga?" My answer might surprise you: consistency matters more than duration. A few minutes of daily practice will transform your life more than sporadic hour-long sessions.

**The Power of Little and Often**
Just as a river shapes stone through consistent flow rather than occasional floods, your yoga practice creates lasting change through regularity. Even 10-15 minutes daily can:
- Improve flexibility and strength
- Reduce stress and anxiety
- Enhance sleep quality
- Increase body awareness
- Cultivate mental clarity

**Building Your Home Practice**
Creating a sustainable home practice doesn't require a large space or expensive equipment. Here's how to begin:

1. **Choose a consistent time** - Morning or evening, pick what works for your schedule
2. **Create a sacred space** - Even a yoga mat in the corner of your room
3. **Start small** - 5-10 minutes is perfect
4. **Focus on breath** - Let your breathing guide your movement
5. **Be gentle with yourself** - Some days will be easier than others

**The Ripple Effect**
Regular yoga practice creates positive changes that extend far beyond the mat. You'll find yourself responding to challenges with greater calm, sleeping more soundly, and moving through your day with increased awareness and presence.

Remember, yoga is not about achieving perfect poses—it's about showing up for yourself with compassion and consistency. Your future self will thank you for every moment you spend in practice.`,
      imageUrl: 'https://static.abacusaicdn.net/images/a8bb115e-3517-4226-85fb-773dac3d96c4.png',
      author: 'Sarah Benali',
      date: '2024-10-28',
      readTime: '5 min read'
    }
  ]

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-light-beige">
        <div className="container-max section-padding">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-sage mb-6">
                Mindful Insights
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                Discover practical wisdom and gentle guidance for deepening your yoga practice 
                and cultivating inner peace in your daily life.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {blogPosts?.map?.((post, index) => (
              <ScrollAnimation key={post?.id} delay={index * 0.1}>
                <Link href={`/blog/${post?.slug}`} className="group">
                  <article className="card overflow-hidden h-full">
                    <div className="relative aspect-[16/9] bg-gray-200">
                      <Image
                        src={post?.imageUrl || ''}
                        alt={post?.title || ''}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post?.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post?.date || '').toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <span>{post?.readTime}</span>
                      </div>
                      
                      <h2 className="text-2xl font-serif font-semibold text-sage mb-4 group-hover:text-dark-sage transition-colors">
                        {post?.title}
                      </h2>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {post?.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-2 text-sage font-medium group-hover:text-dark-sage transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-light-beige">
        <div className="container-max section-padding">
          <ScrollAnimation>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold text-sage mb-6">
                Ready to Begin Your Practice?
              </h2>
              <p className="text-gray-600 mb-8">
                Join us for mindful movement and discover the transformative power of yoga in beautiful Tipaza.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/classes" className="btn-primary inline-flex items-center space-x-2 group">
                  <span>Explore Classes</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-secondary inline-flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Get in Touch</span>
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
