import React from 'react'


class NewDogForm extends React.Component {
    state = {
        text: "",
    //    breed : "",
    //    name: "",
    //    age: "",
    //    img_url: "",
    //    shelter_id: ""
    };

    handleOnChange = (e) => {
        const {key, value} = e.target;
        this.setState({ [key]: value})
           // [event.target.name] : event.target.value
        //});
        
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        
}

    render() {
        return (
            <form action="" onSubmit={this.handleOnSubmit}>
                <input
                    onChange={this.handleOnChange}
                    breed="text"
                    name="text"
                    age="text"
                    img_url=""
                    shelter_id=""
                />
                <button>Submit</button>
            </form>

    )
    }

    };

export default NewDogForm;