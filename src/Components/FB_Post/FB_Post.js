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
import moment from "moment";


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
  constructor(props) {
    super(props)
    this.state = {
      showEmoji: false,
      likeBtnFlag: false,
      likes: props.post.likes
    }

    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    const { showEmoji, likes, likeBtnFlag } = this.state

    this.setState({ showEmoji: !showEmoji, likeBtnFlag: !likeBtnFlag });
    likes.includes("You") ? likes.shift("You") : likes.unshift("You")
    this.setState({ likes })
  }

  render() {
    const { classes, post } = this.props;
    const { showEmoji, likes, likeBtnFlag } = this.state
    // console.log("post****", post);

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
            subheader={moment(post.createdAt).fromNow()}
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
          <p style={{ fontSize: "10px", marginLeft: '2px' }}>{likes[0]}, {likes[1]} and {likes.length - 2} others</p>
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
            <IconButton aria-label="Like" onClick={this.handleLike} color={likeBtnFlag ? "primary" : "default"}>
              <FavoriteIcon />
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
