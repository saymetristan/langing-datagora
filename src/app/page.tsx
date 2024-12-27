import HeroSection from '../components/sections/HeroSection'
import SolutionsEmpresasSection from '../components/sections/SolutionsEmpresasSection'
import SolutionsUsuariosSection from '../components/sections/SolutionsUsuariosSection'
import DataFlowSection from '../components/sections/DataFlowSection'
import TechStackSection from '../components/sections/TechStackSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolutionsEmpresasSection />
      <DataFlowSection />
      <SolutionsUsuariosSection />
      <TechStackSection />
    </main>
  )
}
