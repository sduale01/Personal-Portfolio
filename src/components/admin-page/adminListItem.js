import React, {Component} from 'react';

class adminListItem extends Component {
    deleteProject = () => {
        console.log('delete pressed', this.props.project.id);
        
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

export default adminListItem;