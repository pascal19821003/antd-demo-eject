import React, { ChangeEvent, FormEvent, useState } from 'react'
import { LoginInfoFieldType, LoginInfoType } from './model';

export default function useForm(initialValue: LoginInfoType) {

    let [loginInfo, setLoginInfo] = useState<LoginInfoType>(initialValue)

    const hangleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = event.target;
        console.log("----hangleChange----", { name, value });
        setLoginInfo({
            ...loginInfo,
            [name as LoginInfoFieldType]: value
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("----------handleSubmit-----------")
        setLoginInfo(initialValue)
    }

    return { loginInfo, handleSubmit, hangleChange }
}
