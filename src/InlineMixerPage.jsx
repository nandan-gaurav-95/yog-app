import Products           from './components/Products/Products';
import ApplicationSectors from './components/Applications/ApplicationSectors';
import AccessoriesAndSkid from './components/Accessories/AccessoriesAndSkid';
import Features           from './components/Features/Features';
import RotatingPump       from './components/RotatingPump/RotatingPump';
import WhitePages         from './components/WhitePages/WhitePages';
import Contact            from './components/Contact/Contact';
import Footer             from './components/Footer/Footer';

export default function InlineMixerPage() {
  return (
    <div style={{ background: 'transparent', color: '#e8e4d9', minHeight: '100vh' }}>
      <Products />
      <ApplicationSectors />
      <AccessoriesAndSkid />
      <Features />
      <RotatingPump />
      <WhitePages />
      <Contact />
      <Footer />
    </div>
  );
}
