import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPageType} from "../../Redux/Store"

type DialogsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: any) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {
    /*let state = props.store.getState().messagesPage*/

    // из массива объектов dialogsData, преобразуем/мапим в массив элементов
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.dialogsPage.textNewMessages

    let newDialogElement = React.createRef<HTMLTextAreaElement>();

    let AddMessage = () => { props.dispatch( {type: "TEXT_NEW_MESSAGES", newText: newDialogElement.current?.value} )}

    let UpdateMessage = () => {props.dispatch( {type: "SEND_NEW_MESSAGES", newText: newDialogElement.current?.value} )}

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
                          onChange={UpdateMessage}   //что бы он каждый раз менялся
                          placeholder='Enter your massage'
                          ref={newDialogElement}> </textarea>
            </div>
            <div>
                <button onClick={AddMessage}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs;