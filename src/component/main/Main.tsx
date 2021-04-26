import React from 'react'
import { Link, NavLink, Route, Router, Switch, useRouteMatch } from 'react-router-dom'
import Admin from '../admin/Admin'
import Dashboard from '../dashboard/Dashboard'
import './Main.scss'

export default function Main() {
    
    return (
        <div className="main">
                <div className="side-bar">
                    <div className="brand">
                        PROFGATE
                    </div>
                    <div className="menu">
                        <NavLink className="link" activeClassName="active" to={`dashboard`}>
                            <div>
                                <span className="material-icons">dashboard</span>
                                <span> dashboard </span>
                            </div>
                        </NavLink>
                        <NavLink className="link" activeClassName="active" to={`admin`}>
                            <div>
                                <span className="material-icons">person</span>
                                <span> admin </span>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="main-side">
                    <div className="header">
                        <label className="search-box">
                            {/* <label htmlFor="search"> */}
                                <input type="text"/>
                                <div className="placeholder">
                                    <span className="material-icons">search</span>
                                    <span>search</span>
                                </div>
                            {/* </label> */}
                        </label>
                        <div className="profile-box">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="profile" className="avatar"/>
                            <div className="name">
                                <span>sana</span> 
                                <span>mhenni</span> 
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route exact path='/'>
                                <Dashboard />
                            </Route>
                            <Route exact path='/dashboard'>
                                <Dashboard />
                            </Route>
                            <Route path='/admin'>
                                <Admin />
                            </Route>
                        </Switch>
                    </div>
                </div>
        </div>
    )
}

