import React, {Component} from 'react'


export default class Product extends Component {
  constructor(props) {

    // let {alrmStatus, alrmTime, user} = props.alarm
    super(props)

    this.state = {
      products: {}
    }
  }
      render() {   
        let {name, price, image} = this.props.product  
        console.log(name, price, image)
        return (
            <div style = {{background: '#D34735', borderRadius: '30px',
            margin: '20px', display: 'flex', alignItems: 'center' }}>
               <div>
                 </div>
                  {name}
                  <div>
                {price}
                  </div>
                <div >
                <img src={image} alt="IMAGE" /> 
                </div>
              </div>
        );
      }
      
    }