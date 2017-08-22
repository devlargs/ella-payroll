import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            users: {}
        }
    }

    componentDidMount(){
        function getDates(startDate, stopDate) {
            var dateArray = [];
            var currentDate = moment(startDate);
            var stopDate = moment(stopDate);
            while (currentDate <= stopDate) {
                dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
                currentDate = moment(currentDate).add(1, 'days');
            }
            return dateArray;
        }

        var a = getDates(new Date('2017-08-01'), new Date('2017-08-15'))
        console.log(a)

    }

    render() {
        console.clear();
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