import React from 'react';
import { encrypt, decrypt } from './functions';

class  Navbar extends React.Component {
    constructor(){
        super();
        
        this.state = {
            user: {
                job_title: {
                    name: ''
                }
            }
        }
        this.getUserInfo = this.getUserInfo.bind(this);
    }
    
    componentDidMount(){
        this.getUserInfo();
    }

    getUserInfo(){
        var self = this;
        $.ajax({
            url: '/api/user/' + __user.id + '?withRelated=job_title',
            success: function(data){
                encrypt('currentUser', data.response[0]);

                setTimeout(function(){
                    self.setState({user: decrypt('currentUser') });
                }, 0)
            }
        })
    }

    signOut(){
        toastr.success("<h5>Thank you. Please come again. <span class='fa fa-spin fa-gear'></span></h5>");
        setTimeout(function(){
            location.href = "/logout";
        }, 3500);
    }
    
    render(){
        let { user } = this.state;

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
                            <span className="hidden-xs">{user.first_name} {user.middle_name} {user.last_name}</span>
                            </a>
                            <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="/user.jpeg" className="img-circle" alt="User Image"/>

                                <p> {user.first_name} {user.middle_name} {user.last_name}
                                <small>{user.job_title.name}</small>
                                </p>
                            </li>
                           
                            <li className="user-footer">
                                <div className="pull-left">
                                <a href="#" className="btn btn-default btn-flat">Profile</a>
                                </div>
                                <div className="pull-right">
                                <a className="btn btn-default btn-flat signOut" onClick={this.signOut}>Sign out</a>
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