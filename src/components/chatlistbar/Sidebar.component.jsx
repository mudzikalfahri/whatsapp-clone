import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './sidebar.styles.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { useState } from 'react';
import database from '../../firebase';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../stateprovider';
import SideChat from './sidechat.component';

function SideBar() {
    const [{ user }] = useStateValue();
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        database.collection('groups').onSnapshot((snapshot) => (
            setGroups(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    }, [])


    return (
        <div className='sidebar'>
            {/* header */}
            <div className="header">
                <Avatar alt="Remy Sharp" src={user.photoURL} />
                <div className="links">
                    <IconButton>
                        <DonutLargeIcon style={{fontSize: 20, color:'#A6A6A6'}}/>    
                    </IconButton> 
                    <IconButton>
                        <ChatIcon style={{fontSize: 20, color:'#A6A6A6'}}/>
                    </IconButton>      
                    <IconButton>
                        <MoreVertIcon style={{fontSize: 20, color:'#A6A6A6'}}/>
                    </IconButton>    
                </div>
            </div>


            {/* Search */}
            <div className="search">
                <div className="search-box">
                    <SearchRoundedIcon className='search-icon'/>
                    <input type="text" placeholder='Search or start new chat'/>
                </div>
            </div>      


            {/* list-body */}
            <div className="list">
                {groups.map((group) => (
                    <Link to={`/groups/${group.id}`}>
                        <SideChat key={group.id} name={group.data.name} id={group.id}/>    
                    </Link>
                ))}
                
            </div>

        </div>
    )
}

export default SideBar;
