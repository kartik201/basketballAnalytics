import Navbar from '../src/components/Navbar';
import HeroVideo from '../src/components/HeroVideo';
import PrecisionTracking from '../src/components/PrecisionTracking';
import TransferPortal from '../src/components/TransferPortal';
import ComputerVision from '../src/components/ComputerVision';
import AIAssistant from '../src/components/AIAssistant';
import Pricing from '../src/components/Pricing';
import FAQ from '../src/components/FAQ';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroVideo />
      <PrecisionTracking />
      <TransferPortal />
      <ComputerVision />
      <AIAssistant />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}