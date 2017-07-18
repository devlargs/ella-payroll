import React from 'react';

class ButtonLoad extends React.Component{
    render(){
        return (
            <button className="btn btn-primary btn-block btn-flat disabled">
                    <span className="fa fa-gear fa-spin"></span>
            </button>
        )
    }
}

module.exports = ButtonLoad;