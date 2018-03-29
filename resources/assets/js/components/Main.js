import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Navbar from './Navbar';


export default class Main extends Component{
    render(){
        return(<div>
            <h1>Kelvin</h1>
                <Navbar />
            </div>
        );
    }
}