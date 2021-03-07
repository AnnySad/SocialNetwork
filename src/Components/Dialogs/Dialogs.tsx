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
    updateMessageAC: (body: string) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {

    // из массива объектов dialogsData, преобразуем/мапим в массив элементов
    let dialogsElements = props.dialogs.map((d: any) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements = props.messages.map((m: any) => <Message message={m.message} key={m.id}/>)
    let newMessageBody = props.textNewMessages

    let newDialogElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
            //let text = props.textNewMessages;
            props.addMessageAC()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    {
        let body = newDialogElement.current?.value;
        if (body){
            props.updateMessageAC(body)
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