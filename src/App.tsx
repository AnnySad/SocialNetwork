import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>

            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() =>
                    <DialogsContainer/>}
                />


                <Route path='/profile/:userId?' render={() =>
                    <ProfileContainer/>}/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/setting' component={Setting}/>


                <Route path='/users' render={() => <UsersContainer />}/>


            </div>
        </div>
    )
};


export default App;
