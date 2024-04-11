import React from 'react'
import { TodoType } from './TodoApp';


export const TodoAction = {
    ADD_TODO: "ADD_TODO",
    TOGGLE_TODO: "TOGGLE_TODO",
}

export type ActionType = keyof (typeof TodoAction);


type AddActionType = {
    text: string;
    type: "ADD_TODO",
}

type ToggleActionType = {
    id: number;
    type: "TOGGLE_TODO",
}


export function todoReducer(state: TodoType[], action: AddActionType | ToggleActionType) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: Date.now(), content: action.text, completed: false }];

        case "TOGGLE_TODO":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            throw Error('unknown type')
    }
}
