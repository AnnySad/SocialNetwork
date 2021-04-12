import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {InitialAuthStateType, setUserData} from "../../Redux/auth-reducer";

type MDTP = {
    setUserData: (userId: number, email: string, login: string) => void
}

export type MSTP = {
    auth: InitialAuthStateType
}
type HeaderContainerPropsType = MDTP & MSTP

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then((response) => {
                if (response.data.resultCode === 0){
                    let {id, login, email} = response.data.data
                    this.props.setUserData(id, login, email)
                }
                }
            )

    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType): MSTP => ({
    auth: state.auth,
})
export default connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps, {setUserData})(HeaderContainer);