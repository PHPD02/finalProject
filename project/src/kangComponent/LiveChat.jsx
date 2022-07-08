import React from 'react';
import io from "socket.io-client"
import { useState } from 'react';
import ChatRoom from './ChatRoom';

// const socket = io.connect("http://localhost:8001");

// function LiveChat(){
//     const [userName,setUsername] = useState("");
//     const [room,setRoom] = useState("");

//     const joinRoom =()=>{
//         if(userName !=="" && room !== ""){
//             socket.emit("加入房間",room);  //將room的data傳遞給server端(字要一樣)
//         }
//     }
//     return <div> 
//         <h3>Join A Chat</h3>
//           <input
//             type="text"
//             placeholder="John..."
//             onChange={(event) => {
//               setUsername(event.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Room ID..."
//             onChange={(event) => {
//               setRoom(event.target.value);
//             }}
//           />
//           <button onClick={joinRoom}>Join A Room</button>
//           <ChatRoom socket={socket} userName={userName} room={room}/>
//     </div>
// }
const socket = io.connect("http://localhost:8001");

function LiveChat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <ChatRoom socket={socket} username={username} room={room} />
      )}
    </div>
  );
}
export default LiveChat;


