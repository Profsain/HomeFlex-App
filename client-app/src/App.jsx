import Newsletter from "./components/Newsletter"
import Form from "./components/Form"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Features from "./components/Features"
import Footer from "./Footer/Footer"
import Cards from "./Testimonial/Cards"

function App() {
  return (
    <>
    <Header />
    <Form />
    <Newsletter />
    <Welcome />
    <Features />
      <Cards/>
      <Footer/>
    </>
  )
}

export default App
