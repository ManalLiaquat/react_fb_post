import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// other libs
import FacebookEmoji from "react-facebook-emoji";
import FacebookImage from "react-fb-image-grid";
import moment from "moment";

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: "5px",
    padding: "0px"
  },
  actions: {
    display: "flex"
  }
});

class FBPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReactions: false,
      likeBtnFlag: false,
      likes: props.post.likes,
      // reactions on hover like button
      reactLike: false,
      reactLove: false,
      reactWow: false,
      reactYay: false,
      reactAngry: false,
      reactHaha: false,
      reactSad: false
    };
    this.handlerShowReactions = this.handlerShowReactions.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    const { likes, likeBtnFlag, showReactions } = this.state;

    this.setState({ likeBtnFlag: !likeBtnFlag });
    likes.includes("You") ? likes.shift("You") : likes.unshift("You");
    this.setState({ likes, showReactions: !showReactions });
  }

  handlerShowReactions(param) {
    // const { showReactions } = this.state
    this.setState({ showReactions: param });
  }

  render() {
    const { classes, post } = this.props;
    const {
      showReactions,
      likes,
      likeBtnFlag,
      reactLike,
      reactLove,
      reactWow,
      reactYay,
      reactAngry,
      reactHaha,
      reactSad
    } = this.state;
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
            <Typography component="p">{post.description}</Typography>
          </CardContent>
          <div id="fbImage">
            <FacebookImage
              images={post.images}
              countFrom={5}
              width={100}
              align="left"
            />
          </div>
          <hr />
          <p style={{ fontSize: "10px", marginLeft: "2px" }}>
            {likes[0]}, {likes[1]} and {likes.length - 2} others
          </p>
          {showReactions && (
            <div
              style={{
                bottom: "7%",
                position: "fixed",
                padding: "5px 10px",
                borderRadius: "50px",
                background: "#fafafa",
                boxShadow: "1px 1px 5px grey"
              }}
              onMouseLeave={() => {
                this.handlerShowReactions(false);
              }}
            >
              <span
                onMouseOver={() => {
                  this.setState({ reactLike: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactLike: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactLike: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactLike: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactLike: false });
                }}
              >
                <FacebookEmoji size={reactLike ? "md" : "sm"} type="like" />
              </span>
              <span
                onMouseOver={() => {
                  this.setState({ reactLove: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactLove: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactLove: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactLove: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactLove: false });
                }}
              >
                <FacebookEmoji size={reactLove ? "md" : "sm"} type="love" />
              </span>
              <span
                onMouseOver={() => {
                  this.setState({ reactHaha: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactHaha: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactHaha: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactHaha: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactHaha: false });
                }}
              >
                <FacebookEmoji size={reactHaha ? "md" : "sm"} type="haha" />
              </span>
              <span
                onMouseOver={() => {
                  this.setState({ reactYay: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactYay: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactYay: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactYay: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactYay: false });
                }}
              >
                <FacebookEmoji size={reactYay ? "md" : "sm"} type="yay" />
              </span>
              <span
                onMouseOver={() => {
                  this.setState({ reactWow: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactWow: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactWow: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactWow: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactWow: false });
                }}
              >
                <FacebookEmoji size={reactWow ? "md" : "sm"} type="wow" />
              </span>
              <span
                onMouseOver={() => {
                  this.setState({ reactAngry: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactAngry: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactAngry: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactAngry: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactAngry: false });
                }}
              >
                <FacebookEmoji size={reactAngry ? "md" : "sm"} type="angry" />
              </span>
              <span
                onMouseOver={() => {
                  this.setState({ reactSad: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactSad: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactSad: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactSad: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactSad: false });
                }}
              >
                <FacebookEmoji size={reactSad ? "md" : "sm"} type="sad" />
              </span>
            </div>
          )}
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              aria-label="Like"
              onClick={this.handleLike}
              onMouseEnter={() => {
                this.handlerShowReactions(true);
              }}
              onTouchStart={() => {
                this.handlerShowReactions(true);
              }}
              onBlurCapture={() => {
                this.handlerShowReactions(false);
              }}
              color={likeBtnFlag ? "primary" : "default"}
            >
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FBPost);
