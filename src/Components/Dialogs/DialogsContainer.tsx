import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../Redux/Redux-store";
import {addMessageAC, updateMessageAC} from "../../Redux/dialogs-reducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textNewMessages: state.dialogsPage.textNewMessages,
        isAuth: state.auth.isAuth,

    }
}


let mapDispatchToProps = (dispatch: any) => {
    return {
        updateMessage : (newText : string) => {
            let action = updateMessageAC(newText)
            dispatch(action)
        },
        addMessage : () => {
            let action = addMessageAC()
            dispatch(action)
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect)(Dialogs) ; //суть , возьми Dialogs, закинь в WithAuthRedirect, потом что получилось в connect(mapStateToProps,mapDispatchToProps),


