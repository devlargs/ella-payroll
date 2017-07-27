import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            users: {}
        }
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

                </section>
            </div>
        )
    }
}

module.exports = App;