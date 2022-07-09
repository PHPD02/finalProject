import React, { useState } from 'react';
import {db , auth} from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {Form,Button} from "react-bootstrap"
import '../../css/firebase.css';


function SendMessage({scroll}) {
    const [msg ,setMsg] = useState('');
    async function sendMessage(e){
        e.preventDefault();
        const {uid,photoURL} = auth.currentUser;
        await db.collection('Messages').add({
            // 從Messages資料庫取值
        text:msg,
        photoURL,
        uid,
        createdAt:firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')  //送出後清空
        scroll.current.scrollIntoView({behavior:'smooth'})
    }
    return ( 
        <div >
            <Form onSubmit={sendMessage}>
                <div className='sendMessage-wrapper'>
                <input type="text" 
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
                placeholder='請輸入訊息'/>
                <button type='submit'>發送</button>
                </div>
            </Form>
        </div>
     );
}

export default SendMessage;