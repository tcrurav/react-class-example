import CarService from "../../services/car.service";
import "./CarList.css";

function CarList() {
  const getCars = () => {
    const allCars = CarService.getCars();

    return (
      allCars.map(c => {
        return (
          <div className="car-list-item">
            <div className="car-list-img">
              <img src={`/assets/img/${c.img}`} alt="car" />
            </div>
            <p>{c.brand} - {c.model} - {c.price}</p>
          </div>
        );
      })
    );
  }

  return (
    <>
      <div className="main-container">
        <div className="car-list-container">
          {getCars()}
        </div>
        <div className="right-text">
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
        </div>
      </div>
    </>
  );
}

export default CarList;