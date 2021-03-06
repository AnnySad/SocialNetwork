import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My-posts/MyPostsContainer";
import {store, StoreType} from "../../Redux/Redux-store";

type ProfilePropsType ={
   store: StoreType
}


const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer  store={props.store}/>
    </div>
}
export default Profile;