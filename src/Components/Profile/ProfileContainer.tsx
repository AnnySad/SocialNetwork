import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {AppStateType} from "../../Redux/Redux-store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = ProfileDetailParams & OwnPropsType

type MSTP = {
    profile: ProfileType | null
    status: string
}
type PathParamsType = {
    userId: string
}

type MDPT = {
    getUserProfile: (userId: string) => void
    // profile: ProfileType | null
    getStatus: (userId: number) => void
    updateStatus: (newStatus: string) => void
}

type OwnPropsType = MSTP & MDPT

type ProfileDetailParams = RouteComponentProps<PathParamsType>



class ProfileContainer extends React.Component<ProfileContainerPropsType, AppStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '15350';
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
    status: state.profilePage.status
})

export default compose<React.ComponentType>
(connect<MSTP, MDPT,{},AppStateType>(mapStateToProps, {getUserProfile,getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect)(ProfileContainer)

