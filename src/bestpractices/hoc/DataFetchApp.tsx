import React from 'react'
import { withDataFetching } from './withDataFetching'
import UsersList, { UserType } from './UsersList'


export type ParameterProps = {
  url: string,
  gender: number,
}

const UsersListWithData = withDataFetching<ParameterProps, UserType[]>(UsersList)

export default function DataFetchApp() {
  return (
    <div>
      <UsersListWithData url={"/api/listUsers"} gender={1} />
    </div>
  )
}
