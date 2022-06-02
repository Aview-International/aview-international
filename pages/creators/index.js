import Navbar from '../../components/navigation/Navbar/Navbar';
import FindGrowth from '../../components/sections/creators/FindGrowth/FindGrowth';
import OurServices from '../../components/sections/creators/OurServices/OurServices';
import YouCreate from '../../components/sections/creators/YouCreate/YouCreate';
import TranslationBenefits from '../../components/sections/creators/TranslationBenefits/TranslationBenefits';
import HowItWorks from '../../components/sections/creators/HowItWorks/HowItWorks';
import AnySize from '../../components/sections/creators/AnySize/AnySize';
import GeneratingAview from '../../components/sections/creators/GeneratingAview/GeneratingAview';
import GrowthWithAview from '../../components/sections/creators/GrowthWithAview/GrowthWithAview';
import GenerateAview from '../../components/sections/creators/GenerateAview/GenerateAview';
import Footer from '../../components/navigation/Footer/Footer';

function Creators() {
  return (
    <>
      <Navbar />
      <FindGrowth />
      <OurServices />
      <YouCreate />
      <TranslationBenefits />
      <HowItWorks />
      <AnySize />
      <GeneratingAview />
      <GrowthWithAview />
      <GenerateAview />
      <Footer />
    </>
  );
}

export default Creators;
