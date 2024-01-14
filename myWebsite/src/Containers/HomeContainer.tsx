import { useEffect, useState } from "react";
import { home1, home2} from "../assets/IMAGES";
import '../Styles/home.scss'
import Button from "../Components/Button";

export const HomeContainer = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 2); 
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="home">
      <img className={activeSlide === 0 ? "img-slide active" : "img-slide"} src={home1} alt="#" />
      <img className={activeSlide === 1 ? "img-slide active" : "img-slide"} src={home2} alt="#" />


      <div className={activeSlide === 0 ? "content active" : "content"}>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">I'M <span className="text-blue-600 dark:text-blue-500">DIDIER YVES</span> </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ducimus sed obcaecati. Cupiditate numquam esse natus possimus maxime vitae exercitationem, illum facilis officiis, et dolore error sint? Voluptate, natus asperiores.</p>
        <div className="flex flex-wrap items-center">
<Button title="HIRE ME" color="#243b55" onclick={() => {}} />
 <Button title="EXPLORE MORE" color="white" fColor='black' onclick={() => {}} />
</div>
      </div>
      <div className={activeSlide === 1 ? "content active" : "content"}>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">I'M <span className="text-blue-600 dark:text-blue-500">A WEB DEVELOPER</span> </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ducimus sed obcaecati. Cupiditate numquam esse natus possimus maxime vitae exercitationem, illum facilis officiis, et dolore error sint? Voluptate, natus asperiores.</p>

        <div className="flex flex-wrap items-center">
<Button title="HIRE ME" color="#243b55" onclick={() => {}} />
 <Button title="EXPLORE MORE" color="white" fColor='black' onclick={() => {}} />
</div>
      </div>
    




      <div className="media-icon">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
      </div>
      <div className="slider-navigation">
        {[...Array(2)].map((_, index) => (
          <div key={index} className={activeSlide === index ? "nav-btn active" : "nav-btn"}></div>
        ))}
      </div>
    </section>
  );
}
