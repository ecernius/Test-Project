import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import mainContext from "./context/mainContext";
import Register from "./components/Register";
import Toolbar from "./components/Toolbar";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import Profile from "./components/Profile";
function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [msg, setMsg] = useState([]);
  const [defoultImg, setImg] = useState(
    "https://publicdomainvectors.org/tn_img/abstract-user-flat-3.webp"
  );

  const values = {
    users,
    setUsers,
    currentUser,
    setCurrentUser,
    defoultImg,
    setImg,
    msg,
    setMsg,
  };
  return (
    <div className="App">
      <mainContext.Provider value={{ values }}>
        <BrowserRouter>
          <Toolbar />
          <Routes>
            <Route exact path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chatroom" element={<ChatRoom />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </mainContext.Provider>
    </div>
  );
}

export default App;
