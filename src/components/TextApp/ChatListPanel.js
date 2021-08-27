import React, { useEffect, useState } from 'react'
import '../../css/TextApp/ChatListPanel.css'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import ItemList from './ItemList';
import { getData } from '../../services/apiRequests';


function ChatListPanel({id, name, image}) {

    const history = useHistory();
    const [conversations, setConversation] = useState()
    const [renderChatList, setRenderChatList] = useState([])

    useEffect(() => {
        if(id){
            const conversationRequest = async () => {
                const response = await getData(`users/${id}/conversations`);
                setConversation(response.filter(c => {
                    let members = c.members;

                    return members.includes(id)
                }))
            }
            conversationRequest();
        }
    }, [id])

    useEffect(() => {
        if (conversations) {
            setRenderChatList(conversations.map(conversation => (
                <ItemList key={conversation._id} userId={id} id={conversation._id} chatPartner={conversation.info}/>
            )))
        }
    }, [conversations,id])

    return (
        <div className="ChatListPanel">
            <div className="ChatListHeader">
                <div className="ProfilePicture">
                    <img alt={name} src={image}/>
                </div>
                <div className="ProfieName">
                    <h4>{name}</h4>
                </div>
                <div className="ProfileIcons">
                    <FontAwesomeIcon icon={faCommentAlt} size="2x" className="NewMessage icon" onClick={() => {
                        history.push('/messenger/newchat')
                    }}/>
                    <FontAwesomeIcon icon={faSignOutAlt} size="2x" className="LogOut icon" onClick={() => {
                        history.push('/signin');
                    }}/>
                </div>
            </div>
            <div className="ChatList">
                {renderChatList}
            </div>
            <div className="LowBar"></div>
            </div>
    )
}

export default ChatListPanel
