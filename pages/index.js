import Navbar from '../components/navigation/Navbar/Navbar';
import Landing from '../components/sections/home/Landing/Landing';
import WeTranslate from '../components/sections/home/WeTranslate/WeTranslate';
import LeadInTranslations from '../components/sections/home/LeadInTranslations/LeadInTranslations';
import BreadAndButter from '../components/sections/home/BreadAndButter/BreadAndButter';
import ContentCreators from '../components/sections/home/ContentCreators/ContentCreators';
import Videos from '../components/sections/home/Videos/Videos';
import Generate from '../components/sections/home/Generate/Generate';
import FAQs from '../components/sections/home/FAQs/FAQs';
import GoGlobal from '../components/sections/home/GoGlobal/GoGlobal';
import Footer from '../components/navigation/Footer/Footer';
import Blobs from '../components/UI/Blobs/Blobs';

function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <ContentCreators />
      <Videos />
      <BreadAndButter />
      <WeTranslate />
      <LeadInTranslations />
      <Generate title="Start Generating AVIEW Today" />
      <FAQs />
      <GoGlobal />
      <Footer />
      <Blobs />
    </>
  );
}

export default Home;
