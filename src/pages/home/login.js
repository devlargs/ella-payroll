import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    onLogin(){

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
                            <input type="email" className="form-control" placeholder="Email" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password" />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={() => {
                                    location.href="/blank"
                                }}>Sign In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));