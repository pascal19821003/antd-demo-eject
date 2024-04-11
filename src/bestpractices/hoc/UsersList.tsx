import React from 'react'
import { WrappedComponentType } from './withDataFetching'

export type UserType = {
  name: string,
  password: string;
  profession: string;
  id: number;
}

export default function UsersList({ data, error, isLoading }: WrappedComponentType<UserType[]>) {

  console.log("data", data);
  console.log("error", error)

  if (isLoading) {
    return (
      <div>Loading</div>
    )
  }

  if (error) {
    return (
      <div>{JSON.stringify(error)}</div>
    )
  }

  return (
    <div>
      <div>User List:</div>
      <ul>
        {data && data.map(item => {
          return (<li key={item.id}>{item.name}</li>)
        })}
      </ul>
    </div>
  )
}
