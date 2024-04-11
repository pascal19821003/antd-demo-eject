
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { InputType, LoginInfoFieldType, LoginInfoType } from './model';
import useForm from './useForm';

export const initialValue: LoginInfoType = {
    username: "",
    email: "",
    password: ""
}


export default function AuthForm() {

    const { loginInfo, hangleChange, handleSubmit } = useForm(initialValue);

    const inputs: InputType<ChangeEvent<HTMLInputElement>>[] = [
        {
            label: 'User name',
            type: "text",
            name: "username",
            value: loginInfo.username,
            onChange: hangleChange,
        },
        {
            label: 'Email',
            type: "email",
            name: "email",
            value: loginInfo.email,
            onChange: hangleChange,
        },
        {
            label: 'Password',
            type: "password",
            name: "password",
            value: loginInfo.password,
            onChange: hangleChange,
        }
    ];


    return (
        <div style={{ width: 500 }}>
            <form style={{ display: "flex", flexDirection: "column", textAlign: "center" }} onSubmit={handleSubmit}>
                {
                    inputs.map((item, index) => {
                        let { label, name, value, type } = item;
                        return (
                            <label style={{ margin: '10px 10px' }} key={item.name}>
                                <span style={{ display: "inline-block", width: "20%", textAlign: "right", marginRight: 10 }}> {label}:</span>
                                <input type={type} name={name} value={value} onChange={hangleChange} />
                            </label>
                        )
                    })
                }
                <div style={{ textAlign: "center" }}>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}
