import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from "../../../../validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";


export type PostFormDataType = {
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