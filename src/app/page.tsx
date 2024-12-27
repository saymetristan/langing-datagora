import HeroSection from '../components/sections/HeroSection'
import SolutionsEmpresasSection from '../components/sections/SolutionsEmpresasSection'
import WarpTransitionSection from '../components/sections/WarpTransitionSection'
import SolutionsUsuariosSection from '../components/sections/SolutionsUsuariosSection'
import PortalTransitionSection from '@/components/sections/PortalTransitionSection'

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
