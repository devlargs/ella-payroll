import React from 'react';

class LeftSideBar extends React.Component{
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="https://firebasestorage.googleapis.com/v0/b/ella-payroll.appspot.com/o/users%2Fprofile-img.png?alt=media&token=9ee171b0-56dd-4709-94db-5945083a739c" className="img-circle" alt="User Image"/>
                        </div>
                        <div className="pull-left info">
                            <p>Ralph Largo</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..."/>
                            <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                            </button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li><a><i className="fa fa-dashboard"></i> <span>Dashboard</span></a></li>
                        <li><a><i className="fa fa-user"></i> <span>Employees</span></a></li>
                        <li><a><i className="fa fa-calendar"></i> <span>Calendar</span></a></li>
                        <li><a><i className="fa fa-table"></i> <span>Tax Table</span></a></li>
                    </ul>
                </section>
            </aside>
        )
    }
}

module.exports = LeftSideBar;