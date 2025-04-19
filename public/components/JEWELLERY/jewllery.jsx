import React from "react";

export default function Jewllery() {
  return (
    <div>
      <div className="container1">
        <h1 className="collections-title">Jewellery</h1>

        <div className="card mb-3">
          <img
            src="/Images/Jewllery/2.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Ear Rings</h5>
            <p className="card-text">
              Aesthetic golden earrings assortment flat lay
            </p>
            <p className="card-text">
              <small className="text-body-secondary">60000 LE </small>
            </p>
          </div>
        </div>

        <div className="fs-3 p-5 text-center"></div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="/Images/collections/4.jpg"
                className="card-img-top "
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
                src="/Images/Jewllery/5.jpg"
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
                src="/Images/collections/3.jpg"
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

        
      </div>
    </div>
  );
}
