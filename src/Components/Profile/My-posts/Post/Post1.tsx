import React from 'react';
import s from './Post1.module.css';

type Post1PropsType ={
    id: number
    message: string
    likesCount: number

    // removePost:(id: number) => any
}

const Post1 = (props: Post1PropsType) => {


    return <div className={s.item}>

        <img src="https://cdn1.iconfinder.com/data/icons/ios-web-user-interface-hand-drawn-vol-1/512/338Big_emoji_face_happy_smile_smiley-512.png" alt =""/>
        {props.message}

        <div>
           <span>Like</span> {props.likesCount}
        </div>

        <div>
            {/*<button onClick={props.removePost(props.id)}>delete post</button>*/}
            <button >delete post</button>
            <button >{props.id}</button>
        </div>

    </div>
}
export default Post1;