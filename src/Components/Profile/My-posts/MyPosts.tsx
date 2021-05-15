import React from 'react';
import s from './MyPosts.module.css';
import Post1 from "./Post/Post1";
import {PostType} from "../../../Redux/profile-reducer";

import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from "../../../validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


type PostFormDataType = {
    newPostText: string
}


const maxLength10=maxLengthCreator(10)


const AddNewMyPostForm: React.FC<InjectedFormProps<PostFormDataType>> =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder="Enter your text"
                       validate={[requiredField,maxLength10]} />
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>)
}
export const AddNewPostReduxForm = reduxForm<PostFormDataType>({form: 'post'})(AddNewMyPostForm)

type MyPostsType = {
    posts: Array<PostType>,
    //newPostText: string

    addPost:(text: string) => void,
    /*  removePost:(id: number) => void,
      updateNewPostText:(newText: string) => void*/
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post1
                                                    id={p.id}
                                                    key={p.id}
                                                    message={p.message}
                                                    likesCount={p.likesCount}
                                             />)

    let onAddPotsClick = (values: PostFormDataType) => {
        props.addPost(values.newPostText)
    }


    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <AddNewPostReduxForm onSubmit={onAddPotsClick}/>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

}


export default MyPosts;