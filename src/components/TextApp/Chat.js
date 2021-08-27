import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "../../css/TextApp/Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import sendButton from "../../img/send_button.svg";
import Message from "./Message";

function Chat() {
  const { state } = useLocation();
  const history = useHistory();

  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState();
  const [partnerId, setPartnerId] = useState();
  const [messagesList, setMessagesList] = useState([]);
  const [disabledButton, setDisabledButton] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, "send");
    setDisabledButton(true);
    reset({ message: "" });
  };
  //console.log(errors);

  const handleChange = (event) => {
    if (event.target.value <= 0) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  };

  useEffect(() => {
    setUserId(state.userId);
    setPartnerId(state.partnerId);
    setMessages(state.messages);
  }, [state]);

  useEffect(() => {
    if (messages) {
      setMessagesList(
        messages.map((message) => (
          <Message
            key={message._id}
            id={userId}
            partnerId={partnerId}
            message={message.message}
            userId={message.userId}
          />
        ))
      );
    }
  }, [messages]);

  return (
    <div className="Chat">
      <div className="ChatHeader">
        <div className="PartnerImage">
          <img alt="user" src={state.partnerImage} />
        </div>
        <div className="PartnerName">{state.partnerName}</div>
        <div className="CloseChat">
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            className="close"
            onClick={() => {
              history.push("/messenger");
            }}
          />
        </div>
      </div>
      <div className="ChatMessages">{messagesList}</div>
      <form onSubmit={handleSubmit(onSubmit)} className="ChatSend">
        <textarea
          {...register("message", {})}
          className="MessageField"
          onChange={handleChange}
        />
        <button className="Send" disabled={disabledButton}>
          <img alt="Send" src={sendButton} />
        </button>
      </form>
    </div>
  );
}

export default Chat;
