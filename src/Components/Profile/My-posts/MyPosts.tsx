import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post1 from "./Post/Post1";
import {PostsTypeReduxStore} from "../../../Redux/Redux-store";

type MyPostsType = {
    posts: Array<PostsTypeReduxStore>;
    newPostText: string;
    updateNewPostText:(newText: string) => void;
    addPost:() => void;
}

const MyPosts = (props: MyPostsType) => {


    let postsElements = props.posts.map(p => <Post1 message={p.message} likesCount={p.likesCount}/>)


    let onAddPotsClick = () => {
        props.addPost()
    }

    let onPostChange = (e : ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget?.value;
        if (newText) {
            props.updateNewPostText(newText)
        }
    }

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}  value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPotsClick}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

}
export default MyPosts;