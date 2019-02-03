import React, {Component} from 'react';

class adminListItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.project.name}</td>
            </tr>
        );
    }
}

export default adminListItem;