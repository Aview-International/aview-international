import Navbar from '../../components/navigation/Navbar/Navbar';
import FindGrowth from '../../components/sections/creators/FindGrowth/FindGrowth';
import OurServices from '../../components/sections/creators/OurServices/OurServices';
import YouCreate from '../../components/sections/creators/YouCreate/YouCreate';
import TranslationBenefits from '../../components/sections/creators/TranslationBenefits/TranslationBenefits';
import HowItWorks from '../../components/sections/creators/HowItWorks/HowItWorks';
import AnySize from '../../components/sections/creators/AnySize/AnySize';
import GeneratingAview from '../../components/sections/home/Generate/Generate';
import GrowthWithAview from '../../components/sections/creators/GrowthWithAview/GrowthWithAview';
// import GenerateAview from '../../components/sections/creators/GenerateAview/GenerateAview';
import Footer from '../../components/navigation/Footer/Footer';
import Blobs from '../../components/UI/Blobs/Blobs';
import SEO from '../../components/SEO/SEO';
import GeneratingAviewFor from '../../components/sections/creators/GeneratingAviewFor/GeneratingAviewFor';

function Creators() {
  return (
    <>
      <SEO title="Creators - AVIEW" />
      <Navbar />
      <FindGrowth />
      <OurServices />
      <YouCreate />
      <TranslationBenefits />
      <HowItWorks />
      <AnySize />
      <GeneratingAviewFor />
      <GrowthWithAview />
      {/* <GenerateAview /> */}
      <GeneratingAview title="Generate Aview" />
      <Footer />
      <Blobs />
    </>
  );
}

export default Creators;
