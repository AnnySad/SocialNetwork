import React from 'react';
import style from './FormsControls.module.css';
import {Field} from "redux-form";
import {requiredField} from "../../../validators/validators";


type TextareaPropsType = HTMLFormElement & { placeholder: string }


/*

export const Textarea = (props:any) => {
    const {input,meta,child,...restProps} = props
    const hasError = meta.touched && meta.error
    return(
        <div className={style.formControl  + " " + (hasError ? style.error: "")}>
            <div>
                <textarea {...props.input} {...props}/>
            </div>
            {hasError &&<span>{meta.error}</span>}
        </div>
    )
}

export const Input = (props:any) => {
    const {input,meta,child,...restProps} = props
    const hasError = meta.touched && meta.error
    return(
        <div className={style.formControl  + " " + (hasError ? style.error: "")}>
            <div>
                <textarea {...props.input} {...props}/>
            </div>
            {hasError &&<span>{meta.error}</span>}
        </div>
    )
}*/
const FormControl = ({input, meta:{touched, error}, children, element}: any) => {
    const hasError = touched && error

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span className={style.error}>{error}</span>}
            </div>
        </div>)
}


export const Textarea = (props: TextareaPropsType) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}

export const createField = (placeholder: any, name: any, validators: any, component: any, props:any ={}, text:string = "") =>
    <div> <Field placeholder={placeholder}
                 name={name} component={validators}
                 validate={component} {...props}/>{text}</div>