import {
    DialogsType,
    MessagesType,
    sendMessagesActionCreatorDispatchType,
    updateNewMessagesBodyActionCreatorDispatchType, updateNewPostTextDispatchType
} from "./State";

const TEXT_NEW_MESSAGES: string = 'TEXT_NEW_MESSAGES'
const SEND_NEW_MESSAGES: string = 'SEND_NEW_MESSAGES'

type stateMessageReducerType = {  textNewMessages: string;
    messages: Array<MessagesType>;
    dialogs: DialogsType [] }

const messageReducer = (state: stateMessageReducerType, action: any) => {

    if (action.type === 'TEXT_NEW_MESSAGES') {
        state.textNewMessages = action.body;
    } else if (action.type === 'SEND_NEW_MESSAGES') {
        let body = state.textNewMessages;
        state.textNewMessages = " "; //зануляем
        state.messages.push({id: 6, message: body})
    }
    return state;
}
export default messageReducer;