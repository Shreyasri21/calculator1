import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const [emailerr, setEmailerr] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const emailregex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
  const handleEmail = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (input.email !== "") {
      setTimeout(() => {
        if (emailregex.test(input.email)) {
          setEmailerr(false);
        } else {
          setEmailerr(true);
        }
      }, 100);
    }
  }, [input.email]);
  const handleLogin = (e) => {
    e.preventDefault();
    if (emailerr === false && input.email !== "" && input.password !== "") {
      const loggeduser = JSON.parse(localStorage.getItem("user"));
      if (
        input.email === loggeduser.email &&
        input.password === loggeduser.password
      ) {
        navigate("/calc");
      } else {
        alert("WRONG!! email or password");
      }
    }
  };
  return (
    <div className="calc-login">
      <div className="login">
        <form onSubmit={handleLogin}>
          <div className="inputs-log">
            <label htmlFor="email">Enter Your Email:</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleEmail}
              id="email-log"
            ></input>
            <br />
            {emailerr ? (
              <span style={{ color: "blue", fontSize: "1rem" }}>
                E-mail is invalid!!!
              </span>
            ) : (
              ""
            )}
            <br />
            <br />
            <label htmlFor="password">Enter the Password:</label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              id="pass-log"
            ></input>
          </div>

          <br />
          <div className="button1">
            <button
              style={{ width: "100%", borderRadius: "1rem" }}
              type="submit"
              id="login"
            >
              Login
            </button>
            <br />
          </div>
        </form>
        <br />
        <p>
          New User? Click{" "}
          <button
            onClick={() => {
              navigate("/signup");
            }}
            style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
          >
            Here
          </button>
        </p>
        <br />
      </div>
    </div>
  );
}

export default Login;
