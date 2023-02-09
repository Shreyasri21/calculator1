import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function SignUp() {
  const [nameerr, setNameerr] = useState(false);
  // const [validName, setValidName] = useState("");
  const [emailerr, setEmailerr] = useState(false);
  const [inputobj, setInputobj] = useState([]);
  const navigate = useNavigate();
  const [count, setcount] = useState(0);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputobj(inputobj.push(input));
    setcount(count + 1);
    if (emailerr === false && nameerr === false) {
      localStorage.setItem(count, JSON.stringify(inputobj));
      navigate("/");
    }
  };
  const nameregex = /^[a-zA-Z\s]+$/;
  const emailregex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

  const handling = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log("sssss", input);
  };

  useEffect(() => {
    if (input.name !== "") {
      if (nameregex.test(input.name)) {
        setNameerr(false);
      } else {
        setNameerr(true);
      }
    }
    if (input.email !== "") {
      if (emailregex.test(input.email)) {
        setEmailerr(false);
      } else {
        setEmailerr(true);
      }
    }
  }, [input.name, input.email]);

  return (
    <div className="calc-signup">
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <div className="inputs-sign">
            <label htmlFor="name">Enter Your Name:</label>
            <input
              type="text"
              name="name"
              onChange={handling}
              value={input.name}
              id="name"
            ></input>
            <br />
            {nameerr ? (
              <span style={{ color: "red", fontSize: "1rem" }}>
                Name is invalid
              </span>
            ) : (
              ""
            )}
            <br />

            <label htmlFor="email">Enter Your Email:</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handling}
              id="email"
            ></input>
            <br />
            {emailerr ? (
              <span style={{ color: "red", fontSize: "1rem" }}>
                E-mail is invalid
              </span>
            ) : (
              ""
            )}
            <br />

            <label htmlFor="password">Enter the Password:</label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              id="pass"
            ></input>
            <br />
          </div>
          <div className="button">
            <button type="submit" id="create">
              Create Account
            </button>
          </div>
        </form>
        <br />
        <p>
          Already have account? Click{" "}
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Here
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
