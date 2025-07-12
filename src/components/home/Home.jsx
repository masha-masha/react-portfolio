import "./Home.css";
import { mainImg } from "../../assets/images";

const Home = () => {
  return (
    <div className="home">
      <h2>Home</h2>
      <img src={mainImg} alt="main img" />
    </div>
  )
}

export default Home