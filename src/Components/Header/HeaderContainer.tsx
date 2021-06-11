import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {AuthStateType, logoutTC} from "../../Redux/auth-reducer";

export type MDTP = {
    logoutTC : () => void
}

export type MSTP = {
    auth: AuthStateType
}
export type HeaderContainerPropsType = MDTP & MSTP

class HeaderContainer extends React.Component<HeaderContainerPropsType> {


    render() {
        return <Header {...this.props}/>;
    }
}

export const mapStateToProps = (state: AppStateType): MSTP => ({
    auth: state.auth,
})
export default connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps, {logoutTC})(HeaderContainer);