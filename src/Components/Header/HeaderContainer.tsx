import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {getAuthUserData, InitialAuthStateType} from "../../Redux/auth-reducer";

type MDTP = {
    getAuthUserData: () => void
}

export type MSTP = {
    auth: InitialAuthStateType
}
type HeaderContainerPropsType = MDTP & MSTP

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();

    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType): MSTP => ({
    auth: state.auth,
})
export default connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps, {getAuthUserData})(HeaderContainer);