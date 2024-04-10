import lokimag from "./1.jpg"
import kangimag from "./2.jpg"
import { Clock } from "./clock";
import './App.css';

function App() {

  const changeImage = (event) => {
    let imageData = event.target.id;
    let clickImage = document.getElementById("imagetag");
    if(imageData === "Loktak")
      clickImage.src = lokimag;
    else if (imageData === "Kangla")
      clickImage.src = kangimag;
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
        <div className="item-page"><p>Ima</p></div>
        <div className="item-page"><p>Iskon</p></div>
        <div className="item-page"><p>Mao</p></div>
        <div className="item-page"><p>War Memorial</p></div>
        <div className="item-page"><p>Museum</p></div>
        <div className="item-page"><p>Sanghai</p></div>
        <div className="item-page"><p>Dzoku</p></div>
      </div>
      <div className="preview-bg">
        <img src={lokimag} alt="loktak" id="imagetag"/>
      </div>
    </div>
  );
}

export default App;
