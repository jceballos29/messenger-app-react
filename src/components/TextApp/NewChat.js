import React, { useEffect, useState } from "react";
import "../../css/TextApp/NewChat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../services/apiRequests";
import UserItem from "./UserItem";
import { useHistory } from "react-router-dom";

function NewChat({userId}) {
  const history = useHistory();
  const [partners, setPartners] = useState();

  useEffect(() => {
    const getUser = async () => {
      const response = await getData("users");
      setPartners(
        response.map((partner) => (
          <UserItem
            key={partner._id}
            userId={userId}
            partnerId={partner._id}
            partnerName={`${partner.firstName} ${partner.lastName}`}
            partnerImage={partner.photoUrl}
          />
        ))
      );
    };

    getUser();
  }, [userId]);

  return (
    <div className="NewChat">
      <div className="NewChatHeader">
        <div className="goChatList">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="3x"
            className="back"
            onClick={() => {
              history.push("/messenger");
            }}
          />
        </div>
        <div className="NewChatTitle">
          <h1>New Chat</h1>
        </div>
      </div>
      <div className="UserList">{partners}</div>
      <div className="NewChatLowBar"></div>
    </div>
  );
}

export default NewChat;
