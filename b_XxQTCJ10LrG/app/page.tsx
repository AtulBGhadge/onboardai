import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import LogosSection from '@/components/logos-section';
import FeaturesSection from '@/components/features-section';
import HowItWorks from '@/components/how-it-works';
import LiveDemo from '@/components/live-demo';
import PricingSection from '@/components/pricing-section';
import TestimonialsSection from '@/components/testimonials';
import FAQSection from '@/components/faq';
import FinalCTA from '@/components/final-cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <LogosSection />
      <FeaturesSection />
      <HowItWorks />
      <LiveDemo />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
