import React from 'react';
import { render } from 'react-dom';
import { firebase, checkUser, hashUser } from '../../settings';
import ButtonLoad from './components/buttonLoading';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            loginLoading: false
        }
    }

    componentDidMount() {
        checkUser();
    }

    onLogin(email, password) {
        var self = this;
        self.setState({ loginLoading : true });
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password).then(function (res) {
            toastr.success('Successfully Logged In!');
            setTimeout(function () {
                localStorage.setItem(hashUser, JSON.stringify(res));
                location.href = "/dashboard";
            }, 2000)
        }).catch(function (err) {
            self.setState({ loginLoading : false });
            toastr.error(err.message)
        })
    }

    onSignOut() {
        const auth = firebase.auth();

        auth.signOut().then(function () {
            toastr.success("Successfully Logout")
        }).catch(function (error) {
            toastr.error(error);
        });
    }

    render() {
        return (
            <div className="login-box">
                <div className="login-logo">
                    <a><b>Payroll System</b> | ES </a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col-xs-8">
                        </div>
                        <div className="col-xs-4">
                            {
                                (!this.state.loginLoading) ?
                                <button className="btn btn-primary btn-block btn-flat" onClick={() => this.onLogin(this.state.username, this.state.password)}>Sign In </button> :
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