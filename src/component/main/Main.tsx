import React from 'react'
import { Link, NavLink, Route, Router, Switch, useLocation } from 'react-router-dom'
import Admin from '../admin/Admin'
import CantactManagment from '../cantact mangement/CantactManagement'
import Category from '../category/Category'
import User from '../user/User'
import Dashboard from '../dashboard/Dashboard'
import './Main.scss'

export default function Main(props: any) {
    const location = useLocation()
    const [subRoutes, setSubRoutes] = React.useState({
        admin_list: false,
        admin_role: false
    })
    React.useEffect(() => {
        const current_loc = location.pathname
        const reset_menu = reset_menu_state()
        switch (current_loc) {
            case '/role':
                setSubRoutes({ ...reset_menu, admin_list: true, admin_role: true })
                break;
            case '/admin-list':
                setSubRoutes({ ...reset_menu, admin_list: true, admin_role: true })
                break;
            default:
                setSubRoutes(reset_menu)
                break;
        }
    }, [location])

    const reset_menu_state = () => {
        let tmp = {} as any
        Object.keys(subRoutes).map(x => {
            tmp[x] = false
        })
        return tmp
    }
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

                    <NavLink className="link" activeClassName="active" to={`admin-list`}>
                        <div>
                            <span className="material-icons">person</span>
                            <span> admin </span>
                        </div>
                    </NavLink>
                    {subRoutes.admin_list && <NavLink className="sub-link" activeClassName="active" to="admin-list">
                        <div>
                            <span> admin list </span>
                        </div>
                    </NavLink>}
                    {subRoutes.admin_role && <NavLink className="sub-link" activeClassName="active" to="role">
                        <div>
                            <span> Role </span>
                        </div>
                    </NavLink>}
                    <NavLink className="link" activeClassName="active" to={`user`}>
                        <div>
                            <span className="material-icons">person</span>
                            <span> User </span>
                        </div>
                    </NavLink>
                    <NavLink className="link" activeClassName="active" to={`category`}>
                        <div>
                            <span className="material-icons">person</span>
                            <span> Category </span>
                        </div>
                    </NavLink>
                    <NavLink className="link" activeClassName="active" to={`cantactmanagement`}>
                        <div>
                            <span className="material-icons">person</span>
                            <span> Cantact Management </span>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="main-side">
                <div className="header">
                    <label className="search-box">
                        {/* <label htmlFor="search"> */}
                        <input type="text" />
                        <div className="placeholder">
                            <span className="material-icons">search</span>
                            <span>search</span>
                        </div>
                        {/* </label> */}
                    </label>
                    <div className="profile-box">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="profile" className="avatar" />
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
                        <Route path='/user'>
                            <User />
                        </Route>
                        <Route path='/category'>
                            <Category />
                        </Route>
                        <Route path='/cantactmanagement'>
                            <CantactManagment />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

