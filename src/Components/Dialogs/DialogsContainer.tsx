import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {StoreType} from "../../Redux/Redux-store";
import {addMessageAC, updateMessageAC} from "../../Redux/dialogs-reducer";

let mapStateToProps = (state: StoreType) => ({...state.dialogsPage})

const  DialogsContainer = connect(mapStateToProps, {addMessageAC, updateMessageAC})(Dialogs);

export default DialogsContainer;