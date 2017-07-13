/*import React from 'react';
import { render } from 'react-dom';

console.log("test")

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Payroll System</h1>
            </div>
        )
    }
};

render(<App/>, document.getElementById('root'));*/


switch(__page){
    case 'login' : 
        require('./pages/login');
        break;
    case 'page1' : 
        require('./pages/page1');
        break;
}