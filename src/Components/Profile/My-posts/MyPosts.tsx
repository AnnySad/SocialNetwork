import React from 'react';
import s from './MyPosts.module.css';
import Post1 from "./Post/Post1";
import {actionType, addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../Redux/State";

type MyPostsType = {
    posts: Array<PostsType>;
    newPostText: string;
    dispatch: (action: actionType) => void
}



const MyPosts = (props: MyPostsType) => {

    let postsElements =
        props.posts.map(p => <Post1 message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPotsClick = () => {
        // props.addPost()
        props.dispatch(addPostActionCreator ());
    }

    let onPostChange = () => {
        let newText = newPostElement.current?.value;
        if (newText) {
            //props.updateNewPostText(text);}
            props.dispatch(updateNewPostTextActionCreator(newText));
        }
    }

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPotsClick}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

}
export default MyPosts;