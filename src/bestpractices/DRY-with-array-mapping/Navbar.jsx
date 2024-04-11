import React from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import logo from '../../images/icon.png'

const links = [
    { title: 'Home', path: '/home', icon: <HomeIcon /> },
    { title: 'About', path: '/about', icon: <AboutIcon /> },
    { title: 'Contact', path: '/contact', icon: <ContactIcon /> },
]
export default function Navbar() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        {links.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path} >
                                    {link.icon}
                                    <span>{link.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <Switch>
                        <Route path={"/home"} render={() => (<div>home</div>)} />
                        <Route path={"/about"} render={() => (<div>about</div>)} />
                        <Route path={"/contact"} render={() => (<div>contact</div>)} />
                        <Redirect from={"/"} to={"/home"} />
                    </Switch>
                </div>
                
            </div>
        </BrowserRouter>
    )
}


function HomeIcon() {
    return (
        <img src={logo} style={{ width: '10px' }} />
    )
}

function AboutIcon() {
    return (
        <img src={logo} style={{ width: '10px' }} />

    )
}

function ContactIcon() {
    return (
        <img src={logo} style={{ width: '10px' }} />

    )
}