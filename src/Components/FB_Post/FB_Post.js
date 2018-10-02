import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// other libs
import FacebookEmoji from 'react-facebook-emoji';
import FacebookImage from "react-fb-image-grid";

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: '5px',
    padding: '0px'
  },
  actions: {
    display: 'flex',
  }
});

class FBPost extends React.Component {
  constructor() {
    super()
    this.state = {
      showEmoji: false
    }
  }

  render() {
    const { classes, post } = this.props;
    const { showEmoji } = this.state
    console.log("post****", post);

    return (
      <div>

        <Card className={classes.card}>

          <CardHeader
            avatar={
              <Avatar aria-label="Profile Picture">
                <img src={post.avatar} alt="" width="40px" height="40px" />
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={post.createdBy}
            subheader={post.createdAt}
          />
          <CardContent>
            <Typography component="p">
              {post.description}
            </Typography>
          </CardContent>
          <div>
            <FacebookImage width={100} countFrom={5} images={post.images} />
          </div>
          <hr />
          <p style={{ fontSize: "10px", marginLeft: '2px' }}>{post.likes[0]}, {post.likes[1]} and {post.likes.length - 2} others</p>
          {
            showEmoji ? <div>
              <FacebookEmoji size="sm" type="like" />
              <FacebookEmoji size="sm" type="love" />
              <FacebookEmoji size="sm" type="wow" />
              <FacebookEmoji size="sm" type="yay" />
              <FacebookEmoji size="sm" type="angry" />
              <FacebookEmoji size="sm" type="haha" />
              <FacebookEmoji size="sm" type="sad" />
            </div> : null
          }
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon onClick={() => { this.setState({ showEmoji: !showEmoji }) }} />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>

      </div>
    );
  }
}

FBPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FBPost);
