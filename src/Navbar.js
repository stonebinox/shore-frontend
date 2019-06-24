import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <img src="/logo-2019.png" alt="Shore Soaps" height="90" />
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="#">HOME</a></li>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}