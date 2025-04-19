import React from "react";

export default function Collections() {
  return (
    <div className="container3">
      <h1 className="collections-title">Collections</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
        <div className="col">
          <div className="card">
            <img
              src="/Images/collections/5.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Ring Almasa</h5>
              <p className="card-text">Ripple ornament forever drop costume</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/Images/collections/2.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title"> Abstract gold</h5>
              <p className="card-text">
                Abstract gold chain presentation on rocks
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
        <div className="col">
          <div className="card">
            <img
              src="/Images/collections/6.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Ring Almasa</h5>
              <p className="card-text">Ripple ornament forever drop costume</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/Images/collections/7.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Golden Ring</h5>
              <p className="card-text">
                Jewels sparkle in the golden rings lying on the leather
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
