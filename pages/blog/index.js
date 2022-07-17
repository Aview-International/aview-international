import Navbar from '../../components/navigation/Navbar/Navbar';
import Footer from '../../components/navigation/Footer/Footer';
import Blobs from '../../components/UI/Blobs/Blobs';
import BlogContent from '../../components/sections/blog/BlogContent/BlogContent';

function Blog() {
  return (
    <>
      <Navbar />
      <BlogContent />
      <Footer />
      <Blobs />
    </>
  );
}

export default Blog;
