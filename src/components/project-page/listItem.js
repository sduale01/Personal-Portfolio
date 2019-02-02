import React, {Component} from 'react';
import {connect} from 'react-redux';

class listItem extends Component {
    render() {
        
        let webTag;
        if(this.props.project.website === ''){
            webTag = <div></div>;
        } else {
            webTag = <a href={this.props.project.website}>Website</a>
        }

        let gitTag;
        if(this.props.project.github === ''){
            gitTag = <div></div>
        }else {
            gitTag = <a href={this.props.project.github}>GitHub</a>
        }
        return (
            <tr>
                <td><img src={this.props.project.thumbnail} /></td>
                <td>{this.props.project.name}</td>
                <td>{gitTag}</td>
                <td>{webTag}</td>
                <td>{this.props.project.tag_name}</td>
                <td>{this.props.project.description}</td>
            </tr>
        );
    }
}

export default connect()(listItem);