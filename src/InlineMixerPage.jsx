import HowItWorks       from './components/HowItWorks/HowItWorks';
import MixerComponents  from './components/Components/MixerComponents';
import FlowPatterns     from './components/FlowPatterns/FlowPatterns';
import Features         from './components/Features/Features';
import Metallurgy       from './components/Metallurgy/Metallurgy';
import Applications     from './components/Applications/Applications';
import WhitePages       from './components/WhitePages/WhitePages';
import Contact          from './components/Contact/Contact';
import Footer           from './components/Footer/Footer';

export default function InlineMixerPage() {
  return (
    <div style={{ background: '#0b0f1a', color: '#e8e4d9', minHeight: '100vh' }}>
      <HowItWorks />
      <MixerComponents />
      <FlowPatterns />
      <Features />
      <Metallurgy />
      <Applications />
      <WhitePages />
      <Contact />
      <Footer />
    </div>
  );
}
