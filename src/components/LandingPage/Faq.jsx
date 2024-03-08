import React from "react";

const Faq = () => {
  return (
    <section id="faq" className="py-md-5">
      <h2 className="my-5 text-center">FAQ</h2>
      <div className="container">
        <div className="accordion w-75 mx-auto" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How long are the trips?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                sint neque aperiam accusantium rem quos soluta illo fuga impedit
                quod ullam suscipit asperiores consequuntur explicabo, officiis
                eos eveniet molestiae labore aliquid repellat? Tempore
                accusantium incidunt saepe minus sit placeat veritatis?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Is the flight included?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                sint neque aperiam accusantium rem quos soluta illo fuga impedit
                quod ullam suscipit asperiores consequuntur explicabo, officiis
                eos eveniet molestiae labore aliquid repellat? Tempore
                accusantium incidunt saepe minus sit placeat veritatis?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Can i cancel after booking?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                sint neque aperiam accusantium rem quos soluta illo fuga impedit
                quod ullam suscipit asperiores consequuntur explicabo, officiis
                eos eveniet molestiae labore aliquid repellat? Tempore
                accusantium incidunt saepe minus sit placeat veritatis?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
