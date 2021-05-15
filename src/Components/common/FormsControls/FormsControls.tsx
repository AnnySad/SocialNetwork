import React from 'react';
import style from './FormsControls.module.css';


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
const FormControl = ({input, meta,child,element, ...props}: any) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span className={style.error}>some error</span>}
            </div>
        </div>)
}


export const Textarea = (props: any) => {
    const {input,meta,child,...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props: any) => {
    const {input,meta,child,...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}