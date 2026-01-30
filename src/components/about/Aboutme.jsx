import { aboutImg } from "../../assets/images"
import SectionTitle from "../sectionTitle/SectionTitle";
import "./Aboutme.css"
import { FaDownload } from "react-icons/fa6";



const Aboutme = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle title="About me" subTitle="About me" />
        <div className="about-wrapper">
          <div className="about-img">
            <img src={aboutImg} alt="about" />
          </div>
          <div className="about-info">
            <div className="description">
              <h3>I'm Marlen</h3>
              <h4>A Lead <span>Fullstack Developer</span> based in <span>Alushta</span></h4>
              <p>I design and develop services for customers specilizing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio</p></div>
            <ul className="professional-list">
              <li className="list-item"><span className="number">5+</span><span className="text">Years of experience</span></li>
              <li className="list-item"><span className="number">3K+</span>
                <span className="text">Happy Customers</span></li>
              <li className="list-item">
                <span className="number">5+</span><span className="text">Success Projects</span>
              </li>
            </ul>
            <a href="" className="inner-info-link">Download
               <FaDownload />
            </a></div>
        </div>
      </div>
      </section>
  )
}

export default Aboutme