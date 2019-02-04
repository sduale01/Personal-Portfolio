import React, {Component} from 'react';
import {connect} from 'react-redux';

// MATERIAL UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 240,
    },
  });

class listItem extends Component {
    render() {
        
        // Refrence styles object
        const {classes} = this.props;
        
        let webTag;
        if(this.props.project.website === ''){
            webTag = <div></div>
        } else {
            webTag = <Button href={this.props.project.website} size="small" color="primary">
                        Website
                    </Button>
        }

        let gitTag;
        if(this.props.project.github === ''){
            gitTag = <div></div>
        }else {
            gitTag = <Button href={this.props.project.github} size="small" color="primary">
                        GitHub
                    </Button>
        }
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={this.props.project.thumbnail}
                    title="Project Image"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.project.name}
                    </Typography>
                    <Typography component="p">
                        {this.props.project.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {gitTag}
                    {webTag}      
                </CardActions>
            </Card>
        );
    }
}

export default connect()(withStyles(styles)(listItem));