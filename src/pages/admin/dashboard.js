import React from 'react';
import { render } from 'react-dom';
import { firebase, checkUser } from '../../../settings';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            users: {}
        }
    }

    componentDidMount() {
        checkUser();
        var database = firebase.database().ref('usersInfo');
        database.on('value', function (snap) {
            console.log(snap.val())
        })

    }

    database() {
        var database = firebase.database().ref('usersInfo');

        database.child('test').set({
            d: 'da'
        })

        database.child('tanginanyo').set({
            d: 'da'
        })

        // database.child("random").setValue({
        //     name: 'Gago ka ba',
        //     sex: 'f'
        // })


    }

    render() {
        var self = this;
        return (
            <div>
                <section className="content-header">
                    <h1>
                        Shantidope
                    <small>it all starts here</small>
                    </h1>
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
                            <button onClick={self.database}>Test</button>
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

// render(<App />, document.getElementById('root'));
module.exports = App;