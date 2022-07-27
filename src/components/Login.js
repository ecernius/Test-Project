import { useContext, useRef } from "react";
import mainContext from "../context/mainContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { users, setCurrentUser } = useContext(mainContext);
  const nav = useNavigate();

  const nameRef = useRef();
  const passOneRef = useRef();

  function login() {
    const user = {
      username: nameRef.current.value,
      password: passOneRef.current.value,
    };

    const userAuth = users.find(
      (x) => x.username === user.username && x.password === user.password
    );

    if (userAuth) {
      setCurrentUser(userAuth);
      nav("/login");
    }
  }

  return (
    <div className="register">
      <input ref={nameRef} type="text" placeholder="Username" />
      <input ref={passOneRef} type="text" placeholder="Password" />

      <button onClick={login}>Log In</button>
    </div>
  );
}

export default Login;
