import React from "react";

const Carousel = () => {
  return (
    <section>
      {/* Modal */}
      <div className="modal fade" tabindex="-1" id="booking-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Book a tour</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="row g-2">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      <label for="email">Email address</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <select id="select" className="form-select">
                        <option>Choose destination</option>
                        <option>Lagos, Nigeria - $850</option>
                        <option>Accra, Ghana - $450</option>
                        <option>Lome, Togo - $370</option>
                      </select>
                      <label for="select">Pick a tour</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img
              src="https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="d-block w-100 c-img"
              alt="..."
            />
            <div className="carousel-caption mt-4 top-0">
              <p className="fs-3 mt-5 text-uppercase">
                Discover the hidden world
              </p>
              <h1 className="display-1 fw-bolder">TruTours</h1>
              <button
                type="button"
                className="btn btn-primary px-4 py-2 fs-5 mt-5"
                data-bs-toggle="modal"
                data-bs-target="#booking-modal"
              >
                Book a tour
              </button>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img
              src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100 c-img"
              alt="..."
            />
            <div className="carousel-caption mt-4 top-0">
              <p className="fs-3 mt-5 text-uppercase">
                Discover the hidden world
              </p>
              <h1 className="display-1 fw-bolder">TruTours</h1>
              <button
                type="button"
                className="btn btn-primary px-4 py-2 fs-5 mt-5"
                data-bs-toggle="modal"
                data-bs-target="#booking-modal"
              >
                Book a tour
              </button>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img
              src="https://images.pexels.com/photos/3224106/pexels-photo-3224106.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="d-block w-100 c-img"
              alt="..."
            />
            <div className="carousel-caption mt-4 top-0">
              <p className="fs-3 mt-5 text-uppercase">
                Discover the hidden world
              </p>
              <h1 className="display-1 fw-bolder">TruTours</h1>
              <button
                type="button"
                className="btn btn-primary px-4 py-2 fs-5 mt-5"
                data-bs-toggle="modal"
                data-bs-target="#booking-modal"
              >
                Book a tour
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
