import React from "react";

import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <section id="packages" className="pt-md-4">
      <h2 className="text-center my-5">Packages</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg mb-3">
            <div class="card">
              <img
                src="https://www.fluentu.com/blog/travel/wp-content/uploads/sites/37/2018/10/most-beautiful-places-in-eastern-europe-5-e1540761954229.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link
                  to="#"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#booking-modal"
                >
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg mb-3">
            <div class="card">
              <img
                src="https://www.fluentu.com/blog/travel/wp-content/uploads/sites/37/2018/10/most-beautiful-places-in-eastern-europe-e1540758978539.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link
                  to="#"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#booking-modal"
                >
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg mb-3">
            <div class="card">
              <img
                src="http://isssin.com/blog/wp-content/uploads/2019/09/painted-canyon.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link
                  to="#"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#booking-modal"
                >
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
