import React from "react";
import {reduxForm, Field, InjectedFormProps} from 'redux-form';


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"textarea"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"textarea"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);


const Login = () => {
    const onSubmitT = (data: FormDataType) => {
        console.log(data)
    }


    return (
        <div>
            <LoginReduxForm onSubmit={onSubmitT}/>
        </div>
    )
}
export default Login