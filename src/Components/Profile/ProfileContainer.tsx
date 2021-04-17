import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter } from 'react-router-dom';
import {AppStateType} from "../../Redux/Redux-store";

type ProfileContainerPropsType = ProfileDetailParams & OwnPropsType

type MSTP={
    getUserProfile: (userId:string)=>void
}
type PathParamsType = {
    userId: string
}

type MDPT = {
    profile: ProfileType | null
}

type OwnPropsType = MSTP & MDPT
type ProfileDetailParams = RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType, AppStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId='15350';
        }
        this.props.getUserProfile(userId);//отправляем запрос на юзерский профайл
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}
let mapStateToProps = (state:AppStateType) => ({
profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);