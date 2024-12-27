'use client'

import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700']
})

const socialLinks = [
  { href: 'https://github.com/datagora-mx', Icon: FaGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/company/datagorai', Icon: FaLinkedin, label: 'LinkedIn' },
]

const footerLinks = [
  { href: '/privacidad', text: 'Política de Privacidad' },
  { href: '/terminos', text: 'Términos de Uso' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <h3 className={`${spaceGrotesk.className} text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text mb-4`}>
              Datagora
            </h3>
            <p className="text-gray-400">
              Transformando el presente con soluciones de IA que definen el futuro.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Útiles</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400 mb-4">
              contacto@datagora.mx<br />
              +52 (813) 969 2995
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Datagora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 