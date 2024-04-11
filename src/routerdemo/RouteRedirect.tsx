import React, { useContext, createContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

const fakeAuth = {
    isAuthenticated: false,
    signin(cb: () => void) {
        this.isAuthenticated = true;
        setTimeout(cb, 100)
    },
    signout(cb: () => void) {
        this.isAuthenticated = false;
        setTimeout(cb, 100)
    }
}

function useProvideAuth() {
    const [user, setUser] = useState<string | null>(null)

    const signin = (cb: () => void) => {
        return fakeAuth.signin(() => {
            setUser("user")
            cb();
        })
    }

    const signout = (cb: () => void) => {
        return fakeAuth.signin(() => {
            setUser(null)
            cb();
        })
    }

    return { user, signin, signout }
}


type AA = {
    user: string | null;
    signin: (cb: () => void) => void;
    signout: (cb: () => void) => void;
}


const authContext = createContext<AA | null>(null)

function ProvideAuth({ children }: any) {
    const auth = useProvideAuth()
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

function useAuth() {
    return useContext(authContext)
}

function AuthButton() {
    let history = useHistory();
    let auth = useAuth()!;

    return auth.user ? (
        <p>
            Welcome?{" "}
            <button
                onClick={() => {
                    auth.signout(() => {
                        history.push("/")
                    })
                }}
            >Sign out</button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
}

function PrivateRoute({ children, ...rest }: any) {
    let auth = useAuth()!;

    return (
        <Route
            {...rest}
            render={({ location }) => {
               return auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }}
        />
    )
}

function PublicPage() {
    return <h3>Public</h3>
}

function ProtectedPage() {
    return <h3>Protected</h3>
}

function LoginPage() {
    let history = useHistory()
    let location = useLocation<{ from: { pathname: string } }>();
    let auth = useAuth()!;

    let { from } = location.state || { from: { pathname: "/" } }

    let login = () => {
        auth.signin(() => {
            history.replace(from)
        })
    }

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    )
}

export default function RouteRedirect() {
    return (
        <ProvideAuth>
            <Router>
                <div>

                    <AuthButton />

                    <ul>
                        <li>
                            <Link to="/public">Public page</Link>
                            <Link to="/protected">Protected page</Link>
                        </li>
                    </ul>
                </div>

                <Switch>
                    <Route path="/public">
                        <PublicPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <PrivateRoute path="/protected">
                        <ProtectedPage />
                    </PrivateRoute>

                </Switch>


            </Router>
        </ProvideAuth>
    )
}
