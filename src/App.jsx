import './App.css'
import Banner from './components/Banner'
import Benefits from './components/Benefits'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Quote from './components/Quote'
import Service from './components/Service'
import Testimonial1 from './components/Testimonial1'
import TipsForYou from './components/TipsForYou'



function App() {

  return (
    <>
      <NavBar/>
      <Banner/>
      <Service/>
      <Quote/>
      <Benefits/>
      <Testimonial1/>
      <TipsForYou/>
      <CTASection/>
      <Footer/>
    </>
  )
}

export default App
