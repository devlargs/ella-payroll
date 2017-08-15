import React from 'react';
import { render } from 'react-dom';
import ButtonLoad from './components/buttonLoading';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            loginLoading: false
        }

        this.login = this.login.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event){
        var self = this;
        if(event.key == 'Enter'){
            self.login();
        }
    }

    login(){
        var self = this;

        if(self.state.username == ''){
            toastr.error('Please enter username.')
        }else if(self.state.password == ''){
            toastr.error('Please enter password')
        }else{
            self.setState({ loginLoading : true });
            $.ajax({
                url: '/api/authenticate',
                type: 'POST',
                data: {
                    email: self.state.username,
                    password: self.state.password
                },
                success: function(response){
                    toastr.success(response.message);
                    setTimeout(function(){
                        location.href = "/dashboard"
                    }, 1500)
                },
                error: function(err){
                    self.setState({ loginLoading: false });
                    toastr.error(err)
                }
            });
        }
    }

    render() {
        var self = this;
 
        return (
            <div className="login-box">
                <div className="login-logo">
                    <a><b>Payroll System</b> | ES </a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form encType="multipart/form-data">
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} onKeyPress={self.handleKeyPress} />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} onKeyPress={self.handleKeyPress}/>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col-xs-8">
                        </div>
                        <div className="col-xs-4">
                            {
                                (!this.state.loginLoading) ?
                                <button className="btn btn-primary btn-block btn-flat" onClick={() => self.login()}>Sign In </button> :
                                <ButtonLoad classNames={"btn btn-primary btn-block btn-flat"} />
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = App;