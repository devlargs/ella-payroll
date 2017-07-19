import React from 'react';

class ButtonLoad extends React.Component{
    render(){
        return (
            <button className={this.props.classNames} disabled>
                    <span className="fa fa-gear fa-spin"></span>
            </button>
        )
    }
}

module.exports = ButtonLoad;