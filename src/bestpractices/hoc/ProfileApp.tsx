import React from 'react'
import { requireAuth } from './requireAuth'
import ProfileEditPage, { UserProfileType } from './ProfileEditPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthProvider, useAuthContext } from './authContext'
import Login from './Login'

const ProfileEditPageWithAuth = requireAuth<UserProfileType>(ProfileEditPage)



export default function ProfileApp() {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/" component={ProfileEditPageWithAuth} />
                    </Switch>
                </BrowserRouter>
            </AuthProvider>

        </div>
    )
}
