import { ChangeEvent } from "react";

export type InputType<T> = {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange?: (e: T) => void
}


export type LoginInfoType = {
    username: string,
    email: string;
    password: string;
}

export type LoginInfoFieldType = keyof LoginInfoType


export type ResponseType = {
    ID: string;
}

export type RequestType = {
    ID: number
}