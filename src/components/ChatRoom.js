import { useContext, useRef } from "react";
import mainContext from "../context/mainContext";
function ChatRoom() {
  const message = useRef();

  const { users ,msg, setMsg } = useContext(mainContext);
  function create() {
    const msg = {
      msg: message.current.value,
    };

    setMsg([...msg, msg]);
  }
  return (
    <div>
      <div className="chat-div">
        <div className="chat-message">
          {/* {users.map(x => <img src={x.image} alt="alt")} */}
          {msg.map(x => <p>{x.msg}</p>)}
        </div>
      </div>
      <div className="chat">
        <input ref={message} type="text" placeholder="Message" />
        <button onclick={create}>Send</button>
      </div>
    </div>
  );
}

export default ChatRoom;
