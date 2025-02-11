// pages/index.js
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import UseCaseSection from '../../components/UseCaseSection';
import BenefitsSection from '../../components/BenefitsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111a22]">
      <Header />
      <main>
        <HeroSection />
        <UseCaseSection />
        <BenefitsSection />
      </main>
    </div>
  );
}