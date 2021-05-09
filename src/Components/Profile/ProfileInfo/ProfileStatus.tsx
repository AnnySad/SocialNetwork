import React, {ChangeEvent} from 'react';

export type ProfileStatusPropsType = {
    status: string
    updateStatus:( newStatus: string)=> void
}

class ProfileStatus extends React.Component <ProfileStatusPropsType> {

    state = {
        editMode: false,
      status: this.props.status
    }

    activateEditMode=() =>{
        this.setState({
            editMode: !this.state.editMode
        })
    }

    deactivateEditMode=()=> {
        this.setState({
            editMode: !this.state.editMode
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>)=> {
        this.setState({
            status: e.currentTarget.value
        });
    }


    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {

            this.setState({
                    status: this.props.status
                }
            )
        }
    }

    render() {
        return <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange}
                       type="text"
                       autoFocus={true}
                       onBlur={this.deactivateEditMode}
                       value={this.state.status}/>
            </div>
            }
        </div>
    }
}

export default ProfileStatus;