import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./My-posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

type ProfilePropsType ={
    profileState: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profileState.posts}
                 newPostText={props.profileState.newPostText}
                 updateNewPostText={props.updateNewPostText}
                 addPost={props.addPost}/>
    </div>
}
export default Profile;