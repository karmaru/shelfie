import React, {Component} from 'react'
import logo from './../../images/shelfie_logo.png'

export default class Header extends Component {
    
      render() {     
        return (
            <div style = {{backgroundColor: '#AB2A19', color: 'white', width: '100vw', height: '12vh', display: 'flex',
            justifyContent: 'left', alignItems: 'center'}}>
                <img style = {{height: '6vh', marginLeft: '70px', marginRight: '20px'}}src={logo} alt='Logo' />
                <div style = {{fontSize: 16, fontStyle: 'bold', justifyContent: 'center'}}><h1>SHELFIE</h1></div>
            </div>
        );
      }
      
    }