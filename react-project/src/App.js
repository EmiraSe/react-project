import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Banner from './components/BANNER/banner';
import AboutUs from './components/About_Us/AboutUs';
import Safety from './components/Safety/Safety';
import Services from './components/Services/Services';
import Delivery from './components/Delivery/Delivery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
     <>
       <Header></Header>
       <Banner></Banner>
       <AboutUs></AboutUs>
       <Safety></Safety>
       <Services></Services>
       <Delivery></Delivery>
       <Contact></Contact>
       <Footer></Footer>
     </>
  );
}

export default App;
