import Artworks from './components/Artworks';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Alert from './components/Alert';
import Loading from './components/Loading';
import { useEffect } from 'react';
import { isWallectConnected } from './CryptoOgr';

const App = () => {
  useEffect(() => {
    isWallectConnected().then(() => console.log('Blockchain connected'));
  }, []);
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks />
      <Footer />
      <Alert />
      <Loading />
    </div>
  );
};

export default App;
