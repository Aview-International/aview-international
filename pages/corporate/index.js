import Navbar from '../../components/navigation/Navbar/Navbar';
import Footer from '../../components/navigation/Footer/Footer';
import Blobs from '../../components/UI/Blobs/Blobs';
import SEO from '../../components/SEO/SEO';
import BrandGlobal from '../../components/sections/corporate/BrandGlobal/BrandGlobal';
import Mission from '../../components/sections/corporate/Mission/Mission';
import ContentCreators from '../../components/sections/corporate/ContentCreators/ContentCreators';
import OurServices from '../../components/sections/creators/OurServices/OurServices';
import Milestones from '../../components/sections/corporate/Milestones/Milestones';
import Testimonials from '../../components/sections/corporate/Testimonials/Testimonials';
import WhyChooseUs from '../../components/sections/corporate/WhyChooseUs/WhyChooseUs';
import FAQ from '../../components/sections/corporate/FAQ/FAQ';
import Form from '../../components/sections/corporate/Form/Form';

function Corporate() {
  return (
    <>
      <SEO title="Corporate - AVIEW" />
      <Navbar />
      <BrandGlobal />
      <Mission />
      <ContentCreators />
      <OurServices />
      <Milestones />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <Form />
      <Footer />
      <Blobs />
    </>
  );
}

export default Corporate;
