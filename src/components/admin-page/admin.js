import React, {Component} from 'react';
import axios from 'axios';

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            formStatus: {
                name: '',
                description: '',
                thumbnail: '',
                tag_id: null,
                website: '',
                github: '',
                date_completed: '',
            }
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state.formStatus);
        
    }

    handleNameChange = (event) => {
        this.setState({
            formStatus: {
                ...this.state.formStatus,
                name: event.target.value
            }
        });
    }

    handleDateChange = (event) => {
        this.setState({
            formStatus: {
                ...this.state.formStatus,
                date_completed: event.target.value
            }
        });
    }

    handleSelectChange = (event) => {
        this.setState ({
            formStatus: {
                ...this.state.formStatus,
                tag_id: event.target.value
            }
        });   
    }

    handleThumbnailChange = (event) => {
        this.setState ({
            formStatus: {
                ...this.state.formStatus,
                thumbnail: event.target.value
            }
        });   
    }

    handleGitHubChange = (event) => {
        this.setState ({
            formStatus: {
                ...this.state.formStatus,
                github: event.target.value
            }
        });   
    }

    handleWebsiteChange = (event) => {
        this.setState ({
            formStatus: {
                ...this.state.formStatus,
                website: event.target.value
            }
        });   
    }
    
    handleDescriptionChange = (event) => {
        this.setState ({
            formStatus: {
                ...this.state.formStatus,
                description: event.target.value
            }
        });   
    }
    render() {
        return(
            <div>
                <h1>Admin</h1>
                <h2>Add New Project</h2>
                <form onSubmit={this.submitForm}>
                    <input onChange={this.handleNameChange} type="text" placeholder="Name"/>
                    <input onChange={this.handleDateChange} type="date" />
                    <select onChange={this.handleSelectChange} defaultValue={this.state.formStatus.tag_id} name="tags">
                        <option disabled="disabled" selected="selected">Select a Tag</option>
                        <option value="1">React</option>
                        <option value="2">jQuery</option>
                        <option value="3">Node</option>
                        <option value="4">SQL</option>
                        <option value="5">Redux</option>
                        <option value="6">HTML</option>
                    </select>
                    <input onChange={this.handleThumbnailChange} type="text" placeholder="Image Path"/>
                    <input onChange={this.handleGitHubChange} type="text" placeholder="GitHub URL" />
                    <input onChange={this.handleWebsiteChange} type="text" placeholder="Website URL(optional)"/>
                    <textarea onChange={this.handleDescriptionChange} name="descripton" rows="5" cols="80"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Admin;