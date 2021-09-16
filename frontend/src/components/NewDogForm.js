import React from 'react'


class NewDogForm extends React.Component {
    state = {
        shelters : [],
        breed : "",
        name: "",
        age: "",
        img_url: "",
        shelter_id: ""
    };

    componentDidMount() {
        fetch("http://localhost:9292/shelters")
            .then(res => res.json())
            .then(shelters => this.setState({ shelters }));
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };
    
    addDog = () => {
        return {
            method: 'Post',
            headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify(this.state)
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9292/dogs/new", this.addDog())
        .then(res => res.json())
        .then((dogs => this.props.history.push("/dogs"))
        )
        
    }


    render() {
        console.log(this.state.shelters)
    return(
        <>
        <button button class="btn danger" onClick={() => this.props.history.goBack()}>Back</button>
            <form className="new-dog-form has-text-weight-bold has-text-black-bis" onSubmit= {this.handleOnSubmit}>
            <label htmlFor = "shelter">SHELTER</label>
            <select value = {this.state.shelter_id} onChange={(e) =>this.setState({shelter_id:e.target.value})}>
            {this.state.shelters.map(s => {
                return (
                    <option value={s.id}>{s.location}</option>
                )
                })}
            </select>
            <p>Add a Dog</p>
            
                <label htmlFor = "breed">Breed</label>
                <input 
                    type="text" 
                    name="breed" 
                    value={this.state.breed}
                    onChange={this.handleOnChange}
                />
                <label htmlFor = "name">Name</label>
                <input
                    type="text" 
                    name="name" 
                    value={this.state.name}
                    onChange={this.handleOnChange}
                />
                <label htmlFor = "age">Age</label>
                <input
                    type="text" 
                    name="age" 
                    value={this.state.age}
                    onChange={this.handleOnChange}
                />
                <label htmlFor = "img_url">Image Url</label>
                <input
                    type="text" 
                    name="img_url" 
                    value={this.state.img_url}
                    onChange={this.handleOnChange}
                />
                <label htmlFor = "shelter_id">Shelter_id</label>
                <input
                    type="text" 
                    name="shelter_id" 
                    value={this.state.shelter_id}
                    onChange={this.handleOnChange}
                />

                <button type="submit">Submit</button>
            </form>   
            <div className= "new-dog-form-container-container"> </div>
           

        </>
    );

}};

export default NewDogForm;