import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPageType} from "../../Redux/Store"
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/message-reducer";

type DialogsTypeCont = {
    store: any
}

const DialogsContainer: React.FC<DialogsTypeCont> = (props) => {

    let dialogsPage = props.store.getState().dialogsPage
    // let newDialogElement = React.createRef<HTMLTextAreaElement>();

    let onSendMessageClick = (text: string) => {

       props.store.dispatch(addMessageActionCreator(text))
    }

    let UpdateMessage = (newText: string | undefined) => {
        props.store.dispatch(updateMessageActionCreator(newText))
    }

    return (
        <Dialogs dialogsPage={dialogsPage} updateMessage={UpdateMessage} sendMessage={onSendMessageClick}/>
    )
}

export default DialogsContainer;