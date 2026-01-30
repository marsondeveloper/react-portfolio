import "./Home.css"
import { SiFacebook, SiInstagram } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";
import { mainImg } from "../../assets/images";


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          <a href="">
            <SiFacebook/>
          </a>
          <a href="">
            <SiInstagram/>
          </a>
          <a href="">
            <FaSquareGithub/>
          </a>
        </div>
        <div className="home-info">
          <h1>Hi, I am Marlen</h1><h3>Fullstack Developer</h3>
          <p>I create stunning websites for your business, Highly experienced in web design and development</p>
          <a href="" className="home-info-link inner-info-link">Contact me
              <FaCircleArrowRight />
          </a></div>
        <div className="home-img"><img src={mainImg} alt="man" /></div></div>
      <a href="#about" className="scroll-down">Scroll down
        <FaArrowDownLong />
      </a>
    </section>
  )
}

export default Home