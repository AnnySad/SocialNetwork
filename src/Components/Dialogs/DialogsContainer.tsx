import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../Redux/Redux-store";
import {addMessageAC, updateMessageAC} from "../../Redux/dialogs-reducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
/*

let mapStateToProps = (state: AppStateType) => ({...state.dialogsPage})

const  DialogsContainer = connect(mapStateToProps, {addMessageAC, updateMessageAC})(Dialogs);

export default DialogsContainer;*/

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


let AuthRedirectComponent = WithAuthRedirect(Dialogs)



    /*(props:any) => {
    if(!props.isAuth) return <Redirect to={"/Login"}/>
    return <Dialogs {...props}/>
}*/
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

