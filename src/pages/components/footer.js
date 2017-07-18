import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 0.0.1
                </div>
                <strong>Copyright &copy; 2017-beyond <a href="https://adminlte.io">Ella Sarmiento</a>.</strong> All rights reserved.
            </footer>
        )
    }
}

module.exports = Footer;