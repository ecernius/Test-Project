import { useContext, useRef } from "react";
import mainContext from "../context/mainContext";

function Profile(user) {
  const image = useRef();

  const { users, setUsers, defoultImg, setImg } = useContext(mainContext);
  function profileUpdte() {
    const user = {
      image: image.current.value,
    };
    console.log(user);
    setUsers([...users, user]);
  }
  return (
    <div className="profile">
      <img src={defoultImg} alt="img" />
      <h1>{user.name}</h1>
      <input type="text" placeholder="image url" />
      <button onClick={profileUpdte}>Change img</button>
    </div>
  );
}

export default Profile;
