

import React, { useReducer, useState } from 'react';
import { todoReducer } from './todoReducer';

export type TodoType = {
    id: number,
    content: string;
    completed: boolean;
}

const initialTodos: TodoType[] = [
    {
        id: 1,
        content: "ccc1",
        completed: false,
    },
    {
        id: 2,
        content: "ccc2",
        completed: false,
    },
]

export default function TodoApp() {
    const [text, setText] = useState("")
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    const handleAdd = () => {
        dispatch({ type: "ADD_TODO", text: text })
        setText("")
    }

    const handleToggle = (id: number) => {
        dispatch({ type: "TOGGLE_TODO", id })
    }
    return (
        <div>

            <div>
                <label>content:<input value={text} onChange={(e) => setText(e.target.value)} /></label>
                <button onClick={handleAdd}>add</button>
            </div>
            <ul>
                {todos.map(todo => {
                    return (<li key={todo.id} style={{ color: todo.completed ? "grey" : undefined }}>{todo.content} <button onClick={() => { handleToggle(todo.id) }} >toggle</button></li>)
                })}
            </ul>
        </div>
    )
}
