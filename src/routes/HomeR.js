import '../App.css';
import Navbar from '../components/Navbar/navbar'
import Home from '../components/Home/Home';
import Snav from '../components/Home/Snav';
import Main from '../components/Main/Main';
import Footer from '../components/Slider/Footer/Footer';
import Card from '../components/Slider/Slider';



import img from '../Assets/VM.png';
import ScrollToTopButton from '../components/Uconstruction/ScrollToTopButton';
import Whatsapp from '../components/Uconstruction/Whatsapp';
import Hero from '../components/Hero/Hero';
import Dough from '../components/Hero/Dough';
// import logoImage from './Assets/ESSTEEhq.png';

function HomeR() {
  return (
   <>
     
      <Navbar />
      <Hero/>
      <Dough/>
      <Home />
      
      <Snav/>
      <Card
        imageUrl={img}
        title="Welcome to ESSTEE SINGAPORE "
        subtitle="Trading Company"
        description="Esstee Singapore stands as a prominent Trading company in the heart of Asia, recognized for its dynamic and diversified portfolio. Our vision at Esstee is to achieve unprecedented business growth, holding the most expansive range of products for our esteemed clients.

        Commencing our journey as Import/Export and Intending specialists, Esstee foresaw the burgeoning potential in the Steel Industry amid post-war developments. With a strategic vision, we forged partnerships with key players across the globe, positioning ourselves as a premier importer and distributor of top-notch and durable steel for diverse development projects. Today, we are a renowned steel supplier catering to a wide spectrum of requirements.
        
        At Esstee Singapore, we uphold the belief that our valued partnerships with both associates and clients, coupled with our unwavering commitment and unparalleled service levels, position us as a trustworthy business partner for every supplier and customer.
        
        "
      />
      <Main />
      
    
   
      <Footer />
      <ScrollToTopButton/>
      <Whatsapp/>
   </>  
  );
}

export default HomeR;
