import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My-posts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";

export type ProfileProps={
    profile:ProfileType | null
    status: string
    updateStatus: (newStatus: string) => void
}
const Profile = (props:ProfileProps) => {

    return <div>
        <ProfileInfo profile={ props.profile} status={props.status}
                     updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;