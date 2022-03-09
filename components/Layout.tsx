import Navbar from './Navbar';
import WaveImage from './WaveImage';
import Footer from './Footer';
import Head from 'next/head';

function Layout({
  imageUrl,
  children,
}: {
  imageUrl: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <WaveImage imageUrl={imageUrl} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
