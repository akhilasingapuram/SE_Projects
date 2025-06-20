import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <Menu/>
            <Gallery/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;

