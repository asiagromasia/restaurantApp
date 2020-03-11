import React, { Component } from 'react';
import axios from 'axios';

export default class AddsTables extends Component {
           state = {
           number: '', 
           status: 'Available',
          orderButton:'',
    reservationButton:''

        }

   
    handleChange = event => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
        //this.setState({name: event.target.name, description: event.target.description});
    }

    handleSubmit = event => {
        //event.preventDefault();
       axios.post('http://localhost:3200/api/dish', this.state)
          .then(res => {
              console.log(res);
              console.log(res.data);
          });
    }
    handleReserve = event => {       
        axios.post('http://localhost:3200/api/reservation', this.state)
            .then(res=> {
                console.log(res);
            console.log(res.data);
            });
    }
    handleOrder = event => {
        axios.post('http://localhost:3200/api/order',this.state)
            .then(res=> {
                console.log(res);
            console.log(res.data);
            });
    }
render(){
    return(
        <div>
        <div>
        <li>Table 1 Status:Available/Occupied/Reserved
        <a href='http://localhost:3000/api/reservation/table?1'><button type="reserve"> Reserve</button></a>
        <a href='http://localhost:3000/api/dish'><button type="order"> Orders</button></a>
        Order status:          
                        <select name="version" onChange={this.handleChange} value={this.state.version}>            
                            <option value="tobeplaced">to be placed</option>             
                            <option value="placed">placed</option>                             
                        </select>   
        </li>
        </div> 
        <div>
        <li>Table 2
        <a href='http://localhost:3000/api/reservation/table?2'><button type="reserve"> Reserve</button></a>
        <a href='http://localhost:3000/api/dish'><button type="order"> Orders</button></a>
        </li>
        </div> 
        <div>
        <li>Table 3
        <a href='http://localhost:3000/api/reservation/table?3'><button type="reserve"> Reserve</button></a>
        <a href='http://localhost:3000/api/dish'><button type="order"> Orders</button></a>
        </li>
        </div> 
        <div>
        <li>Table 4
        <a href='http://localhost:3000/api/reservation/table?4'><button type="reserve"> Reserve</button></a>
        <a href='http://localhost:3000/api/dish'><button type="order"> Orders</button></a>
        <a href='http://localhost:3200/api/dish'><button>alldishes</button></a>
        </li>
        </div> 
        </div>
    )
}
}
/*
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                     Dish Name:
                    <input type="text" name="name" defaultValue={this.state.name} value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                     Description:
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
                <label>
                     Ingredience:
                    <input type="text" name="ingredience" value={this.state.ingredience} onChange={this.handleChange} />
                </label>
                <label>         
                    Menu version          
                        <select name="version" onChange={this.handleChange} value={this.state.version}>                
                            <option value="3/11">3/11</option>  
                            <option value="3/12">3/12</option>             
                            <option value="3/13">3/13</option>                 
                            <option value="3/14">3/14</option>               
                        </select>   
                </label>

                <button type="submit"> Add</button>
            </form>
        </div>
    )
}   */
