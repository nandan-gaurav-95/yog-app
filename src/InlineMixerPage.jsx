import Products          from './components/Products/Products';
import ApplicationSectors from './components/Applications/ApplicationSectors';
import AccessoriesAndSkid from './components/Accessories/AccessoriesAndSkid';
import Features          from './components/Features/Features';
import WhitePages        from './components/WhitePages/WhitePages';
import Contact           from './components/Contact/Contact';
import Footer            from './components/Footer/Footer';

export default function InlineMixerPage() {
  return (
    <div style={{ background: '#0b0f1a', color: '#e8e4d9', minHeight: '100vh' }}>
      <Products />
      <ApplicationSectors />
      <AccessoriesAndSkid />
      <Features />
      <WhitePages />
      <Contact />
      <Footer />
    </div>
  );
}
