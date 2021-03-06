import React from 'react';
import MyPosts from "./MyPosts";
import {addPost, updateNewPostText} from "../../../Redux/profile-reducer";
import StoreContext from '../../../StoreContext';
import {StoreType} from "../../../Redux/Redux-store";


type MyPostsContainerType = {
    store: StoreType
}


const MyPostsContainer = (props: MyPostsContainerType) => {


    return (  //потребитель родительского контекста
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage
                    let addPotsClick = () => {
                        store.dispatch(addPost())
                    }

                    let onPostChange = (newText: string) => {
                        let action = updateNewPostText(newText);
                        store.dispatch(action)
                    }


                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPotsClick}
                                    posts={state.posts}
                                    newPostText={state.newPostText}/>

                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;