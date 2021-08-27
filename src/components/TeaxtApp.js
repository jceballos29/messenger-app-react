import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import '../css/TeaxtApp.css'
import { getData } from '../services/apiRequests';
import Chat from './TextApp/Chat';
import ChatListPanel from './TextApp/ChatListPanel'
import InicialPage from './TextApp/InicialPage';





function TeaxtApp() {

    const [id, setId] = useState();
    const [username, setuseName] = useState();
    const [profilepicture, setProfilePicture] = useState();
    const {path} = useRouteMatch();

    useEffect(() => {
        //Se debe tomar de firebass
        setId('5fdd9238774450001755805d')
        // setId('5fde0b33f4491800179eec43')

    }, [])

    useEffect(() => {
        if(id){
            const userRequest = async () => {
                const response = await getData(`users/${id}`);
                const {firstName, lastName, photoUrl} = response;
                setuseName(`${firstName} ${lastName}`);
                setProfilePicture(photoUrl);
            }

            userRequest();
        }
    }, [id])


    return (
        <div className="TeaxtApp">
            <div className="TeaxtAppContainer">
                <div className="Dashboard">
                <Switch>
                        <Route path={path}>
                            <ChatListPanel id={id} name={username} image={profilepicture}/>
                        </Route>
                    </Switch>
                    
                </div>
                <div className="PanelContainer">
                    <Switch>
                        <Route path={`${path}/chat/:id`}>
                            <Chat />
                        </Route>
                        <Route path={path}>
                            <InicialPage />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default TeaxtApp
