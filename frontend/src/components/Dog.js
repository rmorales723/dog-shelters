import React, { Component } from "react";



class Dog extends Component {

    render() {
        return (
            <div className="dog has-text-weight-bold ">
                <h2>{this.props.breed}</h2>
                <p>Name:{this.props.name}</p>
                <p>AGE: {this.props.age}</p>
                <p>SHELTER ID:  {this.props.shelter_id}</p>
                <img className="dog-img" width="100%" src={this.props.img_url} alt=" " />

            
            </div>

        )
    };
}

export default Dog;