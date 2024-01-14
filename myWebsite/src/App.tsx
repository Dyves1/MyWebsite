import './App.css'
import "tailwindcss/tailwind.css"
import { HomeContainer } from './Containers/HomeContainer'
import AboutContainer from './Containers/AboutContainer'
import BlogContainer from './Containers/BlogContainer'
import ContactContainer from './Containers/ContactContainer'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import TestmonialsContainer from './Containers/TestmonialsContainer'


function App() {


  return (
    <>
    <Navbar/>
     <HomeContainer/>
     <AboutContainer/>
     <TestmonialsContainer/>
     <BlogContainer/>
     <ContactContainer/>
     <Footer/>
    </>
  )
}

export default App
