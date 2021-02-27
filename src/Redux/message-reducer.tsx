import {dialogsPageType} from "./Store";

const TEXT_NEW_MESSAGES: string = 'TEXT_NEW_MESSAGES'
const SEND_NEW_MESSAGES: string = 'SEND_NEW_MESSAGES'

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Fredy'},
        {id: 3, name: 'Nika'},
        {id: 4, name: 'Sonia'},
        {id: 5, name: 'Ray'}
    ],
    textNewMessages: ""
}

const messageReducer = (state: dialogsPageType = initialState, action: any) => {
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