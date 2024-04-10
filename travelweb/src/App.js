import lokimage from "./img/1.jpg"
import kangimage from "./img/2.jpg"
import imaimage from "./img/3.jpg"
import iskonimage from "./img/4.jpg"
import maoimage from "./img/5.jpg"
import warimage from "./img/6.jpg"
import musuemimage from "./img/7.jpg"
import deerimage from "./img/8.jpg"
import dzokimag from "./img/9.jpg"
import { Clock } from "./clock";
import './App.css';
import { Form } from "./form"

function App() {

  const changeImage = (event) => {
    let imageData = event.target.id;
    let clickImage = document.getElementById("imagetag");
    if(imageData === "Loktak")
      clickImage.src = lokimage;
    else if (imageData === "Kangla")
      clickImage.src = kangimage;
    else if (imageData === "Ima")
      clickImage.src = imaimage;
    else if (imageData === "Iskon")
      clickImage.src = iskonimage;
    else if (imageData === "Mao")
      clickImage.src = maoimage;
    else if (imageData === "Museum")
      clickImage.src = musuemimage;
    else if (imageData === "War")
      clickImage.src = warimage;
    else if (imageData === "Deer")
      clickImage.src = deerimage;
    else if (imageData === "Dzoku")
      clickImage.src = dzokimag;
  }
  return (
    <div className="container-page">
      <nav className="nav-page">
        <div className="logo">
          <a href="https://iiitmanipur.ac.in">VisitManipur</a>
        </div>
        <div className="local-time">
          <p className="timetext">ON</p><p id="clock"><Clock/></p>
        </div>
      </nav>
      <footer>
        <p>Visit Manipur</p>
        <p>IdeaThon Initiative</p>
      </footer>
      <div className="items-page">
        <div className="item-page"><p id="Loktak" onMouseEnter={changeImage}>Loktak</p></div>
        <div className="item-page"><p id="Kangla" onMouseEnter={changeImage}>Kangla</p></div>
        <div className="item-page"><p id="Ima" onMouseEnter={changeImage}>Ima</p></div>
        <div className="item-page"><p id="Iskon" onMouseEnter={changeImage}>Iskon</p></div>
        <div className="item-page"><p id="Mao" onMouseEnter={changeImage}>Mao</p></div>
        <div className="item-page"><p id="War" onMouseEnter={changeImage}>War Memorial</p></div>
        <div className="item-page"><p id="Museum" onMouseEnter={changeImage}>Museum</p></div>
        <div className="item-page"><p id="Deer" onMouseEnter={changeImage}>Sanghai</p></div>
        <div className="item-page"><p id="Dzoku" onMouseEnter={changeImage}>Dzoku</p></div>
      </div>
      <div className="preview-bg">
        <img src={lokimage} alt="loktak" id="imagetag"/>
      </div>
      <Form/>
    </div>
  );
}

export default App;
