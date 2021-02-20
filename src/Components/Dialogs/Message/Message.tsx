import React from "react";
import s from './../Dialogs.module.css';

type messageType ={
    message: string
}
const Message = (props:messageType) => {
    return <div className={s.massage}> {props.message}</div>
}

export default Message;