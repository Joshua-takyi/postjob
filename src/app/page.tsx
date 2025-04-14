import { AboutSection2 } from '@/components/aboutSection2';
import { AiAndOptimization } from '@/components/aiSection';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import { Midsec } from '@/components/midsec';
import { ResumeDesignSection } from '@/components/resumeDesignSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <Midsec />
      <AboutSection2 />
      <AiAndOptimization />
      <ResumeDesignSection />
      <Footer />
    </div>
  );
};

export default Home;
