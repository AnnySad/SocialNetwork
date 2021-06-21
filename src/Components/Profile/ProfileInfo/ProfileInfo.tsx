import React from 'react';
import s from './ProfileInfo.module.css';
import Tenor from "../../common/tenor/tenor";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: (newStatus: string) => void
}
const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile){
        return <Tenor/>
    }
    return <div >
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <ProfileStatusWithHooks  status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}
export default ProfileInfo;