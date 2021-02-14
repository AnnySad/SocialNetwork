import React from 'react';
import s from './MyPosts.module.css';
import Post1 from "./Post/Post1";
import {PostsType} from "../../../Redux/State";

type MyPostsType={
posts: Array<PostsType>;
addPost: () => void;
updateNewPostText: (NewText: string) => void
newPostText: string;
}

const MyPosts = (props:MyPostsType ) => {

    let postsElements =
        props.posts.map(p => <Post1 message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPotsClick = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text){
        props.updateNewPostText(text);}
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