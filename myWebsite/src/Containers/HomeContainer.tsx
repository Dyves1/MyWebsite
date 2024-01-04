import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar"
import { home1, home2, home3 } from "../assets/IMAGES";
import '../Styles/homecontainer.scss'

export const HomeContainer = () => {

  const [backgroundImage, setBackgroundImage] = useState(home1);

  useEffect(() => {
    const images = [ home1,home2, home3,home1]; 
    let currentIndex = 0;

    const intervalId = setInterval(() => {
     
      currentIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[currentIndex]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (

  <div className="home-container">
    <Navbar/>
  <img
    src={backgroundImage}
    alt="Background"
    className="background-image"
  />
  <h1  className="text-red text-4xl font-bold">Your Content Goes Here</h1>
</div>
  )
}
