import axios from "axios";


//отдельный экземпляр axios
const instance = axios.create({
    withCredentials: true,
    baseURL :'https://social-network.samuraijs.com/api/1.0/',
    headers:{ //передаем ключ
        "API-KEY": "1b870066-a689-4dee-839d-63ffa07d2f22"
    }})

export const usersAPI = {
 getUsers(currentPage=1, pageSize=10)
{
  return   instance.get( `users?page=${currentPage}&count=${pageSize}`,)
      .then(response => {
        return response.data;
  })

},
getUserProfile(userId=''){
    return   instance.get( `profile/` + userId)
        .then(response => {
            return response.data;
        })
},

   deleteUnfollow(userId:number){
        return   instance.delete( 'follow/' + userId)
            .then(response => {
                return response.data;
            })
    },
    postFollow(userId:number){
        return   instance.post( 'follow/' + userId)
            .then(response => {
                return response.data;
            })
    }

}