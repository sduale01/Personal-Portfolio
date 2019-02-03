import React, {Component} from 'react';
import {connect} from 'react-redux';
import AdminListItem from './adminListItem.js'

class adminProjects extends Component {
    componentDidMount() {
        this.getProjectList();
    }

    getProjectList = () => {
        const action = {type: 'FETCH_PROEJCTS'};
        this.props.dispatch(action);
    }
    render() {
        return (
            <table>
                <thead>
                    <th>Name</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {this.props.reduxStore.projects.map(project => {
                        return <AdminListItem key={project.id} project={project} />
                    })}
                </tbody>
            </table>
        );
    }


}
const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapReduxStoreToProps)(adminProjects);