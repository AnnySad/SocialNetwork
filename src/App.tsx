import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {AppStateType, store} from "./Redux/Redux-store";
import {compose} from "redux";
import {initializedAppTC} from "./Redux/app-reducer";
import {CircularProgress} from '@material-ui/core';
import {WithSuspense} from "./hoc/WithSuspense";


const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import( "./Components/Profile/ProfileContainer"));
const Login = React.lazy(() => import("./Components/login/Login"));
const News = React.lazy(() => import("./Components/News/News"));
const Music = React.lazy(() => import("./Components/Music/Music"));
const Setting = React.lazy(() => import("./Components/Setting/Setting"));

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

                    <Route path={'/profile/:userId?'} render={WithSuspense(ProfileContainer)}/>
                    <Route path={'/dialogs'} render={WithSuspense(DialogsContainer)}/>
                    <Route path={'/news'} render={WithSuspense(News)}/>
                    <Route path={'/music'} render={WithSuspense(Music)}/>
                    <Route path={'/setting'} render={WithSuspense(Setting)}/>
                    <Route path={'/users'} render={WithSuspense(UsersContainer)}/>
                    <Route path={'/login'} render={WithSuspense(Login)}/>

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
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>

}

export default SamuraiJSApp

