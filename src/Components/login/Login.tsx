import React from "react";
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Input, Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../validators/validators";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Textarea}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Textarea}
                       validate={[requiredField]}/>
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