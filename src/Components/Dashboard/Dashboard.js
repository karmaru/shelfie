import React, {Component} from 'react'

import Product from './../../Components/Product/Product';


export default class Dashboard extends Component {
  constructor(props) {

    // let {alrmStatus, alrmTime, user} = props.alarm
    super(props)

  }
      render() {   
        let {product} = this.props  
        return (
            <div >

                {this.props.product.map(product => {
                        return (
                             <div key={product.id}>
                                <Product 
                                    key={product.id}
                                    product={product}
                                />
                            </div>
                        )
                    })}
            </div>
        );
      }

    }