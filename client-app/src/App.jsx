
import Navigation from "./Components/Navbar/Navbar"
import Homepage from "./Components/Homepage/Homepage"
import Footer from "./Footer/Footer"
import ContactPage from "./Components/ContactPage/ContactPage"
import SingleProperty from "./Components/SingleProperty/SingleProperty"
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
            <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/SingleProperty" element={<SingleProperty />} />
          </Routes>
     
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
