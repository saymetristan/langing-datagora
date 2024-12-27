import HeroSection from '../components/sections/HeroSection'
import SolutionsEmpresasSection from '../components/sections/SolutionsEmpresasSection'
import PortalTransitionSection from '@/components/sections/PortalTransitionSection'
import SolutionsUsuariosSection from '../components/sections/SolutionsUsuariosSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolutionsEmpresasSection />
      <PortalTransitionSection />
      <SolutionsUsuariosSection />
    </main>
  )
}
