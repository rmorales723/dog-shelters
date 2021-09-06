import React from 'react';
import Dog from './Dog';
import NewDogForm from './NewDogForm';
import {Link} from 'react-router-dom';



class Dogs extends React.Component {
    state = {
        dogs: []
    }

    componentDidMount() {
        fetch("http://localhost:9292/dogs")
            .then(res => res.json())
            .then(dogs => this.setState({ dogs }));
    }

    delete(item){
          const newState = this.state.data.slice();
            if (newState.indexOf(item) > -1) {
            newState.splice(newState.indexOf(item), 1);
            this.setState({data: newState})
        }}

    


    renderDogs = () => {
        return (
            <div>
                {this.state.dogs.map(dog =>
                    <Dog
                        breed={dog.breed}
                        name={dog.name}
                        age={dog.age}
                        shelter_id={dog.shelter_id}
                        img_url={dog.img_url}
                         />
                )}
            </div>
            
        )
    }

    render() {
        return (
            <>
                <Link to="/dogs/new">New Dog</Link>
                    <ul>{this.renderDogs()}</ul>
            </>
        )
    }
}



export default Dogs;