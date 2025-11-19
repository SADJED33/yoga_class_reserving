
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create blog posts
  const blogPosts = [
    {
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
      published: true
    },
    {
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
      published: true
    },
    {
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
      published: true
    }
  ]

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post
    })
  }

  // Create class schedules
  const classSchedules = [
    {
      name: 'Morning Hatha Yoga',
      style: 'Hatha',
      description: 'Gentle, slower-paced practice focusing on basic postures and breathing techniques. Perfect for beginners.',
      duration: 75,
      level: 'All Levels',
      dayOfWeek: 'Monday',
      time: '09:00',
      maxCapacity: 12,
      priceDropIn: 2000
    },
    {
      name: 'Evening Vinyasa Flow',
      style: 'Vinyasa',
      description: 'Dynamic sequences that link breath with movement in a flowing, dance-like practice.',
      duration: 60,
      level: 'Beginner to Advanced',
      dayOfWeek: 'Monday',
      time: '18:30',
      maxCapacity: 12,
      priceDropIn: 2000
    },
    {
      name: 'Morning Yin Yoga',
      style: 'Yin',
      description: 'A meditative practice with longer-held poses using props to support deep relaxation.',
      duration: 90,
      level: 'All Levels',
      dayOfWeek: 'Wednesday',
      time: '09:00',
      maxCapacity: 12,
      priceDropIn: 2000
    },
    {
      name: 'Evening Hatha Yoga',
      style: 'Hatha',
      description: 'Gentle, slower-paced practice focusing on basic postures and breathing techniques.',
      duration: 75,
      level: 'All Levels',
      dayOfWeek: 'Wednesday',
      time: '18:00',
      maxCapacity: 12,
      priceDropIn: 2000
    },
    {
      name: 'Morning Vinyasa Flow',
      style: 'Vinyasa',
      description: 'Dynamic sequences that link breath with movement in a flowing practice.',
      duration: 60,
      level: 'Beginner to Advanced',
      dayOfWeek: 'Friday',
      time: '09:00',
      maxCapacity: 12,
      priceDropIn: 2000
    },
    {
      name: 'Evening Yin Yoga',
      style: 'Yin',
      description: 'A meditative practice with longer-held poses for deep relaxation.',
      duration: 90,
      level: 'All Levels',
      dayOfWeek: 'Friday',
      time: '18:30',
      maxCapacity: 12,
      priceDropIn: 2000
    },
    {
      name: 'Weekend All Levels Flow',
      style: 'Vinyasa',
      description: 'A balanced flow practice suitable for all levels with modifications offered.',
      duration: 75,
      level: 'All Levels',
      dayOfWeek: 'Saturday',
      time: '10:00',
      maxCapacity: 15,
      priceDropIn: 2000
    }
  ]

  for (const schedule of classSchedules) {
    await prisma.classSchedule.upsert({
      where: { 
        dayOfWeek_time: {
          dayOfWeek: schedule.dayOfWeek,
          time: schedule.time
        }
      },
      update: {},
      create: schedule
    })
  }

  // Create class packages
  const packages = [
    {
      name: 'Drop-in Class',
      description: 'Perfect for trying out classes',
      classes: 1,
      validDays: 1,
      price: 2000
    },
    {
      name: '5-Class Pack',
      description: 'Valid for 6 weeks - 15% savings',
      classes: 5,
      validDays: 42,
      price: 8500
    },
    {
      name: '10-Class Pack',
      description: 'Valid for 10 weeks - 20% savings',
      classes: 10,
      validDays: 70,
      price: 16000
    },
    {
      name: 'Monthly Unlimited',
      description: '30-day unlimited access - Best value',
      classes: null,
      validDays: 30,
      price: 12000
    }
  ]

  for (const pkg of packages) {
    const existing = await prisma.classPackage.findFirst({
      where: { name: pkg.name }
    })
    
    if (!existing) {
      await prisma.classPackage.create({
        data: pkg
      })
    }
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
