import React from 'react';
import { render } from 'react-dom';

import Navbar from './pages/components/navbar';
import LeftSideBar from './pages/components/leftSidebar';
import Footer from './pages/components/footer';
import RightSideBar from './pages/components/rightSidebar';

switch(__page){
    case 'login' : 
        var App = require('./pages/login');
        break;
    case 'dashboard' : 
        var App = require('./pages/admin/dashboard');
        break;
    case 'employees' : 
        var App = require('./pages/admin/employees');
        break;
}


class Main extends React.Component {
    conditionalRendering(){
        if(__page != 'login'){
            return (
                <div className="wrapper">
                    <Navbar />
                    <LeftSideBar />
                        <div className="content-wrapper">
                            <App/>
                        </div>
                    <Footer />
                    <RightSideBar />
                    <div className="control-sidebar-bg"></div>
                </div>
            )
        }else{
            return(
                <App/>
            )
        }
    }

    render(){
        return (
            this.conditionalRendering()
        )
    }
}

render(<Main/>, document.getElementById('root'));