import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../Redux/dialogs-reducer";


type DialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    textNewMessages: string

    addMessageAC: () => void
    updateMessageAC: (newText: string) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {

    // из массива объектов dialogsData, преобразуем/мапим в массив элементов
    let dialogsElements = props.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.messages.map((m: any) => <Message message={m.message}/>)
    let newMessageBody = props.textNewMessages

    let newDialogElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
            let text = props.textNewMessages;
            // props.sendMessage(text)
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    {
        let body = newDialogElement.current?.value;
        // props.updateMessage("gfd")
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