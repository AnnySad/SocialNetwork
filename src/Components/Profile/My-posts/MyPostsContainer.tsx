import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/Redux-store";
import { addPostAC} from "../../../Redux/profile-reducer";
import {Dispatch} from "redux";

let mapStateToProps = (state: AppStateType) =>({
        ...state.profilePage
})

let mapDispatchToProps = (dispatch: Dispatch) => {
        return {
                addPost : (text:string) => {
                        dispatch(addPostAC(text))
                }
        }
}
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;