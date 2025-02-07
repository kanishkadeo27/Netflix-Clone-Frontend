import { useRef, useState } from "react";
import "./register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    const updatedUsername = usernameRef.current.value;
    const updatedPassword = passwordRef.current.value;
    setUsername(updatedUsername);
    setPassword(updatedPassword);
    try {
      await axios.post("auth/register", {
        email,
        username: updatedUsername,
        password: updatedPassword,
      });
      navigate("/login"); // Redirect after successful registration
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
            alt="netflix-logo"
            className="logo"
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited movies , tv shows and more....</h1>
        <h2>watch anywhere cancel anytime</h2>
        <p>
          ready to watch? enter your email to create or restart your membership
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              placeholder="email address"
              className="inputfield"
              ref={emailRef}
            />
            <button className="registerButton" onClick={handleStart}>
              Get Started!
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="text"
              placeholder="username"
              className="inputfield"
              ref={usernameRef}
            />
            <input
              type="password"
              placeholder="password"
              className="inputfield"
              ref={passwordRef}
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
