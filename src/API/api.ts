import axios from "axios";


//отдельный экземпляр axios
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { //передаем ключ
        "API-KEY": "1b870066-a689-4dee-839d-63ffa07d2f22"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data;
            })

    },
    getUserProfile(userId = '') {
        console.warn('Obsolete method.Please profileAPI object');
        return profileAPI.getUserProfile(userId);
    },

    deleteUnfollow(userId: number) {
        return instance.delete('follow/' + userId)
            .then(response => {
                return response.data;
            })
    },
    postFollow(userId: number) {
        return instance.post('follow/' + userId)
            .then(response => {
                return response.data;
            })
    }

}

export const profileAPI = {

    getUserProfile(userId = '15350') {
        return instance.get(`profile/` + userId)
            .then(response =>
                 response.data)
    },

    getStatus(userId:number){
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status:string){
        return instance.put(`profile/status` , {status: status})
            .then(response => response.data)
    }

}

export const authAPI = {
    me() {
      return instance.get(`auth/me`)
    }
}