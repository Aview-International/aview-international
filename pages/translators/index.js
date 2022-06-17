import Navbar from '../../components/navigation/Navbar/Navbar';
import FavoriteInfluencer from '../../components/sections/translators/FavoriteInfluencer/FavoriteInfluencer';
import PerksAview from '../../components/sections/translators/PerksAview/PerksAview';
import MakeImpact from '../../components/sections/translators/MakeImpact/MakeImpact';
import CompanyCulture from '../../components/sections/translators/CompanyCulture/CompanyCulture';
import Process from '../../components/sections/translators/Process/Process';
import ApplyToday from '../../components/sections/translators/ApplyToday/ApplyToday';
import Footer from '../../components/navigation/Footer/Footer';
import Blobs from '../../components/UI/Blobs/Blobs';

function Translators() {
  return (
    <>
      <Navbar />
      <PerksAview />
      <MakeImpact />
      <CompanyCulture />
      <Process />
      <ApplyToday />
      <Footer />
      <Blobs />
    </>
  );
}

export default Translators;
