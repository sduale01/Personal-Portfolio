import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class adminListItem extends Component {
    // Delete a project
    deleteProject = () => {
        console.log('delete pressed', this.props.project.id);
        axios.delete(`/portfolio/${this.props.project.id}`).then(response => {
            this.props.dispatch({type: 'FETCH_PROEJCTS'})
        }).catch(error => {
            console.log('error in DELETE', error); 
        });
        
    }
    render() {
        return (
            <tr>
                <td>{this.props.project.name}</td>
                <td><button onClick={this.deleteProject}>DELETE</button></td>
            </tr>
        );
    }
}

export default connect()(adminListItem);