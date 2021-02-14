import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPageType} from "./../../Redux/State"

type DialogsType = {
    dialogsState: MessagesPageType
}
type AddDialogClickType={
    text: string
}
const Dialogs: React.FC<DialogsType> = (props) => {
    // из массива объектов dialogsData, преобразуем/мапим в массив элементов
    let dialogsElements = props.dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.dialogsState.messages.map(m => <Message message={m.message}/>)

    let newDialogElement = React.createRef<HTMLTextAreaElement>();


    let addDialogClick= ()=> {
        let text= newDialogElement.current?.value;
        alert (text)}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.massages}>
                {messageElements}
            </div>

            <div>
                <textarea ref={newDialogElement}></textarea>
            </div>
            <div>
                <button onClick={addDialogClick}>Add post</button>
            </div>

        </div>
    )
}

export default Dialogs;