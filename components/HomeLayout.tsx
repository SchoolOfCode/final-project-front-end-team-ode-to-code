import Navbar from './Navbar';
import WaveImage from './WaveImage';
import Footer from './Footer';

function HomeLayout({
  imageUrl,
  children,
}: {
  imageUrl: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <WaveImage imageUrl={imageUrl} />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
