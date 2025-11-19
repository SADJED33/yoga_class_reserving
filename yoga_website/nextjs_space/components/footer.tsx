
import Link from 'next/link'
import { Heart, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-light-beige border-t border-sage/20">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-sage" />
              <span className="font-serif font-semibold text-lg text-sage">Yoga Tipaza</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Creating a peaceful space for mindful movement and inner balance in the heart of Tipaza.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-sage">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/classes" className="text-sm text-gray-600 hover:text-sage transition-colors">
                Classes
              </Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-sage transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-sage transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-sage transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-sage">Find Us</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-sage flex-shrink-0" />
                <span>123 Meditation Street, Tipaza 42000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sage flex-shrink-0" />
                <span>+213 555 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sage flex-shrink-0" />
                <span>hello@yogatipaza.dz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sage/20 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Yoga Tipaza. Made with love for mindful living.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
