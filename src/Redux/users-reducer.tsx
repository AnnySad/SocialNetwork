const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

export type UsersType =
    {
        name: string,
        id: number,
        uniqueUrlName: null,
        photos: {
            small: string | undefined,
            large: string | undefined
        },
        status: null,
        followed: boolean,

    }


/*  {
      id: number,
      photoUrl: string,
      followed: boolean,
      fullName: string,
      status: string,
      location: {
          city: string,
          country: string
      }
}*/
// {id: 1, photoUrl: "https://klike.net/uploads/posts/2020-03/1584091199_1.jpg",
//     followed: true, fullName: 'Andrey', status: "Lubaga", location: {city: "Minsk", country: "Belarus"}},
// {id: 2, photoUrl: "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-round-avatar-smiley-face-image_1245552.jpg",
//     followed: false, fullName: 'Marina', status: "Friend", location: {city: "Minsk", country: "Belarus"}},
// {id: 3, photoUrl: "https://i.pinimg.com/564x/cf/c4/59/cfc45977aa7f22ef09793d946ce1d25f.jpg",
//     followed: true, fullName: 'Oleg', status: "Samurai", location: {city: "Minsk", country: "Belarus"}},
// {id: 4, photoUrl: "https://st3.depositphotos.com/1004920/33738/v/600/depositphotos_337382290-stock-illustration-color-dog-head-miniature-pinscher.jpg",
//     followed: true, fullName: 'Ray', status: "Friend", location: {city: "Minsk", country: "Belarus"}}


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,//текущая страница
    isFetching: true
}

type InitialStateType = typeof initialState
const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {


    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map((u) => {
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
                users: state.users.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }


        default:
            return state
    }
}
// ACTIONS CREATORS

export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching:boolean) => ({type:TOGGLE_IS_FETCHING, isFetching} as const)

type ActionsType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>


export default usersReducer;



