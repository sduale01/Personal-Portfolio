import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListItem from './listItem.js'

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
            // <table>
            //     <thead>
            //         <th>Thumbnail</th>
            //         <th>Name</th>
            //         <th>Github</th>
            //         <th>Website</th>
            //         <th>Tags</th>
            //         <th>Description</th>
            //     </thead>
            //     <tbody>
            //         {this.props.reduxStore.projects.map(project => {
            //             return <ListItem key={project.id} project={project} />
            //         })}
            //     </tbody>
            // </table>

            <div className="projects-list">
                {this.props.reduxStore.projects.map(project => {
                        return <ListItem key={project.id} project={project} />
                    })}
            </div>
        );
    }


}
const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
}); 

export default connect(mapReduxStoreToProps)(ProjectList);