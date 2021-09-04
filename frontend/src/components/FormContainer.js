import React from 'react'


class FormContainer extends React.Component {
    state = {
       breed : "",
       name: "",
       age: "",
       img: "",
       shelter_id: ""
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
        
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9292/dogs", this.addDog())
        .then(res => res.json())
        .then((cars => this.props.history.push("/dogs"))
        )}

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
    

    render() {
        return(
            <>
            <button button class="btn danger" onClick={() => this.props.history.goBack()}>Back</button>
                <form className="new-car-form has-text-weight-bold has-text-black-bis" onSubmit= {this.handleOnSubmit}>
                <p>Add a Dream Car</p>
                
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
                    <label htmlFor = "img">Image Url</label>
                    <input
                        type="text" 
                        name="img" 
                        value={this.state.img}
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
                <div className= "form-container-container">
            </div>
            </>
        );
    }

}


export default FormContainer;