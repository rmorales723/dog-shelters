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
    };

    componentDidUpdate = () => {
          fetch(`http://localhost:9292/dogs`)
            .then((response) => response.json())
            .then(data => {
                if(data.length === this.state.dogs.length){
                    console.log(data.length)
                } else {
                    this.setState({dogs: data})
                }
            })
        }
      

    deleteDog = (e) => {
        fetch(`http://localhost:9292/dogs/${e.target.id}`, {
            method: "DELETE",
          })
        .then((response) => response.json())
        .then((data) => {
        this.setState({ dogs:[...this.state.dogs], data})
            });
        }

    // renderShelters = () => {
    //     console.log(this.state.shelters)
    //     return this.state.shelters.map(shelters => {
    //         return <option value={shelters.id}>{shelters.name}</option>
    //     });
    // }  
       
    // handleOnChange = (event) => {
    //     this.setState({
    //         [event.target.name] : event.target.value
    //     });
    //     const { value } = event.target;
    //     if (value == "shelter")
    //         return this.setState({ filterAllMovies: this.state.movies });
    //     const filterAllMovies = this.state.movies.filter(movie => {
    //         return movie.theater_id == value
    //     })
    //    // this.setState({ filterAllMovies })
    //};   


    renderDogs = () => {
        return (
         <div>
                {this.state.dogs.map(dog => 
                    <Dog 
                        key={dog.id}
                        deleteDog={this.deleteDog}
                        id={dog.id}
                        breed={dog.breed}
                        name={dog.name}
                        age={dog.age}
                        shelter={dog.shelter.name}
                        img_url={dog.img_url}
                         />
                )}
            </div>
            
        )
    };

    render() {
        return (
            
            <>
                {/* <select
                        onChange={this.handleOnChange}
                        name="shelter.name" id="">
                        <option value="shelter"> SHELTER</option>
                        {this.renderShelters()}
                </select> */}
                    <Link class="button is-info"to="/dogs/new">New Dog</Link>
                    <ul>{this.renderDogs()}</ul>
            </>
    )
    }
    }



export default Dogs;