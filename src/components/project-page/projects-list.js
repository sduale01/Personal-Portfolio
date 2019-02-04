import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListItem from './listItem.js';

class ProjectList extends Component {
    componentDidMount() {
        this.getProjectList();
    }

    getProjectList = () => {
        const action = {type: 'FETCH_PROEJCTS'};
        this.props.dispatch(action);
    }
    render() {
        return (

            <div className="projectslist">
                {this.props.reduxStore.projects.map(project =>
                         <ListItem key={project.id} project={project} />
                    )}
            </div>
        );
    }


}
const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
}); 

export default connect(mapReduxStoreToProps)(ProjectList);