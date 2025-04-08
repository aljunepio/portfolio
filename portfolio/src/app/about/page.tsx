import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>About Me</h1>
      <p>Hello! This is a sample message to be displayed</p>
      <Footer />
    </div>
  );
};

export default About;
