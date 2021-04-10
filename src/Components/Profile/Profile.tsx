import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My-posts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";

export type ProfileProps={
    profile:ProfileType | null
}
const Profile = (props:ProfileProps) => {

    return <div>
        <ProfileInfo profile={ props.profile}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;