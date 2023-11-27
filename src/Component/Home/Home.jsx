import React from "react";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          border: "1px solid #000",
          width: "800px",
          margin: "20px auto",
        }}
      >
        <div className="row g-2 py-5">
          <div className="col-md">
            <label htmlFor="catagory">Catagory</label>
            <div className="form-floating">
              {/* <label for="floatingInputGrid">Email address</label> */}
              <select
                className="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
              >
                <option selected>Select Catagory</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="col-md">
            <label htmlFor="catagory">Sub Catagory</label>
            <div className="form-floating">
              {/* <label for="floatingSelectGrid">Works with selects</label> */}
              <select
                className="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
              >
                <option selected>Select Sub Catagory</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <label for="Business"  >
          Business
            </label>
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Select Sub Catagory</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            {/* <label for="floatingSelect">Works with selects</label> */}
          </div>

          <label for="Business"  >
          City
            </label>
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Select City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            {/* <label for="floatingSelect">Works with selects</label> */}
          </div>

          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Product Name
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Product Name"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Product Price
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Product Price"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
