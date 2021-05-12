export type dialogsPageType = {
    dialogs: DialogsType
    messages: MessagesType
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

type addMessageActionType = { type: 'TEXT-NEW-MESSAGE', newMessageBody: string}
type AllActionsType = addMessageActionType

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
    ]
}

const dialogsReducer = (state: dialogsPageType = initialState, action: AllActionsType): dialogsPageType => {


    switch (action.type) {

        case "TEXT-NEW-MESSAGE":

           /* let newMessage = {
                id: 6,
                message: action.newMessageBody
            }
            stateCopy = {...state,
                messages: [...state.messages, newMessage],
                textNewMessages: ""
            }
            return stateCopy;*/
            let body = action.newMessageBody
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }


        default: return state
    }
}

export const addMessageAC = (newMessageBody:string): addMessageActionType => ({type: "TEXT-NEW-MESSAGE",newMessageBody});


export default dialogsReducer;