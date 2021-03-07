import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App= () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() =>
                    <DialogsContainer />}
                />


                <Route path='/profile' render={() =>
                    <Profile />}/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/setting' component={Setting}/>
            </div>
        </div>
    )
};


export default App;
