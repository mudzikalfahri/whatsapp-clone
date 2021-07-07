import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import database from '../../firebase';
import './sidechat.styles.scss';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';

function SideChat({name, id}){
    const [message, setMessage] = useState("");

    useEffect(() => {
        database.collection('groups').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(
        (snapshot) => setMessage(snapshot.docs.map(doc => doc.data())))
    }, [id])

    return (
        <div className="chat-thumbnail">
            <Avatar className='avatar'><PeopleRoundedIcon/></Avatar>
            <div className="thumbnail-name">
                <h3>{name}</h3>
                <p>{message[0]?.message}</p>
            </div>
        </div> 
    )
}

export default SideChat;