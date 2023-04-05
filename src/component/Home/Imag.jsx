import style from "./home.css";
import foto from "../../assets/hero-desktop.jpg"

function Imag() {
    return <div className="container">
        
   <img src={foto} className="imag"/>
    </div>;
}

export default Imag;