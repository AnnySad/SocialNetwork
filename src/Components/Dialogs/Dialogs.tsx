import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPageType} from "../../Redux/Store"

type DialogsType = {
    dialogsPage: dialogsPageType
    updateMessage: (body: string | undefined) => void
    sendMessage: (text: string) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let state = props.dialogsPage;

    // из массива объектов dialogsData, преобразуем/мапим в массив элементов
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.textNewMessages

    let newDialogElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
            let text = props.dialogsPage.textNewMessages;
            props.sendMessage(text)
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    {
        let body = newDialogElement.current?.value;
        props.updateMessage(body)
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
                          placeholder='Enter your massage'
                          ref={newDialogElement}> </textarea>
            </div>
            <div>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs;