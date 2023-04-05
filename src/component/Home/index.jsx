import style from "./home.css"
import Header from "./Header";
import Homecentral from "./Homecental";
import FormEmail from "./FormEmail"
import Imag from "./Imag"

function Home() {
    return <div className="container">
        <div className="container1">
            <Header />
            <Homecentral />
            <FormEmail />
        </div>

        <div className="container2">
            <Imag />
        </div>
    </div>;
}

export default Home;