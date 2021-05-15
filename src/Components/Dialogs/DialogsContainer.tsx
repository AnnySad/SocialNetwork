import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../Redux/Redux-store";
import {addMessageAC, DialogType, MessageType} from "../../Redux/dialogs-reducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose, Dispatch} from "redux";


type MSTPType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}

type MDTPType = {
    addMessageAC: (text: string) => void
}

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        isAuth: state.auth.isAuth,
        messages: state.dialogsPage.messages
    }
}




export default compose<React.ComponentType>(
    connect<MSTPType, MDTPType, {}, AppStateType>(mapStateToProps, {addMessageAC}),
    WithAuthRedirect)(Dialogs); //суть , возьми Dialogs, закинь в WithAuthRedirect, потом что получилось в connect(mapStateToProps,mapDispatchToProps),


