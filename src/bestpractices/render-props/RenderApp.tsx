import React from 'react'
import UserFetcher from './UserFetcher'
import UserGrid from './UserGrid';


export type UserType = {
    id: number;
    name: string;
    password: string;
    profession: string;
}

export default function RenderApp() {
    return (
        <div>
            <UserFetcher<UserType> url={"/api/listUsers"} render={(data) =><UserGrid data={data}/>} />
        </div>
    )
}
