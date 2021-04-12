import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter } from 'react-router-dom';
import {AppStateType} from "../../Redux/Redux-store";
import UserPNG from "../common/usersPNG/UserPNG";

type ProfileContainerPropsType = ProfileDetailParams & OwnPropsType

type MSTP={
    setUserProfile: (profile: ProfileType)=>void
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
        /*if (!userId){
            return <UserPNG/>;
        }*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ ` + userId)
            .then((response) => {
                    this.props.setUserProfile(response.data)
                }
            )
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
export default connect(mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent);