import "./Home.css";
import { mainImg } from "../../assets/images";

const Home = () => {
  return (
    <section className="home" id="home">
      <h2>Home</h2>
      <img src={mainImg} alt="main img" />
    </section>
  )
}

export default Home