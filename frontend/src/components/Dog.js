import React, { Component } from "react";
import NewDogForm from './NewDogForm'



class Dog extends Component {

    

    



    render() {
        return (
            <div id={this.props.id}className="dog has-text-weight-bold ">
                <h2>{this.props.breed}</h2>
                <p>Name:{this.props.name}</p>
                <p>AGE: {this.props.age}</p>
                <p>SHELTER:{this.props.shelter}</p>
                <img className="dog-img" width="100%" src={this.props.img_url} alt=" " />
                    
                    <div class="container">
                    <div class="center">
                <button id={this.props.id} class="button is-danger" onClick={this.props.deleteDog}>DELETE</button>
                    </div>
                </div>
            
            </div>

        )
    };
}

export default Dog;