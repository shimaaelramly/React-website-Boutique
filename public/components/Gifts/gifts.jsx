import React from "react";

export default function Gifts() {
  return (
    <div>
      <div className="container1">
        <h1 className="collections-title">Gifts</h1>

        <div className="card mb-3">
          <img src="/Images/Gifts/4.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Gifts</h5>
            <p className="card-text">
              Engoy With our Perfect Gifty For any Celebration{" "}
            </p>
            <p className="card-text">
              <small className="text-body-secondary"> </small>
            </p>
          </div>
        </div>

        <div className="fs-3 p-5 text-center"></div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <img
                src="/Images/Gifts/1.jpg"
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
                src="/Images/Gifts/2.jpg"
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
                src="/Images/Gifts/3.jpg"
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
