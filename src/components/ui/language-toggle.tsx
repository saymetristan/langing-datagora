import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  
  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-800 hover:border-purple-500/50 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {language === 'es' ? 'EN' : 'ES'}
    </motion.button>
  )
} 