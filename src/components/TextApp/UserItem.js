import React from 'react'
import { useHistory } from 'react-router-dom'
import '../../css/TextApp/UserItem.css'

function UserItem({userId, partnerId, partnerImage, partnerName}) {

    const history = useHistory();

    return (
        <div className="UserItem" onClick={() => {
            //TODO: Enviar la petición para crear el chat
            let id = 123;
            history.push(`/messenger/chat/${id}`, {
                userId,
                partnerId,
                partnerImage,
                partnerName
            })
        }}>
            <div className="UserImage">
                <img alt="user" src={partnerImage}/>
            </div>
            <div className="UserName">
                {partnerName}
            </div>
        </div>
    )
}

export default UserItem
