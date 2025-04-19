import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="bout-sh">Shimaa Elramly Boutique</h1>
      <div className="container1">
        <div className="fs-3 p-5 text-center">
          <h1 className="fs-1">New Collections</h1>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="/Images/Home/20.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fs-2">Eternity Pendant Necklace</h5>
                <p className="card-text fs-4">LE 24,000.00</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="/Images/Home/12.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fs-2">Eternity Chain Bracelet</h5>
                <p className="card-text fs-4">LE 15,000.00</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="/Images/Home/17.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fs-2">Chain of Happiness</h5>
                <p className="card-text fs-4">LE 14,500.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-grid gap-1 col-2 mx-auto pt-5 w-50">
          <Link to="/Collections" className="btn btn-outline-warning fs-3">
            See More Collections
          </Link>
        </div>
      </div>
      {/* Carousel section */}

      <div className="container2">
        <div className="fs-3 pt-5 text-center">
          <h1 className="fs-1">GIFTS</h1>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide pt-5">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/Images/Home/19.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block fs-3">
                <h5 className="fs-1">Turath</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/Images/Home/5.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block fs-1">
                <h5 className="fs-1">Ghalia Bracelet</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/Images/Home/6.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block fs-1">
                <h5 className="fs-1">Ghalia Ring</h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="d-grid gap-1 col-2 mx-auto pt-5 w-50">
          <Link to="/Gifts" className="btn btn-outline-warning fs-3">
            See More Gifts
          </Link>
        </div>
      </div>
    </div>
  );
}
