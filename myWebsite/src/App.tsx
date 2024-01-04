import './App.css'
import "tailwindcss/tailwind.css"
import { HomeContainer } from './Containers/HomeContainer'
import AboutContainer from './Containers/AboutContainer'
import BlogContainer from './Containers/BlogContainer'
import ContactContainer from './Containers/ContactContainer'
import Footer from './Components/Footer'


function App() {


  return (
    <>
     <HomeContainer/>
     <AboutContainer/>
     <BlogContainer/>
     <ContactContainer/>
     <Footer/>
    </>
  )
}

export default App
