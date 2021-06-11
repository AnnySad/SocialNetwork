import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {AppStateType} from "../../Redux/Redux-store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MSTP = {
    profile: ProfileType | null
    status: string
    authorisedUserId : any
    isAuth: boolean
}
type PathParamsType = {
    userId: string
}

type MDPT = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: number) => void
    updateStatus: (newStatus: string) => void
}

type OwnPropsType = MSTP & MDPT

type ProfileDetailParams = RouteComponentProps<PathParamsType>
type ProfileContainerPropsType = ProfileDetailParams & OwnPropsType



class ProfileContainer extends React.Component<ProfileContainerPropsType, AppStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            // '15350'
            userId = this.props.authorisedUserId;
            if(!userId) {
                this.props.history.push('login')
            }
        }
        this.props.getUserProfile(userId);//отправляем запрос на юзерский профайл

        this.props.getStatus(Number(userId))
    }

    render() {

        return <div>
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        </div>
    }

}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>
(connect<MSTP, MDPT,{},AppStateType>(mapStateToProps, {getUserProfile,getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect)(ProfileContainer)

