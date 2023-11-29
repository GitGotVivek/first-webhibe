import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import validator from "validator";

const Login = () => {
  const navigae = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  // var cEmaivalidate() = email;
  // var cPass = password;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmail = emailRegex.test(email);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValidPassword = passwordRegex.test(password);
  const [formError, setFormError] = useState({});
  const [check, setCheck] = useState(false);

  // console.log("check",check)

  const validate = () => {
    let error = {};
    if (!email) {
      error.email = "Email is Required";
    } else if (!isEmail) {
      error.email = "Invalid email syntax";
    }

    if (!password) {
      error.password = "Password is Required";
    } else if (!isValidPassword) {
      error.password = "Invalid password syntax";
    }

    if (!cpassword) {
      error.cpassword = "C Password is Required";
    } else if (cpassword !== password) {
      error.cpassword = "Invalid C Password";
    }

    if (!check) {
      error.check = "Check it";
    }

    setFormError(error);
    return error;
  };

  const checkValidation = (e) => {
    e.preventDefault();
    // console.log(validate());
    // console.log("obbkey",Object.keys(validate()),validate())

    // if (!isEmail) {
    //   console.log("failed.");
    // } else if (!isValidPassword) {
    //   console.log("failed..");
    // } else if (cpassword !== password) {
    //   console.log("failed...");
    // } else if (!check) {
    //   console.log("Please check it");
    // } else {
    //   console.log("Success");
    // }.

    if(Object.keys(validate()).length===0){
      toast.success("Data submitted successfully :)")
      navigae("/home")
    }else{
      console.log("error")
    }
    // let obj={}
//     let obj={name:"vivek"}
//     if(obj){
// console.log("blank")
//     }else{
//       console.log("not blank")
//     }

  };

  // console.log(checque)
  return (
    <>
    <Toaster/>
      <h1>Login</h1>
      <div
        style={{ width: "300px", border: "1px solid #000", margin: "0 auto" }}
      >
        <form style={{ margin: "10px" }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            {/* <input
              type="text"
              id="userEmail"
              onChange={(e) => validateEmail(e)}
            ></input> */}
            {/* <br /> */}
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
            <br />
            <span style={{ fontWeight: "bold", color: "red" }}>
              {formError.email}
            </span>
            {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
            <span style={{ fontWeight: "bold", color: "red" }}>
              {formError.password}
            </span>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              C Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setCpassword(e.target.value)}
              // required
            />
            <span style={{ fontWeight: "bold", color: "red" }}>
              {formError.cpassword}
            </span>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={(e) => setCheck(e.target.checked)}
            />
            <label
              className="form-check-label"
              htmlFor="exampleCheck1"
              style={{ position: "relative", left: "-30%" }}
            >
              Check me out
            </label>

            <span
              style={{
                fontWeight: "bold",
                color: "red",
                position: "absolute",
                marginTop: "20px",
                left: "43%",
              }}
            >
              {formError.check}
            </span>
          </div>
          <button
            type="submit"
            onClick={(e) => checkValidation(e)}
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
