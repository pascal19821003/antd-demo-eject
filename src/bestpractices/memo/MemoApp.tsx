import React, { useState } from 'react'
import UserProfileName from './UserProfileName';

export default function MemoApp() {

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(20);

    console.log("----------MemoApp--------");

    return (
        <div>
            name:<input value={name!} onChange={(e) => { setName(e.target.value) }} />
            <br />
            age:<input value={age!} onChange={(e) => { setAge(Number(e.target.value)) }} />
            <UserProfileName name={name} />
        </div>
    )
}
