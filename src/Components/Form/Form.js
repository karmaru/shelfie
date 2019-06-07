import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
  constructor(props) {

    // let {alrmStatus, alrmTime, user} = props.alarm
    super(props)

    this.state = {
      imgUrl: '',
      productName: '',
      price: 0
    }
  }

  handleChange = e => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleClickReset = () => {
    this.setState({
      imgUrl: '',
      productName: '',
      price: 0
    })
  }

  postForm = () => {
    const { imgUrl, productName, price } = this.state;
    axios.post('/api/product', {productName, price, imgUrl}).then(res => {
      console.log(5555)
      this.props.componentDidMount()
      this.handleClickReset()
      });
  }

      render() {     
        return (
            <div style= {{alignContent: 'right'}}>

              <h1>Form</h1>
            <input 
                type="text"
                name="imgUrl"
                onChange={this.handleChange}
                value={this.state.imgUrl}/>
            <input 
                type="text"
                name="productName"
                onChange={this.handleChange}
                value={this.state.productName}/>
            <input 
                type="number"
                name="price"
                onChange={this.handleChange}
                value={this.state.price}/>
            <button
              onClick={this.handleClickReset}>Cancel</button>
            <button
              onClick={this.postForm}>Add to Inventory</button>
            </div>
        );
      }
      
    }