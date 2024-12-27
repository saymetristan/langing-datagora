import HeroSection from '../components/sections/HeroSection'
import SolutionsEmpresasSection from '../components/sections/SolutionsEmpresasSection'
import SolutionsUsuariosSection from '../components/sections/SolutionsUsuariosSection'
import DataFlowSection from '../components/sections/DataFlowSection'
import TechStackSection from '../components/sections/TechStackSection'
import ImpactSection from '../components/sections/ImpactSection'
import CTASection from '../components/sections/CTASection'
import TransitionOverlay from '../components/sections/TransitionOverlay'
import Footer from '../components/sections/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TransitionOverlay />
      <SolutionsEmpresasSection />
      <DataFlowSection />
      <SolutionsUsuariosSection />
      <TechStackSection />
      <ImpactSection />
      <CTASection />
      <Footer />
    </main>
  )
}