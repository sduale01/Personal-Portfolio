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


const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };

class listItem extends Component {
    render() {
        
        // Refrence styles object
        const {classes} = this.props;
        
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
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={this.props.project.thumbnail}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>



            // <tr>
            //     <td><img src={this.props.project.thumbnail} /></td>
            //     <td>{this.props.project.name}</td>
            //     <td>{gitTag}</td>
            //     <td>{webTag}</td>
            //     <td>{this.props.project.tag_name}</td>
            //     <td>{this.props.project.description}</td>
            // </tr>
        );
    }
}

export default connect()(withStyles(styles)(listItem));