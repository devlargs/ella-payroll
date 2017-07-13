import React from 'react';
import { render } from 'react-dom';
import { firebase } from '../../../models/config';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    onLogin(email, password){
        const auth = firebase.auth();

        auth.signInWithEmailAndPassword(email, password).then(function(res){
            toastr.success('Successfully Authenticated!');
        }).catch(function(err){
            toastr.error(err.message)
        })
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
                            <button className="btn btn-primary btn-block btn-flat" onClick={() => this.onLogin(this.state.username, this.state.password)}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));