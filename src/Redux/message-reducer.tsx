import {dialogsPageType} from "./State";

const TEXT_NEW_MESSAGES: string = 'TEXT_NEW_MESSAGES'
const SEND_NEW_MESSAGES: string = 'SEND_NEW_MESSAGES'

const messageReducer = (state: dialogsPageType, action: any) => {
let stateCopy
    debugger
    switch (action.type) {

        case "TEXT_NEW_MESSAGES":
            let newMessege = {
                id: 5,
                message: state.textNewMessages
            }
            stateCopy = {...state,
                messages: [...state.messages, newMessege],
                textNewMessages: ""
            }
            return stateCopy;

        case "SEND_NEW_MESSAGES": return {...state, textNewMessages: action.newText}

        default: return state
    }

}
export default messageReducer;