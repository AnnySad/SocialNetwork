const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

export type UsersType={
        id: number,
        photoUrl: string,
        followed: boolean,
        fullName: string,
        status: string,
        location: {
            city: string,
            country: string
        }
}

let initialState = {
    users: [
            {id: 1, photoUrl: "'https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg'",
                followed: true, fullName: 'Andrey', status: "Lubaga", location: {city: "Minsk", country: "Belarus"}},
            {id: 2, photoUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Femotion-30%2F32%2Fsmile-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F5079652%2Favatar_emoji_emoticon_face_feeling_smile_smiley_icon&tbnid=Ou9rkJrTGZnTNM&vet=12ahUKEwi9ht2w7aDvAhUPxCoKHdncBSYQMygAegUIARCkAQ..i&docid=u3GlOitq7VPZcM&w=512&h=512&q=avatar%20smile&hl=ru&ved=2ahUKEwi9ht2w7aDvAhUPxCoKHdncBSYQMygAegUIARCkAQ",
                followed: false, fullName: 'Marina', status: "Friend", location: {city: "Minsk", country: "Belarus"}},
            {id: 3, photoUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Femotion-30%2F32%2Fsmile-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F5079652%2Favatar_emoji_emoticon_face_feeling_smile_smiley_icon&tbnid=Ou9rkJrTGZnTNM&vet=12ahUKEwi9ht2w7aDvAhUPxCoKHdncBSYQMygAegUIARCkAQ..i&docid=u3GlOitq7VPZcM&w=512&h=512&q=avatar%20smile&hl=ru&ved=2ahUKEwi9ht2w7aDvAhUPxCoKHdncBSYQMygAegUIARCkAQ",
                followed: true, fullName: 'Oleg', status: "Samurai", location: {city: "Minsk", country: "Belarus"}},
            {id: 4, photoUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Femotion-30%2F32%2Fsmile-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F5079652%2Favatar_emoji_emoticon_face_feeling_smile_smiley_icon&tbnid=Ou9rkJrTGZnTNM&vet=12ahUKEwi9ht2w7aDvAhUPxCoKHdncBSYQMygAegUIARCkAQ..i&docid=u3GlOitq7VPZcM&w=512&h=512&q=avatar%20smile&hl=ru&ved=2ahUKEwi9ht2w7aDvAhUPxCoKHdncBSYQMygAegUIARCkAQ",
                followed: true, fullName: 'Ray', status: "Friend", location: {city: "Minsk", country: "Belarus"}}
       ]
}
const usersReducer = (state: any = initialState, action: any): any => {


    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map((u: any) => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    }
                )
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }

        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }

        default:
            return state
    }
}
// ACTIONS CREATORS

export const followAC = (userId: number) => ({type: "FOLLOW", userId})
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId})
export const setUsersAC = (users: string) => ({type: "SET_USERS", users})


export default usersReducer;



