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
            <div style = {{border: '1px solid green', width: '30vw', height: '40vh'}}>
               <div>
                 </div>
                  {name}
                  <div>

                {price}
                  </div>
                <div style = {{width: '100px', height: "100px"}}>
                <img src={image} alt="IMAGE" /> 
                </div>
              </div>
        );
      }
      
    }