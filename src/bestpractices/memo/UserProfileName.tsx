import React, { memo } from 'react'


function UserProfileName({ name }: { name: string | null }) {
    console.log("----------UserProfileName----------");
    return (
        <h2 className="user-profile-name">{name}</h2>
    )
}


export default memo(UserProfileName)