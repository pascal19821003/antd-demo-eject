// https://v5.reactrouter.com/web/guides/quick-start
import React from 'react'
import {

    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch

} from 'react-router-dom'


export default function Router01() {
    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                            <li>
                                <Link to="/topics">Topics</Link>
                            </li>
                        </ul>

                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/users">
                                <Users />
                            </Route>
                            <Route path="/topics">
                                <Topics />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </nav>
                </div>
            </Router>
        </div>
    )
}


function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function Topics() {

    let match = useRouteMatch();
    return (
        <div>
            <h2>topics</h2>
            <ul>
                <li><Link to={`${match.url}/components`}>Components</Link></li>
                <li><Link to={`${match.url}/props-v-state`}>Components</Link></li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic></Topic>
                </Route>
                <Route path={`${match.path}`}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    )

}

function Topic() {
    let { topicId } = useParams<{ topicId: string | undefined }>()

    return <h3>Requested topic Id : {topicId}</h3>
}