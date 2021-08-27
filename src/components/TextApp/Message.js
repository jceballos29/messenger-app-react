import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Message({id, partnerId, message, userId}) {

    const [sent, setSent] = useState(true)

    useEffect(() => {
        if(userId === id){
            setSent(true)
        } else if (userId === partnerId){
            setSent(false)
        }
        
    }, [id, partnerId, message, userId])

    console.log(id, partnerId, userId)

    const renderMessage = () => {
        if(sent) {
            return (
                <>
                    <div className="sent">
                        <FontAwesomeIcon icon={faTimes} className="delete"/>
                        <span>{message}</span>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="received">
                        <span>{message}</span>
                        <FontAwesomeIcon icon={faTimes} className="delete"/>
                    </div>
                </>
            )
        }
    }

    return renderMessage();
}

export default Message
