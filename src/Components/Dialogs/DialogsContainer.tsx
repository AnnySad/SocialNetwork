import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPageType} from "../../Redux/Store"
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/message-reducer";
import StoreContext from "../../StoreContext";
import {store, StoreType} from "../../Redux/Redux-store";

type DialogsTypeCont = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsTypeCont> = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                let dialogsPage = store.getState().dialogsPage
                // let newDialogElement = React.createRef<HTMLTextAreaElement>();

                let onSendMessageClick = (text: string) => {

                    store.dispatch(addMessageActionCreator(text))
                }

                let UpdateMessage = (newText: string | undefined) => {
                    store.dispatch(updateMessageActionCreator(newText))
                }


                return <Dialogs dialogsPage={dialogsPage} updateMessage={UpdateMessage}
                                sendMessage={onSendMessageClick}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;