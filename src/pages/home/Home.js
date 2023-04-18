import CarList from "../../components/carList/CarList";
import Header from "../../components/header/Header";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <h1>Esto es Home</h1>
      <CarList />
    </>
  );
}

export default Home;