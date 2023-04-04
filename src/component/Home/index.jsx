import style from "./home.css"
import Header from "./Header";
import Homecentral from "./Homecental";
import FormEmail from "./FormEmail"


function Home() {
    return <div className="container">

        <Header />
        <Homecentral />
        <FormEmail />
    </div>;
}

export default Home;