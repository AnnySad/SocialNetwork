import React from "react";
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Textarea} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../validators/validators";
import {connect} from "react-redux";
import {LoginTC} from "../../Redux/auth-reducer";
import {Redirect} from "react-router";
import {AppStateType} from "../../Redux/Redux-store";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginPropsType = {
    LoginTC: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Textarea}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Textarea}
                       validate={[requiredField]} type={'password'}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}
                     /> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);


const Login = (props:LoginPropsType) => {
    const onSubmitT = (data: FormDataType) => {
        props.LoginTC(data.email, data.password, data.rememberMe)
    }
if(props.isAuth) {
    return <Redirect to={"/profile"}/>
}

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmitT}/>
        </div>
    )
}
const mapStateToProps = (state:AppStateType)  => {
    return {
        isAuth : state.auth.isAuth
    }
}

export default connect(mapStateToProps, {LoginTC}) (Login)