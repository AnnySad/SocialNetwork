import React from "react";
import {maxLengthCreator, requiredField} from "../../../validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type MessageFormDataType = {
    newMessageBody: string
}
const maxLength50=maxLengthCreator(50)
const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageBody"
                       placeholder="Enter your massage"
                       component={Textarea}
                       validate={[requiredField,maxLength50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: "dialogAddMassageForm"})(AddMessageForm)
