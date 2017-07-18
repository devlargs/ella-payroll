import React from 'react';
import { render } from 'react-dom';
import { firebase, checkUser } from '../../../settings';

class App extends React.Component {

    componentDidMount(){
        checkUser();
    }

    render() {
        return (
            <div>
                <section className="content-header">
                    <h1>
                        Shantidope
                    <small>it all starts here</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Examples</a></li>
                        <li className="active">Blank page</li>
                    </ol>
                </section>

                <section className="content">

                    <div className="box">
                        <div className="box-header with-border">
                            <h3 className="box-title">Title</h3>

                            <div className="box-tools pull-right">
                                <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                    <i className="fa fa-minus"></i></button>
                                <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                    <i className="fa fa-times"></i></button>
                            </div>
                        </div>
                        <div className="box-body">
                            Start creating your amazing application!
                        </div>
                        <div className="box-footer">
                            Footer
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));