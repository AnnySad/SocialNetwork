import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/Redux-store";
import {addPost, removePost, updateNewPostText} from "../../../Redux/profile-reducer";

let mapStateToProps = (state: AppStateType) =>({
        ...state.profilePage
})

export default connect(mapStateToProps,
    {addPost, removePost, updateNewPostText})(MyPosts);