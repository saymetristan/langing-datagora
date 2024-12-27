import HeroSection from '../components/sections/HeroSection'
import SolutionsEmpresasSection from '../components/sections/SolutionsEmpresasSection'
import SolutionsUsuariosSection from '../components/sections/SolutionsUsuariosSection'
import DataFlowSection from '../components/sections/DataFlowSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolutionsEmpresasSection />
      <DataFlowSection />
      <SolutionsUsuariosSection />
    </main>
  )
}
