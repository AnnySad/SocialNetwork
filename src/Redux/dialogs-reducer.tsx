export type dialogsPageType = {
    dialogs: DialogsType
    messages: MessagesType
    textNewMessages: string;
}
export type DialogsType = Array<DialogType>
export type MessagesType = Array<MessageType>
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}

type addMessageActionType = { type: 'TEXT-NEW-MESSAGE'}
type updateMessageActionType = { type: 'SEND-NEW-MESSAGES', newText: string}
type AllActionsType = addMessageActionType | updateMessageActionType

let initialState = {
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Fredy'},
        {id: 3, name: 'Nika'},
        {id: 4, name: 'Sonia'},
        {id: 5, name: 'Ray'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    textNewMessages: ""
}

const dialogsReducer = (state: dialogsPageType = initialState, action: AllActionsType): dialogsPageType => {
let stateCopy

    switch (action.type) {

        case "TEXT-NEW-MESSAGE":

            let newMessage = {
                id: 6,
                message: state.textNewMessages
            }
            stateCopy = {...state,
                messages: [...state.messages, newMessage],
                textNewMessages: ""
            }
            return stateCopy;

        case "SEND-NEW-MESSAGES": return {...state, textNewMessages: action.newText}

        default: return state
    }
}

export const addMessageAC = (): addMessageActionType => ({type: "TEXT-NEW-MESSAGE"});
export const updateMessageAC = (newText: string): updateMessageActionType => ({type: "SEND-NEW-MESSAGES", newText});


export default dialogsReducer;