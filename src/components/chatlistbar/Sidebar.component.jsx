import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './sidebar.styles.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import { useState } from 'react';
import database from '../../firebase';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SideBar() {

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
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
                        <div className="chat-thumbnail" key={group.id}>
                            <Avatar className='avatar'><PeopleRoundedIcon/></Avatar>
                            <div className="thumbnail-name">
                                <h3>{group.data.name}</h3>
                                <p>Pak budi: sangar</p>
                            </div>
                        </div> 
                    </Link>
                ))}
                
            </div>

        </div>
    )
}

export default SideBar;
