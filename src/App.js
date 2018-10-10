import React, { Component } from "react";
import SimpleAppBar from "./Components/Navbar/Navbar";
import FBPost from "./Components/FB_Post/FB_Post";
// material ui
import { Grid } from "@material-ui/core";
// import NavigateNext from "@material-ui/icons/NavigateNext";
// material ui

class App extends Component {
  constructor() {
    super();
    this.state = {
      post_obj: {
        createdBy: "Manal Liaquat",
        avatar:
          "https://pbs.twimg.com/profile_images/711491232980148224/Sqh_Tbh7_400x400.jpg",
        description:
          'Check this out new OPPO F9 Pro, 6.3" 16MP Camera, 6GB RAM and 3500 mAh',
        images: [
          "https://cdn.gsmarena.com/imgroot/news/18/08/oppo-f9-pro-india-announcement/-728/gsmarena_000.jpg",
          "https://st1.bgr.in/wp-content/uploads/2018/08/oppo-f9-back.jpg",
          "https://www.themobileindian.com/resizer.php?src=/public/uploads/news/2018/08/23344/oppo-1.jpg&w=735&h=425",
          "https://static.digit.in/product/3f50d89b928a93e38b72e7dc2f7d54c8a26d52d0.jpeg",
          "https://i.gadgets360cdn.com/products/large/1534834178_635_oppo_f9_pro.jpg",
          "https://propakistani.pk/price/wp-content/uploads/2018/07/ComingSoon_Pic-copy-5.jpg",
          "https://i.ytimg.com/vi/SenBAVnyCyU/maxresdefault.jpg",
          "https://static.toiimg.com/thumb/msid-65617343,width-640,resizemode-4/65617343.jpg"
        ],
        createdAt: Date.now(),
        likes: [
          "Usman",
          "afzal",
          "asad",
          "usama",
          "sarim",
          "faraz",
          "omer",
          "masood"
        ]
      }
    };
  }

  render() {
    const paperStyle = { padding: "0px", margin: "0px" };
    const { post_obj } = this.state;
    return (
      <div>
        <SimpleAppBar />
        <Grid
          container
          style={paperStyle}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div style={paperStyle}>
            <FBPost post={post_obj} />
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
