import React from 'react';
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
}

render(<App/>, document.getElementById('root'));