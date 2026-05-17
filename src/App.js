
import './App.css';


import './styles/global.css';
import Navbar          from './components/Navbar/Navbar';
import Hero            from './components/Hero/Hero';
import InlineMixerPage from './InlineMixerPage';
 
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InlineMixerPage />
    </>
  );
}

// export default App;
