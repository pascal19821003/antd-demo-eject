import React from 'react'
import { UserType } from './RenderApp'


export default function UserGrid({ data }: { data: UserType[] }) {
    return (
        <div>
            <ul>
                {
                    data && data.map(item => {
                        return (
                            <li>
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
