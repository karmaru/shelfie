import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

export default class App extends Component {
  constructor() {

    super()
    this.state = {
      product: []
    }
  }

componentDidMount() {
  axios.get('/api/inventory').then(res => {
    // console.log(1111, res.data);
    this.setState({
      product: res.data
    });
    // console.log(454545, this.state.product)
  });
  }


render() {
  return (
    <div className="App">
        <Header style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    alignContent: 'space-between'
                    }}/>
        <div style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    alignContent: 'space-between'
                    }}>

                            <div>
                                <Dashboard 
                                componentDidmount = {this.componentDidMount} product = {this.state.product}/>
                            </div>
                   
        <Form />
          </div>  
      
      
    </div>
  );
}
}
