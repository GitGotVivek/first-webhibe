import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import "./Home.css"; 
import { useNavigate } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/Slice/FormSlice";
const Home = () => {
  
  
  const navigate = useNavigate();
  const [formError, setFormError] = useState({});
  const dispatch=useDispatch();

  const [formData, setFormData] = useState({
    catagory: "",
    sub_catagory: "",
    business: "",
    city: "",
    product_name: "",
    product_price: "",
    color: "",
    checkboxes: []
  });

  // ChatGPT Logic For Handling Multiple CheckBoxes Value
  const checkHandle =(e) =>{
    const { name, value, checked } = e.target;

    // if (name === 'checkboxes') {
    //   // Update the checkboxes array in formData based on the checkbox changes
    //   setFormData((checkFormData) => ({
    //     ...checkFormData,
    //     checkboxes: checked
    //     ?[...checkFormData.checkboxes, value]
    //     : checkFormData.checkboxes.filter((checkbox) => checkbox !== value)
    //   }));      
    // }  


    let arr=formData.checkboxes;
    if(checked){
      arr.push(value);
    }else{
      arr=arr.filter(item=>item!==value)
    }
    setFormData({...formData,checkboxes:arr})
    // console.log("valuecheckk",value,checked,arr)

}

  const handleValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const valiDate = () => {
    let error = {};

    if (formData.catagory === "") {
      error.catagory = "please select catagory";
    }

    if (formData.sub_catagory === "") {
      error.sub_catagory = "please select sub_catagory";
    }

    if (formData.city === "") {
      error.city = "Please select city";
    }

    if (!formData.business) {
      error.business = "Please enter catagory";
    }

    if (!formData.product_name) {
      error.product_name = "Please enter P name";
    }

    if (!formData.product_price) {
      error.product_price = "Please enter P price";
    }

    if (!formData.color) {
      error.color = "Please choose color";
    }

    if(formData.checkboxes.length === 0){
      error.checkboxes="Please check it (minimum-1)"
    }

    setFormError(error);
    return error;
  };

  const displayData = (e) => {
    e.preventDefault();
    console.log("formData=>", formData);
    // console.log(valiDate())
  
    if (Object.keys(valiDate()).length === 0) { 
      toast.success("Data submitted successfully :)");
      dispatch(addProduct(formData)); 
      navigate("/product")
    } else { 
      toast.error("error");
    }

    
  };

  return (
    <>
      {/* <Navbar /> */}
      <Toaster /> 
      <h1>Home</h1>
      <div
        className="form"
        style={{
          border: "1px solid #000",
          width: "800px",
          margin: "20px auto",
        }}
      >
        {/* FORM HEADING */}
        <div>
          <h2 className="formHead">Primary Form</h2>
        </div>

        <div className="row g-2 py-5 formInput">
          {/* CATAGORY */}
          <div className="col-md">
            <label htmlFor="catagory" className="catagoryLabel">
              Catagory
            </label>
            <span style={{ color: "#E50914", paddingLeft: "5px" }}>*</span>
            <div className="form-floating">
              <select
                value={formData?.catagory}
                name="catagory"
                onChange={handleValue}
                className="form-select form-control input"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
              >
                <option value="">Select Catagory</option>
                <option value="Management">Management</option>
                <option value="Technichle">Technichle</option>
                <option value="Accountant">Accountant</option>
              </select>
              <span style={{ fontWeight: "bold", color: "red" }}>
                {formError.catagory}
              </span>
            </div>
            {/* <span style={{ fontWeight: "bold", color: "red" }}>
              {formError.catagory}
            </span> */}
          </div>

          {/* SUB CATAGORY */}
          <div className="col-md">
            <label htmlFor="catagory" className="subCatagoryLabel">
              Sub Catagory
            </label>
            <span style={{ color: "#E50914", paddingLeft: "5px" }}>*</span>
            <div className="form-floating">
              <select
                value={formData?.sub_catagory}
                name="sub_catagory"
                onChange={handleValue}
                className="form-select form-control input"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
              >
                <option value="" selected>
                  Select Sub Catagory
                </option>
                <option value="HR">HR</option>
                <option value="App Developer">App Developer</option>
                <option value="Web App Developer">Web App Developer</option>
                <option value="Auditor">Auditor</option>
              </select>
              <span style={{ fontWeight: "bold", color: "red" }}>
                {formError.sub_catagory}
              </span>
            </div>
          </div>

          {/* BUSINESS */}
          <div>
            <label htmlFor="Business" className="bussinessLabel">
              Business
            </label>
            <span
              style={{ color: "#E50914", position: "relative", left: "-44%" }}
            >
              *
            </span>
          </div>
          <div>
            <input
              value={formData?.business}
              name="business"
              onChange={handleValue}
              type="text"
              className="form-control input"
              id="formGroupExampleInput"
              placeholder="Your business"
            />
            <span style={{ fontWeight: "bold", color: "red" }}>
              {formError.business}
            </span>
          </div>

          {/* CITY */}
          <div>
            <label htmlFor="Business" className="cityLabel">
              City
            </label>
            <span
              style={{ color: "#E50914", position: "relative", left: "-46%" }}
            >
              *
            </span>
          </div>
          <div className="form-floating">
            <select
              value={formData?.city}
              name="city"
              onChange={handleValue}
              className="form-select form-control input"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option value="" selected>
                Select City
              </option>
              <option value="Kolkata">Kolkata</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            <span style={{ fontWeight: "bold", color: "red" }}>
              {formError.city}
            </span>
          </div>

          {/* PRODUCT NAME */}
          <div className="mb-3">
            <div>
              <label
                htmlFor="formGroupExampleInput"
                className="form-label productNameLabel"
              >
                Product Name
              </label>
              <span
                style={{ color: "#E50914", position: "relative", left: "-41%" }}
              >
                *
              </span>
            </div>
            <input
              value={formData?.product_name}
              name="product_name"
              onChange={handleValue}
              type="text"
              className="form-control input"
              id="formGroupExampleInput"
              placeholder="Product Name"
            />
            <span style={{ fontWeight: "bold", color: "red" }}>
              {formError.product_name}
            </span>
          </div>

          {/*PRODUCT PRICE  */}
          <div className="mb-3">
            <div>
              <label
                htmlFor="formGroupExampleInput2"
                className="form-label productPriceLabel"
              >
                Product Price
              </label>
              <span
                style={{ color: "#E50914", position: "relative", left: "-41%" }}
              >
                *
              </span>
            </div>
            <input
              value={formData?.product_price}
              name="product_price"
              onChange={handleValue}
              type="text"
              className="form-control input"
              id="formGroupExampleInput2"
              placeholder="Product Price"
            />
            <span style={{ fontWeight: "bold", color: "red" }}>
              {formError.product_price}
            </span>
          </div>

          {/* RADIO */}
          <div className="radioLabel">
            <label htmlFor="radio" className="radioHeading">
              Choose Color
            </label>
            <div>
              <input
                value="red"
                checked={formData.color === "red"}
                onChange={handleValue}
                className="radioColor"
                type="radio"
                name="color"
              />{" "}
              red
              <input
                value="green"
                checked={formData.color === "green"}
                onChange={handleValue}
                className="input radioColor"
                name="color"
                type="radio"
              />{" "}
              green
              <input
                value="blue"
                checked={formData.color === "blue"}
                onChange={handleValue}
                className="input radioColor"
                name="color"
                type="radio"
              />{" "}
              blue
              <input
                value="black"
                checked={formData.color === "black"}
                onChange={handleValue}
                className="input radioColor"
                name="color"
                type="radio"
              />{" "}
              black
            </div>
            <span style={{ fontWeight: "bold", color: "red" }}>
              {formError.color}
            </span>
          </div>

          {/* CHECKBOX */}
          <div className="checkLabel">
            <label htmlFor="checkbox" className="radioHeading">
              Check box
            </label>
            <div>
              <input type="checkbox" value="checkbox1" name="checkboxes" onChange={checkHandle} className="checkColor" /> check1
              <input type="checkbox" value="checkbox2" name="checkboxes" onChange={checkHandle} className="check checkColor" /> check2
              <input type="checkbox" value="checkbox3" name="checkboxes" onChange={checkHandle} className="check checkColor" /> check3
              <input type="checkbox" value="checkbox4" name="checkboxes" onChange={checkHandle} className="check checkColor" /> check4
            </div>
            <span style={{ fontWeight: "bold", color: "red" }}>
              {formError.checkboxes}
            </span>
          </div>

          {/* BUTTON */}
          <div className="btn">
            <button onClick={displayData} className="button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
