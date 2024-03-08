import React from "react";

import {
  AirplaneFill,
  PatchCheckFill,
  WalletFill,
} from "react-bootstrap-icons";

const Overview = () => {
  return (
    <section className="overview">
      <div className="container h-100 d-flex align-items-center text-center fs-4">
        <div className="row w-100">
          <div className="col-xl">
            <AirplaneFill className="me-2" /> 3 amazing Destinations
          </div>

          <div className="col-xl">
            <WalletFill className="me-2" /> Only pay 5% up front
          </div>

          <div className="col-xl">
            <PatchCheckFill className="me-2" /> 1000's of customers
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
