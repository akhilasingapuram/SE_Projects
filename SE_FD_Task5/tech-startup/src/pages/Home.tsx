import About from '../components/About';
import AppointmentForm from '../components/AppointmentForm';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';

const Home=()=>{
return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Pricing/>
    <AppointmentForm/>
    <Footer/>
    </>
)
}
export default Home;