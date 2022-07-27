import { useRef, useContext } from "react";
import mainContext from "../context/mainContext";
import { useNavigate } from "react-router-dom";
function Register() {
  const unsername = useRef();
  const pass1 = useRef();
  const pass2 = useRef();
  const nav = useNavigate();
  const { users, setUsers } = useContext(mainContext);
  function register() {
    if (pass1.current.value === pass2.current.value) {
      const user = {
        name: unsername.current.value,
        password: pass1.current.value,
      };

      console.log(user);
      setUsers([...users, user]);
      nav("/profile");
    } else {
      alert("Password not match");
    }
  }
  return (
    <div className="register">
      <input ref={unsername} type="text" placeholder="Username" />
      <input ref={pass1} type="text" placeholder="pass1" />
      <input ref={pass2} type="text" placeholder="pass2" />
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
