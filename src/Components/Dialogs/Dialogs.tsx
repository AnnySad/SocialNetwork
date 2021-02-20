import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    actionType,
    MessagesPageType,
    sendMessagesActionCreator,
    updateNewMessagesBodyActionCreator
} from "../../Redux/State"

type DialogsType = {
    messagesPage: MessagesPageType
    dispatch: (action: actionType) => void
}
type AddDialogClickType = {
    text: string
}
const Dialogs: React.FC<DialogsType> = (props) => {
    /*let state = props.store.getState().messagesPage*/

    // из массива объектов dialogsData, преобразуем/мапим в массив элементов
    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.messagesPage.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.messagesPage.textNewMessages

    let newDialogElement = React.createRef<HTMLTextAreaElement>();
    let body = React.createRef<HTMLTextAreaElement>()

    /*let addDialogClick = () => {
        let text = newDialogElement.current?.value;
        alert(text)
    }*/

    let onSendMassageClick = () => {

        props.dispatch(sendMessagesActionCreator())
    }
    let onNewMessageChange = () => {

        if (body.current) {
            props.dispatch(updateNewMessagesBodyActionCreator(body.current.value))
        }
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.massages}>
                <div>{messageElements}</div>
            </div>

            <div>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}   //что бы он каждый раз менялся
                          placeholder='Enter your massage' ref={body}> </textarea>
            </div>
            <div>
                <button onClick={onSendMassageClick}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs;