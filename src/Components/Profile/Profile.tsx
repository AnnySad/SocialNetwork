import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./My-posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {actionType, ProfilePageType} from "../../Redux/State";

type ProfilePropsType ={
    profileState: ProfilePageType
    dispatch: (action: actionType) => void
}


const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profileState.posts}
                 newPostText={props.profileState.newPostText}
                 dispatch={props.dispatch}/>
    </div>
}
export default Profile;