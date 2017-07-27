import React from 'react';
import { render } from 'react-dom';
import ButtonLoad from '../components/buttonLoading';
import TableLoading from '../components/tableLoading';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            view: 'view',
            users: {},
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            usersLoading: true
        }
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
                                <a onClick={() => { this.setState({ view: 'add' }) }}>+Add new </a>
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
                                        <h3 className="box-title">List of Employees</h3>

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
                                        <table className="table table-bordered">
                                            <tbody>
                                            
                                                <tr>
                                                    <th>Email</th>
                                                    <th>Employee Name</th>
                                                    <th>Actions</th>
                                                </tr>
                                                {
                                                    (self.state.usersLoading) ?
                                                    <TableLoading colSpan={3}/> : 

                                                    (Object.keys(self.state.users).length == 0) ?
                                                    <TableLoading colSpan={3} message={"No users found"} /> :
                                                    Object.keys(self.state.users).map(function(key, idx){
                                                        return (
                                                            <tr key={idx}>
                                                                <td>{self.state.users[key].email}</td> 
                                                                <td>{self.state.users[key].displayName}</td>
                                                                <td>
                                                                    <button className="btn btn-mr-5 btn-success btn-xs">View</button> 
                                                                    <button onClick={(e) => self.removeUser(e, key, self.state.users[key].email)} className="btn btn-mr-5 btn-danger btn-xs">Remove</button> 
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        (self.state.view == 'add') &&
                        <div className="row">
                            <div className="col-md-9 col-lg-8 col-xs-12 col-sm-12">
                                <div className="box box-info">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Add Employee Form</h3>
                                    </div>
                                    <form className="form-horizontal">
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>

                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" value={self.state.username} onChange={(e) => self.setState({ username: e.target.value })} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>

                                                <div className="col-sm-10">
                                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" value={self.state.password} onChange={(e) => self.setState({ password: e.target.value })} />
                                                </div>
                                            </div>

                                            <hr/>

                                            <div className="form-group">
                                                <label htmlFor="firstName" className="col-sm-2 control-label">First Name</label>

                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="firstName" placeholder="First Name" value={self.state.firstName} onChange={(e) => self.setState({ firstName: e.target.value })} />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="lastName" className="col-sm-2 control-label">Last Name</label>

                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" value={self.state.lastName} onChange={(e) => self.setState({ lastName: e.target.value })} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="box-footer">
                                            <button onClick={() => { self.setState({ view: 'view' }) }} className="btn btn-default">Cancel</button>

                                            {
                                                (!self.state.usersLoading) ?
                                                <button onClick={(e) => self.createUser(e)} className="btn btn-info pull-right">Create Employee</button>:
                                                <ButtonLoad classNames={"btn btn-info pull-right"}/>
                                            }
                                            
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