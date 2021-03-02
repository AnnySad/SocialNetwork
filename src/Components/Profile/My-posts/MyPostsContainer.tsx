import React from 'react';
import MyPosts from "./MyPosts";
import {addPost, updateNewPostText} from "../../../Redux/profile-reducer";

type MyPostsContainerType = {
    store: any
}


const MyPostsContainer = (props: MyPostsContainerType) => {
    let state = props.store.getState().profilePage

    let addPotsClick = () => {
        props.store.dispatch(addPost())
    }

    let onPostChange = (newText: string) => {
        let action = updateNewPostText(newText);
        props.store.dispatch(action)
    }


    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPotsClick}
                    posts={state.posts}
                    newPostText={state.newPostText}
    />
}

export default MyPostsContainer;