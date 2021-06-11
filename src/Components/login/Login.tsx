import React from "react";
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Input, Textarea} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../validators/validators";
import {connect} from "react-redux";
import {LoginTC} from "../../Redux/auth-reducer";
import {Redirect} from "react-router";
import {AppStateType} from "../../Redux/Redux-store";
import style from "./../common/FormsControls/FormsControls.module.css"

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
                <Field placeholder={"Email"} name={"email"} component={Input}
                       validate={[requiredField]}/>
            </div>
            <div className={style.password}>
                <Field placeholder={"Password"} name={"password"} component={Input}
                       validate={[requiredField]} type={'password'}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}
                     /> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
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


/*
$('body').on('click', '.password-control', function(){
    if ($('#password-input').attr('type') == 'password'){
        $(this).addClass('view');
        $('#password-input').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('#password-input').attr('type', 'password');
    }
    return false;
});*/
