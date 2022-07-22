import Navbar from '../../components/navigation/Navbar/Navbar';
import Landing from '../../components/sections/about/Landing/Landing';
import AboutAview from '../../components/sections/about/AboutAview/AboutAview';
import AtAview from '../../components/sections/about/AtAview/AtAview';
import CoreValues from '../../components/sections/about/CoreValues/CoreValues';
import Growth from '../../components/sections/about/Growth/Growth';
import Milestones from '../../components/sections/about/Milestones/Milestones';
import MeetTeam from '../../components/sections/about/MeetTeam/MeetTeam';
import Name from '../../components/sections/about/Name/Name';
import JoinTeam from '../../components/sections/about/JoinTeam/JoinTeam';
import Footer from '../../components/navigation/Footer/Footer';
import Blobs from '../../components/UI/Blobs/Blobs';
import SEO from '../../components/SEO/SEO';

function About() {
  return (
    <>
      <SEO title="About - AVIEW" />
      <Navbar />
      <Landing />
      <AboutAview />
      <AtAview />
      <CoreValues />
      <Growth />
      <Milestones />
      {/* <MeetTeam /> */}
      <Name />
      <JoinTeam />
      <Footer />
      <Blobs />
    </>
  );
}

export default About;
