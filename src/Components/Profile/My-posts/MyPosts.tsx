import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post1 from "./Post/Post1";
import {PostType} from "../../../Redux/profile-reducer";

type MyPostsType = {
    posts: Array<PostType>,
    newPostText: string

    addPost:() => void,
    removePost:(id: number) => void,
    updateNewPostText:(newText: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post1
                                                    id={p.id}
                                                    key={p.id}
                                                    message={p.message}
                                                    likesCount={p.likesCount}
                                                    // removePost={removePost}
                                             />)

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
                <textarea onChange={onPostChange} value={props.newPostText} />
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