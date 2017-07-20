import React from 'react';

class TableLoading extends React.Component{
    render(){
        return(
            <tr>
                <td colSpan={this.props.colSpan}>
                    <center>
                        {
                            (typeof this.props.message == 'undefined') ? 
                            <h3>
                                <span className="fa fa-spinner fa-spin"></span>
                            </h3> :
                            <h4>{this.props.message}</h4>
                        }
                    </center>
                </td>
            </tr>
        )
    }
}

module.exports = TableLoading;