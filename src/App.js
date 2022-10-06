import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";
import { getLoginFailure, getLoginSuccess } from "./Redux/action";
import { useDispatch } from "react-redux";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectToWeather = () => {
    navigate("/weather");
  }

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      dispatch(getLoginSuccess({registerEmail}))
      redirectToWeather();
    } catch (error) {
      dispatch(getLoginFailure(error.message))
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      dispatch(getLoginSuccess({loginEmail}))
      redirectToWeather()
    } catch (error) {
      dispatch(getLoginFailure(error.message))
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          } } />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          } } />

        <button onClick={register}> Create User</button>
      </div>
      <div>
        <h3> Login </h3>
        <input
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          } } />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          } } />

        <button onClick={login}> Login</button>
      </div>
      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default App;