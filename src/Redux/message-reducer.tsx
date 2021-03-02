import {dialogsPageType} from "./Store";



export const addMessageActionCreator = (text: string) => {
    return ({
            type: 'TEXT_NEW_MESSAGE',
            text: text
    }
        )
}

export const updateMessageActionCreator = (newText : string | undefined) => {
    return ({
        type: 'SEND_NEW_MESSAGES',
        newText: newText
    });
}

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

    switch (action.type) {
        case "TEXT_NEW_MESSAGE":

            let newMessage = {
                id: 6,
                message: state.textNewMessages
            }
            stateCopy = {...state,
                messages: [...state.messages, newMessage],
                textNewMessages: ""
            }
            return stateCopy;

        case "SEND_NEW_MESSAGES": return {...state, textNewMessages: action.newText}

        default: return state
    }

}
export default messageReducer;