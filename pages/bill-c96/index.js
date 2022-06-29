import Navbar from '../../components/navigation/Navbar/Navbar';
import Footer from '../../components/navigation/Footer/Footer';
import Blobs from '../../components/UI/Blobs/Blobs';
import FreeQuote from '../../components/sections/bill-c96/FreeQuote/FreeQuote';
import HowWeHelp from '../../components/sections/bill-c96/HowWeHelp/HowWeHelp';
import Preparing from '../../components/sections/bill-c96/Preparing/Preparing';
import WhatIs from '../../components/sections/bill-c96/WhatIs/WhatIs';
import OurServices from '../../components/sections/creators/OurServices/OurServices';

function BillC96() {
  return (
    <>
      <Navbar />
      <Preparing />
      <WhatIs />
      <HowWeHelp />
      <OurServices />
      <FreeQuote />
      <Footer />
      <Blobs />
    </>
  );
}

export default BillC96;
