import React from 'react';

class  Navbar extends React.Component {
    render(){
        return(
            <div>
                <header className="main-header">
                    <a className="logo">
                    <span className="logo-mini"><b>ESL</b>p</span>
                    <span className="logo-lg"><b>ESL</b>Payroll</span>
                    </a>
                    <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </a>

                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                        
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <img src="/user.jpeg" className="user-image" alt="User Image" />
                            <span className="hidden-xs">Ralph Largo</span>
                            </a>
                            <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="/user.jpeg" className="img-circle" alt="User Image"/>

                                <p> Ralph Largo
                                <small>Administrator</small>
                                </p>
                            </li>
                           
                            <li className="user-footer">
                                <div className="pull-left">
                                <a href="#" className="btn btn-default btn-flat">Profile</a>
                                </div>
                                <div className="pull-right">
                                <a className="btn btn-default btn-flat signOut">Sign out</a>
                                </div>
                            </li>
                            </ul>
                        </li>
                        

                        </ul>
                    </div>
                    </nav>
                </header>
            </div>
        )
    }
}

module.exports = Navbar;