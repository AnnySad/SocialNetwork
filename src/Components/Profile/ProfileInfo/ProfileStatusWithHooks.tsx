import React, {ChangeEvent, useEffect, useState} from 'react';

export type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

const ProfileStatusWithHooks = (props:ProfileStatusWithHooksPropsType) =>

{
    /*let stateWithSetState =useState(false)
    let editMode = stateWithSetState[0]
    let setEditMode = stateWithSetState [1]*/
let [editMode, setEditMode] = useState(false)
let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])


    const activateEditMode=()=>{
        setEditMode(true)
    }

    const deactivateEditMode = () => {
       setEditMode(false)
        props.updateStatus(status);
    }

   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }


        return <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "No status"} </span>
            </div>
            }
            {editMode &&
            <div>
                <input type="text"
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={status}
                       />
            </div>
            }
        </div>

}

export default ProfileStatusWithHooks;