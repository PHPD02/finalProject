import React, { useState, useEffect,useRef } from "react";
import { db, auth } from "./firebase";
import SignOut from "./Signout";
import SendMessage from "./SendMessage";
import "../../css/firebase.css"

function FirebaseChat() {
    const scroll = useRef();
  const [Messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("Messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
    //                                 timestamp
  }, []);
  return (
    <div className="chatroom-wrapper">
      <SignOut />
      <div className="msgs">
      {Messages.map(({ id, text, photoURL, uid }) => (
        // 要到firebase rules記得把read write改為true
        <div>
          <div
            key={id}
            className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}
          >
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        </div>
      ))}
      </div>
      <SendMessage scroll={scroll}/>
      <div ref={scroll}></div>
      {/* 更新的文字讓他自動往下滑 */}
    </div>
  );
}

export default FirebaseChat;
