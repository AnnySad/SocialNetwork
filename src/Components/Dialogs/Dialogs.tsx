import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageAC, DialogType, MessageType} from "../../Redux/dialogs-reducer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";


type MessageFormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageBody" placeholder="Enter your massage" component="textarea"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: "dialogAddMassageForm"})(AddMessageForm)

export type DialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    //textNewMessages: string
    isAuth: boolean
    addMessageAC: (text: string) => void
    // newMessageBody: string
    //updateMessage: (body: string) => void
}


const Dialogs: React.FC<DialogsType> = (props) => {

    // из массива объектов dialogsData, преобразуем/мапим в массив элементов
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messageElements = props.messages.map(m => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (formData: MessageFormDataType) => {
        props.addMessageAC(formData.newMessageBody)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.massages}>
                <div>{messageElements}</div>
            </div>
            <div><AddMessageFormRedux onSubmit={addNewMessage}/></div>


        </div>
    )
}


export default Dialogs;