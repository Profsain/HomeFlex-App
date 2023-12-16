
import Navigation from "./Components/Navbar/Navbar"
import Slider from "./Components/Slider/Slider"

import Newsletter from "./components/Newsletter"
import Header from "./components/Header"
import Body from "./components/Body"
import Welcome from "./components/Welcome"
import Features from "./components/Features"
import Footer from "./Footer/Footer"
import Cards from "./Testimonial/Cards"

function App() {
  return (
    <>

      <Navigation />
      <Slider />

     <Header />
    <Body />
    <Newsletter />
    <Welcome />
    <Features />
      <Cards/>
      <Footer/>

    </>
  )
}

export default App
