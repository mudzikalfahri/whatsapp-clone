import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import './chatbody.styles.scss';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicRoundedIcon from '@material-ui/icons/MicRounded';
import { useParams } from 'react-router-dom';
import database from '../../firebase';
import { useEffect } from 'react';
import firebase from 'firebase';
import { useStateValue } from '../../stateprovider';
import ChatBubble from './chat-bubble.component';

function ChatBody() {
    const [input, setInput] = useState();
    const [messages, setMessages] = useState([]);
    const {groupId} = useParams();
    const [groupName, setGroupName] = useState("");
    const [{user}] = useStateValue();
    

    useEffect(() => {
        if(groupId) {
            database.collection('groups').doc(groupId)
            .onSnapshot(snapshot =>
            setGroupName(snapshot.data().name))

            database.collection('groups').doc(groupId)
            .collection('messages').orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
        }
    }, [groupId])

    const submitMessage = (e) => {
        e.preventDefault();
        database.collection('groups').doc(groupId).collection('messages').add({
            name: user.displayName,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    }

    return (
        <div className='chatbody'>
            <div className="header">
                <Avatar className='avatar'><PeopleRoundedIcon/></Avatar>
                <h3 className="group-name">{groupName}</h3>
                <div className="icons">
                    <IconButton><SearchRoundedIcon style={{fontSize: 20, color:'grey'}}/></IconButton>
                    <IconButton><MoreVertIcon style={{fontSize: 20, color:'grey'}}/></IconButton>
                </div>
            </div>

            <div className="chat-body">
                {messages.map(message => (
                    <ChatBubble key={message.id} message={message.message} id={message.id} name={message.name} displayName={user.displayName}/>
                ))}
                
            </div>

            <div className="chat-input">
                <div className="emot-icon">
                    <InsertEmoticonIcon style={{fontSize: 30, color:'#A6A6A6'}}/>
                    <AttachFileIcon style={{fontSize: 30, color:'#A6A6A6'}}/>
                </div>
                <form>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message'/>
                    <button type='submit' onClick={submitMessage}/>
                </form>
                <MicRoundedIcon style={{fontSize: 30, color:'#A6A6A6'}} className='mic'/>
            </div>
        </div>
    )
}

export default ChatBody
