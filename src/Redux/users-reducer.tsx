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
            {id: 1, photoUrl: "https://klike.net/uploads/posts/2020-03/1584091199_1.jpg",
                followed: true, fullName: 'Andrey', status: "Lubaga", location: {city: "Minsk", country: "Belarus"}},
            {id: 2, photoUrl: "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-round-avatar-smiley-face-image_1245552.jpg",
                followed: false, fullName: 'Marina', status: "Friend", location: {city: "Minsk", country: "Belarus"}},
            {id: 3, photoUrl: "https://i.pinimg.com/564x/cf/c4/59/cfc45977aa7f22ef09793d946ce1d25f.jpg",
                followed: true, fullName: 'Oleg', status: "Samurai", location: {city: "Minsk", country: "Belarus"}},
            {id: 4, photoUrl: "https://st3.depositphotos.com/1004920/33738/v/600/depositphotos_337382290-stock-illustration-color-dog-head-miniature-pinscher.jpg",
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


