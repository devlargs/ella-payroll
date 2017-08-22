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

        $('.input-daterange').datepicker({
            todayHighlight: true
        })

    }

    render() {
        console.clear();
        var self = this;
        return (
            <div>
                <section className="content-header">
                    <h1>
                        Dashboard
                    </h1>
                </section>

                <section className="content">
                    <div class="box box-info">
                    <div class="box-header with-border">
                    <h3 class="box-title">DTR Update</h3>

                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                        </button>
                    </div>
                    </div>
                    
                    <div class="box-body">  
                        <div class="input-group input-daterange">
                            <input type="text" class="form-control" value="2012-04-05"/>
                            <div class="input-group-addon">to</div>
                            <input type="text" class="form-control" value="2012-04-19"/>
                        </div>
                    </div>

                    <div class="box-footer clearfix">
                    <a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>
                    <a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">View All Orders</a>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

module.exports = App;