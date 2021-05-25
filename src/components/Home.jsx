import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
          <br></br>
            <h3 class="font-weight-light">Seven Rivers Networks</h3>
            <p>
              From Astoria to Pacific City. <br></br>
              <br></br>
              We meet all of your Computing, network security and business continuity needs;<br></br>
              Desktop support, back-ups and disaster planning, network security, diverse internet connectivity, point of sale systems, security and camera systems and backup power.
              <br></br>
              <br></br>
              Helping you plan for the technical challenges of life and business on the North Oregon Coast!
              <br></br>
              <br></br>
              We're local, so no travel time from the Portland Area.
              20+ years in technology, and 10+ years on the North Coast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;