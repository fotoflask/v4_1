import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

export default function Signin({ signin, setSignin }) {
  const [cookies] = useCookies([]);
  const [signup, setSignup] = useState(signin);

  let signinClass = signin ? "signin-container active" : "signin-container";
  const navigate = useNavigate();

  const [ values, setValues] = useState({ email: "", password: "" });
  const [signupValues, setsignupValues] = useState({ email: "", name: "" }); 

  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/register",
        {
          ...signupValues,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const toggleSignup = () => {
    setSignup(!signup);
  };

  const signinRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (signinRef.current && !signinRef.current.contains(event.target)) {
        // Clicked outside of the Signin component
        setSignin(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSignin]);

  const [signupPage, setSignupPage] = useState(0);

  return (
    <div className={signinClass} id="signin-container" ref={signinRef}>
      {signup === true && (
        <>
          <h2>Register Account</h2>
          <form onSubmit={handleSubmit2}>
            {signupPage === 0 && (
              <>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setsignupValues({
                        ...signupValues,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(e) =>
                      setsignupValues({
                        ...signupValues,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <button onClick={() => setSignupPage(1)}>Next</button>
              </>
            )}
            {signupPage === 1 && (
              <>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={(e) =>
                      setsignupValues({
                        ...signupValues,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={(e) =>
                      setsignupValues({
                        ...signupValues,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <button onClick={() => setSignupPage(0)}>Back</button>
                <button type="submit">Submit</button>
              </>
            )}          
            <span>
              Already have an account ?<button onClick={toggleSignup}> Signin</button>
            </span>  
          </form>
          
        </>
        
      )}
      {signup === false && (
        <>
          <h2>Login to your Account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            </div>
            <button type="submit">Submit</button>
            <span>
              Don't have an account ?<button onClick={toggleSignup}> Signup</button>
            </span>
          </form>
        </>
      )}
      {/* <h2>{signup ? "Register Account" : "Login to your Account"}</h2>
      <form onSubmit={signup ? handleSubmit2 : handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          {signup ? "Already have an account ?" : "Don't have an account ?"}
          <button onClick={toggleSignup}>
            {signup ? "Login" : "Signup"}
          </button>
        </span>
      </form> */}
    </div>
  );
}

// <button onClick={toggleSignup}>
