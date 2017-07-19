import React from 'react';

class TableLoading extends React.Component{
    render(){
        return(
            <tr>
                <td colSpan={this.props.colSpan}>
                    <center>
                        <h3>
                            <span className="fa fa-spinner fa-spin"></span>
                        </h3>
                    </center>
                </td>
            </tr>
        )
    }
}

module.exports = TableLoading;