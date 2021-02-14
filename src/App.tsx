import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import {RoutStateType} from './Redux/State';


export type AppType = {
    state: RoutStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const App: React.FC<AppType> = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() =>
                    <Dialogs dialogsState={props.state.messagesPage}/>}/>
                <Route path='/profile' render={() =>
                    <Profile profileState={props.state.profilePage}
                             addPost={props.addPost}
                             updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/setting' component={Setting}/>
            </div>
        </div>
    )
};


export default App;
