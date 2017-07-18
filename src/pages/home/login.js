import React from 'react';
import { render } from 'react-dom';
import { firebase, hashUser } from '../../../settings';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                localStorage.setItem(hashUser, JSON.stringify(user))
                location.href = "/blank"
            } else {
                console.log("No user logged")
                localStorage.clear();
            }
        });
    }

    onLogin(email, password) {
        const auth = firebase.auth();

        auth.signInWithEmailAndPassword(email, password).then(function (res) {
            toastr.success('Successfully Authenticated!');
            setTimeout(function(){
                location.href = "/blank";
            }, 2000)
        }).catch(function (err) {
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
                            <button className="btn btn-primary btn-block btn-flat" onClick={() => this.onLogin(this.state.username, this.state.password)}>Sign In </button>
                            {/*<button className="btn btn-primary btn-block btn-flat" onClick={() => this.onSignOut()}>Logout</button>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));