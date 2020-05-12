import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

const ROUTES = [
    {link: '/', displayName: 'Release Requests'},
    {link: '/quarantined', displayName: 'Quarantined'}
];

const Nav = withRouter((props) => {
    return (
        <nav id="nav">
            <div className="innertube">
                <ul>
                    {ROUTES.map((route, index) => <NavLink key={index} {...route} selected={route.link === props.location.pathname}/>)}
                </ul>		
            </div>
        </nav>	
    ); 
});

const NavLink = (props) => <li className={`${props.selected? 'selected': ''}`}><Link to={props.link} >{props.displayName}</Link></li>

export default Nav;
