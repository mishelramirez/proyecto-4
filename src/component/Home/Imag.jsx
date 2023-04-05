import style from "./home.css";
import foto from "../../assets/hero-desktop.jpg"

function Imag() {
    return <div className="containerimg">
        
   <img src={foto} className="imag"/>
    </div>;
}

export default Imag;