import React from 'react';
import Dog from './Dog';
import FormContainer from './FormContainer';

class Dogs extends React.Component {
    state = {
        dogs:[]
    }
    
    componentDidMount() {
        fetch("http://localhost:9292/dogs")
        .then(res => res.json())
        .then(dogs => this.setState({dogs}));
    }

    renderDogs = () => {
       return  this.state.dogs.map((dog) => {
            return( <div>
                <Dog
                breed = {dog.breed}
                name = {dog.name}
                age = {dog.age}
                img = {dog.img}
                shelter_id = {dog.shelter_id} />
                </div>
                
       )});
    };
    
    render() {
       return (<ul>{this.renderDogs()}</ul>)
    }
}


export default Dogs;