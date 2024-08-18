import Features from './_components/features';
import Footer from './_components/footer';
import Hero from './_components/hero';
import Navbar from './_components/navbar';
import Testimonials from './_components/testimonials';
import TrustedBy from './_components/trusted-by';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TrustedBy />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Home;
