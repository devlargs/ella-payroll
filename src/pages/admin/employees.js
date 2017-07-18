import React from 'react';
import { render } from 'react-dom';
import { firebase, checkUser } from '../../../settings';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            view: 'view',
            users: {}
        }
    }

    componentDidMount() {
        checkUser();
        // firebase.auth().createUserWithEmailAndPassword("ralph.largo@volenday.com", "programer1234").catch(function(error) {
        //     console.log(error)
        // });
        // var database = firebase.database().ref('usersInfo');
        // database.on('value', function (snap) {
        //     console.log(snap.val())
        // })

    }

    createUser(){
        var email = "test.largo@volenday.com";
        var password = "programer1234"

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            console.log(error)
        });
    }

    render() {
        var self = this;
        return (
            <div>
                <section className="content-header">
                    <h1>
                        Employees
                        <small>
                            {
                                (self.state.view == 'view') &&
                                <a onClick={() => { this.setState({ view: 'add' }) }}>+Add new user</a>
                            }

                        </small>
                    </h1>
                </section>

                <section className="content">

                    {
                        (self.state.view == 'view') &&
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Responsive Hover Table</h3>

                                        <div className="box-tools">
                                            <div className="input-group input-group-sm" style={{ "width": 150 }}>
                                                <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />

                                                <div className="input-group-btn">
                                                    <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-body table-responsive no-padding">
                                        <table className="table table-hover">
                                            <tbody><tr>
                                                <th>ID</th>
                                                <th>User</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Reason</th>
                                            </tr>
                                                <tr>
                                                    <td>183</td>
                                                    <td>John Doe</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="label label-success">Approved</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                                <tr>
                                                    <td>219</td>
                                                    <td>Alexander Pierce</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="label label-warning">Pending</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                                <tr>
                                                    <td>657</td>
                                                    <td>Bob Doe</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="label label-primary">Approved</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                                <tr>
                                                    <td>175</td>
                                                    <td>Mike Doe</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="label label-danger">Denied</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        (self.state.view == 'add') &&
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xs-6 col-sm-6">
                                <div className="box box-info">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Add Employee Form</h3>
                                    </div>
                                    <form className="form-horizontal">
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>

                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>

                                                <div className="col-sm-10">
                                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="box-footer">
                                            <button onClick={() => { self.setState({ view: 'view' }) }} className="btn btn-default">Cancel</button>
                                            <button onClick={() => self.createUser()} className="btn btn-info pull-right">Create User</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }


                </section>
            </div>
        )
    }
}

module.exports = App;