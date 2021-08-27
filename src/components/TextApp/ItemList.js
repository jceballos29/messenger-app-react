import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../css/TextApp/ItemList.css'
import defaultImage from '../../img/user.png'
import { getData } from '../../services/apiRequests'

function ItemList({userId, id, chatPartner}) {

    const history = useHistory()
    const [partnerId, setPartnerId] = useState()
    const [partnerName, setPartnerName] = useState()
    const [partnerImage, setPartnerImage] = useState(defaultImage)
    const [messages, setMessages] = useState([])
    const [lastMessage, setLastMessage] = useState({})

    const unread = () => {
        if(lastMessage){
            if(lastMessage.received===true){
                return <div className="unread"></div>
            }
        }
    }

    useEffect(() => {
        if(chatPartner){
            setPartnerId(chatPartner._id)
            setPartnerName(`${chatPartner.firstName} ${chatPartner.lastName}`)
            if(chatPartner.photoUrl){
                setPartnerImage(chatPartner.photoUrl)
            } else {
                setPartnerImage(defaultImage)
            }
        }
    }, [chatPartner])

    useEffect(() => {
        if(id){
            const messagesRequest = async () => {
                const response = await getData(`conversations/${id}/messages`)
                setMessages(response[0].messages)
            } 

            messagesRequest();
        }
    }, [id])

    useEffect(() => {
        if(messages){
            setLastMessage(messages[messages.length - 1])
        }
    }, [messages])

    const getLastMessageTime = () => {
        if(lastMessage){
            if(lastMessage.timestamp){
                let data = lastMessage.timestamp
                let timeIso8601 = data.slice(0,-1)
                let lastTime = new Date(Date.parse(timeIso8601))
                let hours = lastTime.getHours();
                let minutes = lastTime.getMinutes()<10 ? '0'+lastTime.getMinutes() : lastTime.getMinutes()
                return hours +':'+ minutes;
            }
        }
    }


    return (
        <div className="ItemList" onClick={() => {
            console.log('click');
            history.push(`/messenger/chat/${id}`, {
                userId,
                partnerId,
                partnerImage,
                partnerName,
                messages
            })

        }}>
            <div className="ChatImage">
                <img alt="user" src={partnerImage}/>
            </div>
            <div className="ChatInfo">
                <div className="ItemName">
                    {partnerName}
                </div>
                <div className="LastMessage">
                    {
                        lastMessage ? <p>{lastMessage.message}</p> : <p> </p>
                    }
                </div>
                <div className="TimeLastMessage">
                    {
                        getLastMessageTime()
                    }
                </div>
                
                <div className="ChatStatus">
                    {
                        unread()
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemList
