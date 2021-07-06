import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './chatlistbar.styles.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';

function ChatListBar() {
    return (
        <div class='chatlist'>
            {/* header */}
            <div className="header">
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <div className="links">
                    <IconButton>
                        <DonutLargeIcon style={{fontSize: 20, color:'grey'}}/>    
                    </IconButton> 
                    <IconButton>
                        <ChatIcon style={{fontSize: 20, color:'grey'}}/>
                    </IconButton>      
                    <IconButton>
                        <MoreVertIcon style={{fontSize: 20, color:'grey'}}/>
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
                <div className="chat-thumbnail">
                    <Avatar className='avatar'><PeopleRoundedIcon/></Avatar>
                    <div className="thumbnail-name">
                        <h3>Perkumpulan RT 04</h3>
                        <p>Pak budi: sangar</p>
                    </div>
                </div> 
            </div>

        </div>
    )
}

export default ChatListBar
