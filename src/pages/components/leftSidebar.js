import React from 'react';
import { images } from '../../../settings';

class LeftSideBar extends React.Component{
    componentDidMount(){
        var element = document.getElementById("li-" + __page);
        element.classList.add("active");
    }

    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src={images.user} className="img-circle" alt="User Image"/>
                        </div>
                        <div className="pull-left info">
                            <p>Ralph Largo</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>

                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>

                        
                        <li id="li-dashboard">
                            <a href="/dashboard"><i className="fa fa-dashboard"></i> <span>Dashboard</span></a>
                        </li>
                        
                        <li id="li-employees">
                            <a href="/employees"><i className="fa fa-user"></i> <span>Employees</span></a>
                        </li>
                        
                        <li id="li-calendar">
                            <a href="/calendar"><i className="fa fa-calendar"></i> <span>Calendar</span></a>
                        </li>
                        
                        <li id="li-taxTable">
                            <a href="/taxTable"><i className="fa fa-table"></i> <span>Tax Table</span></a>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}

module.exports = LeftSideBar;