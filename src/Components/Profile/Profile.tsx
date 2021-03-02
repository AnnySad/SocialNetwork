import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My-posts/MyPostsContainer";

type ProfilePropsType ={
   store: any
}


const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}

        />
    </div>
}
export default Profile;