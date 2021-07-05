import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/login/Login";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {connect, Provider} from "react-redux";
import {AppStateType, store} from "./Redux/Redux-store";
import {compose} from "redux";
import {initializedAppTC} from "./Redux/app-reducer";
import {CircularProgress} from '@material-ui/core';


type MapDispatchToPropsType = {
    initializedApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

type AppPropsType = MapDispatchToPropsType & MapStateToPropsType


class App extends React.Component <AppPropsType, AppStateType> {
    componentDidMount() {
        this.props.initializedApp();

    }

    render() {
        if (!this.props.initialized) {
            return <CircularProgress disableShrink
                                     size={100}/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>


                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>


                    <Route path='/users' render={() =>
                        <UsersContainer/>}/>

                    <Route path='/login' render={() =>
                        <Login/>}/>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {initialized: state.app.initialized}
}

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedApp: initializedAppTC}))
(App)


const SamuraiJSApp = (props: any) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>

}

export default SamuraiJSApp

